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
        <div className="container mx-auto px-4 py-6">
            <p className="text-gray-600">Profiles &gt; Purchase History</p>
            <hr className="my-4 border-gray-300" />
            <h1 className="text-3xl font-bold text-center">Purchase History</h1>

            <div className={`${styles.displayHistory} mt-6`}>
                {coursesData.length === 0 ? (
                    <p className="text-center text-gray-500">No purchase history available.</p>
                ) : (
                    coursesData.map((course, index) => (
                        <div className="bg-white shadow-md rounded-lg mb-6" key={index}>
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/3">
                                    <img
                                        src={course.imageUrl}
                                        className={`w-full h-auto rounded-t-lg md:rounded-l-lg ${styles.imgCard}`}
                                        alt='Example'
                                    />
                                </div>
                                <div className="md:w-2/3 p-4">
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <h4 className="text-xl font-semibold">{course.courseName}</h4>
                                            <p className="mt-2 text-gray-700">
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
                                ))
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
