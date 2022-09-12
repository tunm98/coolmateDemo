import "./App.css";
import Header from "./components/header/index";
import Carousel from "./components/carousel/index";
import Category from "./components/detailCategories/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Category/>
    </div>
  );
}

export default App;
