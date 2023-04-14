import { Routes, Route } from "react-router-dom";
import Charts from "./charts";
import CalHeatMap from "./calHeatMap";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CalHeatMap />}></Route>
      <Route path="/charts" element={<Charts />}></Route>
    </Routes>
  );
}
