import { BsCurrencyDollar } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const Course = ({
  course,
  selectedCourse,
  setSelectedCourse,
  setTotalCredit,
  setRemaining,
}) => {
  const { course_description, image_link, credit_hour, price, course_name } =
    course;

  const handleSelect = (course) => {
    const isExist = selectedCourse.find((item) => item.id === course.id);
    let creditValue = course.credit_hour;
    if (isExist) {
      toast.error("Already Added This Course");
    } else {
      selectedCourse.forEach((item) => {
        creditValue = creditValue + item.credit_hour;
      });
      let remainingCredit = 20 - creditValue;
      if (creditValue > 20) {
        toast.error("Limit Cross of Credit Hour");
      } else {
        setTotalCredit(creditValue);
        setRemaining(remainingCredit);
        const newData = [...selectedCourse, course];
        setSelectedCourse(newData);
      }
    }
  };

  return (
    <div className="w-[290px] h-[400px] drop-shadow-2xl rounded-lg  bg-[#FFF]">
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
      <button
        onClick={() => handleSelect(course)}
        className="btn mt-2 w-[250px] h-[40px] bg-[#2F80ED] flex mx-auto text-white text-center hover:bg-slate-500"
      >
        Select
      </button>
    </div>
  );
};

export default Course;

Course.propTypes = {
  course: PropTypes.object,
  selectedCourse: PropTypes.array,
  setSelectedCourse: PropTypes.func,
  setTotalCredit: PropTypes.func,
  setRemaining: PropTypes.func,
};
