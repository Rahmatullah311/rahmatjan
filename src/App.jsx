import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRouter from "./auth/AuthRouter";
import SolutionUrl from "./solution/SolutionUrl";
import HomeUrls from "./home/HomeUrls";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="home/*" element={<HomeUrls />}></Route>
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="/*" element={<SolutionUrl />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
