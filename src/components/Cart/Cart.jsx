import PropTypes from "prop-types";

const Cart = ({ remaining, selectedCourse, totalCredit }) => {
  return (
    <div className="w-[290px] h-[355px] mt-14 ml-3 bg-gray-100  rounded-lg">
      <h1 className=" mt-2 text-[#2F80ED] font-bold text-xl p-2">
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

      <h1 className="text-xl font-bold mt-2 p-2 ">Course Name</h1>
      <div className="list-decimal p-2 h-[150px]">
        {selectedCourse.map((course) => (
          <li key={course.id}>{course.course_name}</li>
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
        <h1 className="text-[16px] font-bold p-2 mt-2">
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
