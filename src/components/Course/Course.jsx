import { BsCurrencyDollar } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import PropTypes from "prop-types";

const Course = ({ course }) => {
  const { course_description, image_link, credit_hour, price, course_name } =
    course;
  return (
    <div className="w-[290px] h-[400px] drop-shadow-2xl rounded-lg  bg-gray-50">
      <div>
        <img
          className="w-[290px] h-[154px] mt-2 rounded-lg p-2 mx-auto"
          src={image_link}
          alt=""
        />
        <h1 className="text-[16px] font-bold text-center">{course_name}</h1>

        <p className="p-2 text-center text-slate-500">{course_description}</p>

        <div className="flex flex-row mt-3 justify-center">
          <div className=" flex flex-row">
            <div className="pl-2 text-xl my-auto">
              <BsCurrencyDollar />
            </div>
            <div>
              <p>Price : {price}</p>
            </div>
          </div>
          <div className="ml-2 flex flex-row">
            <div className="text-xl my-auto pl-2">
              <BsBook />
            </div>
            <div className="ml-2">
              <p>Credit : {credit_hour}hr</p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn mt-2 w-[250px] h-[40px] bg-[#2F80ED] flex mx-auto text-white text-center hover:bg-slate-500">
        Select
      </button>
    </div>
  );
};

export default Course;

Course.propTypes = {
  course: PropTypes.object,
};
