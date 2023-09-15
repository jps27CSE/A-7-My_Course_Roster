import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [courses, setCourses] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data.courses));
  }, []);

  return (
    <div className="bg-[#F3F3F3]">
      <ToastContainer />
      <div>
        <h1 className="pt-5 text-3xl font-bold text-center">
          Course Registration
        </h1>
      </div>
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-10 my-10  flex flex-col lg:flex-row justify-between">
        <Courses
          courses={courses}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          setTotalCredit={setTotalCredit}
          setRemaining={setRemaining}
        />
        <Cart
          remaining={remaining}
          selectedCourse={selectedCourse}
          totalCredit={totalCredit}
        />
      </div>
    </div>
  );
}

export default App;
