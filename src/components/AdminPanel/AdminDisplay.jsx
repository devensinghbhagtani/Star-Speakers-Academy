export default function AdminDisplay() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
                <div className="space-y-6">
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                        <h2 className="text-xl font-semibold mb-2"> <a href="/admin/MasterClassEdit">MasterClass</a></h2>
                        <p className="text-gray-700">
                            Here, you can edit the Masterclass page with all relevant information. Make sure to review all details carefully before saving changes.
                        </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                        <h2 className="text-xl font-semibold mb-2"> <a href="/admin/addCourse">Add Course</a></h2>
                        <p className="text-gray-700">
                            Use this section to add new courses to the platform. Ensure that all required fields are filled out correctly to provide accurate course information.
                        </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                        <h2 className="text-xl font-semibold mb-2"> <a href="/admin/viewCourses">View Courses</a></h2>
                        <p className="text-gray-700">
                            This section displays all the uploaded courses. You can view details of each course, including descriptions, instructors, and other relevant information.
                        </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                        <h2 className="text-xl font-semibold mb-2"> <a href="/admin/editCourse">Edit Course</a></h2>
                        <p className="text-gray-700">
                            Here, you can edit existing courses. Update course details as needed and ensure that all changes are accurate before saving.
                        </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                        <h2 className="text-xl font-semibold mb-2"> <a href="/admin/EditHome">Edit Home</a></h2>
                        <p className="text-gray-700">
                            This section allows you to edit all the details that appear on the Home page. Review all sections carefully to ensure consistency and accuracy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
