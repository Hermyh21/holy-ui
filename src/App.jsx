import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "~/layouts";
import ProtectedLayout from "~/layouts/ProtectedLayout";
import NotFoundPage from "~/pages/404";
import Login from "~/pages/Login";
import CategoryPages from "~/pages/WebsiteCategoryPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route exact path="/admin" element={<ProtectedLayout />}>
          <Route path=":category" exact element={<CategoryPages />} />
          <Route path="*" exact element={<NotFoundPage />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/:category" exact element={<CategoryPages />} />
          <Route path="*" exact element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
