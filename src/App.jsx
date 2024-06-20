import SimpleForm from "./components/SimpleForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DetailWindow from "./components/DetailWindow";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SimpleForm />} />
          <Route path="/pop-up" element={<DetailWindow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
