import "./App.css";
import Background from "./Background/Background";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className="app">
      <Background />
      <Body />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
