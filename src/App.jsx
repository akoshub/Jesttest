import DartsList from "./components/DartsList";
import './App.css'
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import DartsAdd from "./components/DartsAdd";
import DartsPut from "./components/DartsPut";

function App() {
  return (
    <BrowserRouter>
      <nav>
      <ul>
        <li><Link to="/">Főoldal</Link></li>
        <li><Link to="DartsAdd">Új Darts Hozzáadása</Link></li>
      </ul>
      </nav>
      <Routes>
        <Route path="/">
        <Route index element={<DartsList></DartsList>}></Route>
        <Route path="DartsAdd" element={<DartsAdd></DartsAdd>}></Route>
        <Route path=":id/DartsPut" element={<DartsPut></DartsPut>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
