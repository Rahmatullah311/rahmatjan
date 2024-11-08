import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SolutionUrl from "./solution/SolutionUrl";
import HomeUrls from "./home/HomeUrls";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="home/*" element={<HomeUrls />}></Route>
          <Route path="/*" element={<SolutionUrl />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
