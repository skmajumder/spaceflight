import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import SpaceflightProvider from "./contexts/SpaceflightProvider";

const App = () => {
  return (
    <SpaceflightProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </SpaceflightProvider>
  );
};

export default App;
