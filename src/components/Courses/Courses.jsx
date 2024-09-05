import React, { useState } from "react";
import SearchSection from "./SearchSection";
import DisplayCourses from "./DisplayCourses";

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <SearchSection onSearch={handleSearch} />
      <DisplayCourses searchTerm={searchTerm} />
    </>
  );
}

export default Courses;
