import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetails from "./pages/ItemDetails/ItemDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ItemDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
