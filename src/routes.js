import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./pages/test";
function RoutesMain() {
  //   const location = useLocation();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default RoutesMain;
