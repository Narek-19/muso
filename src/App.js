import "./App.css";
import { Nav } from "./containers/Nav";
import { Body } from "./containers/Body";
import {Footer} from "./containers/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
