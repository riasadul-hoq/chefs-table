import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto mt-10">
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
