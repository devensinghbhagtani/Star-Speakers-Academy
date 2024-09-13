import React, { useState } from "react";
import SearchSection from "./SearchSection";
import DisplayCourses from "./DisplayCourses";

function Courses(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <SearchSection onSearch={handleSearch} />
      <DisplayCourses searchTerm={searchTerm} user={props.user} />
    </>
  );
}

export default Courses;
