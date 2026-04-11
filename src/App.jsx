import {
  AboutUs,
  Appdesing,
  Graphicdesing,
  Home,
  Location,
  Webdesign,
} from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web" element={<Webdesign />} />
          <Route path="/app" element={<Appdesing />} />
          <Route path="/graphic" element={<Graphicdesing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
