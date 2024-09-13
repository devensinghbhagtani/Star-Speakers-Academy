import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from "../UserContext";
import styles from './UserProfile.module.css';

export default function PurchaseHistory() {
    const { user } = useUser();
    const [coursesData, setCoursesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoursesData = async () => {
            try {
                if (user && user.coursesinfo && user.coursesinfo.M) {
                    const courses = Object.keys(user.coursesinfo.M);
                    const coursesPromises = courses.map(async (course) => {
                        const response = await axios.get(
                            `http://localhost:8081/videos/getvideodetails?folder=${course}`
                        );

                        const imageurl = await axios.get(`http://localhost:8081/masterclass/getcourseimage?course=${response.data.tableout.course_image.S}`)
                        console.log(imageurl)
                        return {
                            courseName: course,
                            imageUrl: imageurl.data.courseimage,
                            ...response.data.tableout
                        };
                    });

                    const coursesDetails = await Promise.all(coursesPromises);
                    console.log(coursesDetails);
                    console.log(user)
                    setCoursesData(coursesDetails);
                }
            } catch (err) {
                setError(err);
                console.error("Error fetching course information:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCoursesData();
    }, [user]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error.message}</p>;

    return (
        <div>
            <div className="container">
                <p>{"Profiles > Purchase History"}</p>
                <hr />
                <h1 className="text-center">Purchase History</h1>
                <div className={`${styles.displayHistory}`}>
                    <div className="row">
                        {coursesData.length === 0 ? (
                            <p>No purchase history available.</p>
                        ) : (
                            coursesData.map((course, index) => (
                                <div className="row" key={index}>
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img
                                                    src={course.imageUrl}
                                                    className={`img-fluid rounded-start ${styles.imgCard}`}
                                                    alt='Example'
                                                />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h4 className="card-title">{course?.courseName}</h4>
                                                    <p className="card-text">
                                                        <i><b>
                                                            {user.coursesinfo && user.coursesinfo.M && user.coursesinfo.M[course?.courseName] 
                                                            ? `${user.coursesinfo?.M[course?.courseName].M?.amount?.N} RS` 
                                                            : "Price not available"}
                                                        </b></i>

                                                    </p>
                                                    {/* Add more details here if needed */}
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
