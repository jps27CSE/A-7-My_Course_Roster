import Course from "../Course/Course";

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mt-10">
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  );
};

export default Courses;
