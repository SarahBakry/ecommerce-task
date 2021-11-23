import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Navbar from "./components/Navbar/Navbar";
import { history } from "./services/helpers/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
