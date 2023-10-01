import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import Fields from "./Fields";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/field" element={<Fields />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
