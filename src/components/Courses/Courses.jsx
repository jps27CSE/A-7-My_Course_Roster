import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 mx-auto mt-10">
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Courses;

Courses.propTypes = {
  courses: PropTypes.array,
};
