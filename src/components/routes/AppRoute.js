import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Auth/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
