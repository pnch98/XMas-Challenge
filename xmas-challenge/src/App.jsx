import MyHeader from "./components/MyHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Load from "./components/Load";

function App() {
  return (
    <div className="App">
      <MyHeader className="mb-5" />
      <main>
        <Load />
      </main>
    </div>
  );
}

export default App;
