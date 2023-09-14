import PropTypes from "prop-types";

const Cart = ({ remaining, selectedCourse, totalCredit }) => {
  return (
    <div className="w-[290px] h-[355px] mt-10 ml-4 bg-[#FFF]  rounded-lg">
      <h1 className=" mt-2 text-[#2F80ED] font-bold text-[18px] p-2 text-center">
        Credit Hour Remaining {remaining} hr
      </h1>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 0.5,
          borderColor: "#000000",
        }}
        className="w-64 mx-auto"
      />

      <h1 className="text-xl font-bold mt-2 pl-4 ">Course Name</h1>
      <div className="list-decimal ml-3 p-2 h-[190px]">
        {selectedCourse.map((course) => (
          <li className="text-[16px] text-slate-500" key={course.id}>
            {course.course_name}
          </li>
        ))}
      </div>

      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 0.5,
          borderColor: "#000000",
        }}
        className="w-64 mx-auto"
      />

      <div>
        <h1 className="text-[16px] font-bold p-4 mt-2">
          Total Credit Hour : {totalCredit}
        </h1>
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  remaining: PropTypes.number,
  selectedCourse: PropTypes.array,
  totalCredit: PropTypes.number,
};
