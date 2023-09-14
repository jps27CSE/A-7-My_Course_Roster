import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data.courses));
  }, []);

  return (
    <div>
      <div>
        <h1 className="mt-5 text-3xl font-bold text-center">
          Course Registration
        </h1>
      </div>
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-10 my-10  flex flex-col lg:flex-row justify-between">
        <Courses courses={courses} />
        <Cart />
      </div>
    </div>
  );
}

export default App;
