import { Container } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CheckOut from "./pages/CheckOut";

const App = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/check-out" element={<CheckOut />}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
