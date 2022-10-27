import { Route, Routes, Navigate } from "react-router-dom";
import Page from "./Page.js";
import Item from "./items/Item.js";

// function App() {
//   return (
//   }
export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Page />}>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/:itemName" element={<Item />} />
        </Route>
      </Routes>
    </>
  );
};
