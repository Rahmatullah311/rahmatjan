import { Routes, Route } from "react-router-dom";
import WebLayout from "../layouts/WebLayout";
import HomePage from "./HomePage";
const HomeUrls = () => {
  return (
    <WebLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </WebLayout>
  );
};

export default HomeUrls;
