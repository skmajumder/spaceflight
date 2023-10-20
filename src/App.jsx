import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
