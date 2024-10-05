import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../UserContext";
import styles from "./UserProfile.module.css";

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
            try {
              const response = await axios.get(
                `${
                  import.meta.env.VITE_SERVER_URL
                }/videos/getvideodetails?folder=${course}`
              );

              const courseImage = response?.data?.tableout?.course_image?.S;

              // Default image URL if courseImage is not available
              const defaultImageUrl =
                "https://thebestbiology.com/wp-content/uploads/2021/01/DELETED-COURSE.jpg.webp"; // Use a default image URL

              // Fetch image URL
              const imageurl = courseImage
                ? await axios.get(
                    `${
                      import.meta.env.VITE_SERVER_URL
                    }/masterclass/getcourseimage?course=${courseImage}`
                  )
                : { data: { courseimage: defaultImageUrl } };

              return {
                courseName: course,
                imageUrl: imageurl.data?.courseimage || defaultImageUrl,
                ...response.data.tableout,
              };
            } catch (innerError) {
              console.error(
                `Error fetching details for course ${course}:`,
                innerError
              );
              return {
                courseName: course,
                imageUrl:
                  "https://thebestbiology.com/wp-content/uploads/2021/01/DELETED-COURSE.jpg.webp", // Fallback image URL
                // Optionally handle other course details
              };
            }
          });

          const coursesDetails = await Promise.all(coursesPromises);
          //  console.log(coursesDetails);
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
    <div className="md:border-l-2  h-full mt-10 md:mt-0 md:pl-10 md:p-6">
      <h1 className="text-2xl font-semibold pl-0 mb-4">Purchase History</h1>

      <div className={`${styles.displayHistory} mt-6`}>
        {coursesData.length === 0 ? (
          <p className=" bg-zinc-50 p-10 rounded-lg text-zinc-600">
            No purchase history available.
          </p>
        ) : (
          <div className="flex flex-wrap gap-x-5 items-center justify-center">
            {coursesData.map((course, index) => (
              <div key={index} className="">
                <div className="h-full">
                  <div className="bg-white w-[230px] shadow-md rounded-lg mb-6">
                    <div className="flex flex-col">
                      <div>
                        <img
                          src={course?.imageUrl}
                          className="w-full h-[150px] object-cover rounded-lg md:rounded-l-lg"
                          alt="Example"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex flex-col justify-between h-full">
                          <h4 className="text-md font-semibold">
                            {course.courseName}
                          </h4>
                          <h1 className="mt-2 bg-custom-green px-4 py-1 w-fit rounded-lg text-md font-semibold text-white bottom-0">
                            {user.coursesinfo &&
                            user.coursesinfo.M &&
                            user.coursesinfo.M[course?.courseName]
                              ? `${
                                  user.coursesinfo?.M[course?.courseName].M
                                    ?.amount?.N
                                } RS`
                              : "Price not available"}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
// <div className="bg-white shadow-md rounded-lg mb-6" key={index}>
//   <div className="flex flex-col md:flex-row">
//     <div className="md:w-1/3">
//       <img
//         src={course?.imageUrl}
//         className={`w-full h-auto rounded-t-lg md:rounded-l-lg ${styles.imgCard}`}
//         alt="Example"
//       />
//     </div>
//     <div className="md:w-2/3 p-4">
//       <div className="flex flex-col justify-between h-full">
//         <div>
//           <h4 className="text-xl font-semibold">
//             {course.courseName}
//           </h4>
//           <p className="mt-2 text-gray-700">
//             <i>
//               <b>
//                 {user.coursesinfo &&
//                 user.coursesinfo.M &&
//                 user.coursesinfo.M[course?.courseName]
//                   ? `${
//                       user.coursesinfo?.M[course?.courseName].M
//                         ?.amount?.N
//                     } RS`
//                   : "Price not available"}
//               </b>
//             </i>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
