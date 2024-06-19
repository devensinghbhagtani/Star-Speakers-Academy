import AboutCourse from "./AboutCourse";
import CourseCurriculum from "./CourseCurriculum";
import CourseHero from "./CourseHero";
import TrainerLanguage from "./TrainerLanguage";
import DiscountLine from "../MasterClass/DiscountLine";
import Feedback from "../Feedback";

function CourseDetails() {
  return (
    <>
      <CourseHero />
      <TrainerLanguage />
      <AboutCourse />
      <DiscountLine />
      <CourseCurriculum />
      <Feedback />
    </>
  );
}

export default CourseDetails;
