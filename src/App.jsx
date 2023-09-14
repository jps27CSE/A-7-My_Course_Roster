import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
function App() {
  return (
    <div>
      <div>
        <h1 className="mt-5 text-3xl font-bold text-center">
          Course Registration
        </h1>
      </div>
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24 my-10  flex flex-row justify-between">
        <Courses />
        <Cart />
      </div>
    </div>
  );
}

export default App;
