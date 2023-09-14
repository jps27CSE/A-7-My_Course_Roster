import { BsCurrencyDollar } from "react-icons/bs";
import { BsBook } from "react-icons/bs";

const Course = () => {
  return (
    <div className="w-[280px] h-[402px] drop-shadow-2xl rounded-lg  bg-slate-200">
      <div>
        <img
          className="w-[290px] h-[154px] mt-2 rounded-lg p-2 mx-auto"
          src="https://i.ibb.co/8jH0M31/Rectangle-2-2.png"
          alt=""
        />
        <h1 className="text-[16px] font-bold text-center">
          Introduction to C Programming
        </h1>

        <p className="p-2 text-center text-slate-500">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="flex flex-row mt-3 justify-center">
          <div className=" flex flex-row">
            <div className="pl-2 text-xl my-auto">
              <BsCurrencyDollar />
            </div>
            <div>
              <p>Price : 15000</p>
            </div>
          </div>
          <div className="ml-2 flex flex-row">
            <div className="text-xl my-auto pl-2">
              <BsBook />
            </div>
            <div className="ml-2">
              <p>Credit : 1hr</p>
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
