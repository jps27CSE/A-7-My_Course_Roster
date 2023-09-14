const Cart = () => {
  return (
    <div className="w-[290px] h-[355px] mt-10 bg-slate-200  rounded-lg">
      <h1 className=" mt-2 text-[#2F80ED] font-bold text-xl p-2">
        Credit Hour Remaining 7 hr
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
        <li>Introduction to c programming</li>
        <li>Introduction to c programming</li>
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
          Total Credit Hour : 13
        </h1>
      </div>
    </div>
  );
};

export default Cart;
