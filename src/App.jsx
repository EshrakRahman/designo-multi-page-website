import { Home, Webdesign } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web" element={<Webdesign />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
