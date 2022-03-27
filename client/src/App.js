import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProductedRoute } from "./pages";
import {
  AddJob,
  AllJob,
  Profile,
  Stats,
  SharedLayout,
} from "./pages/dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProductedRoute>
              <SharedLayout />
            </ProductedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJob />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
