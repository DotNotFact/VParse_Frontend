import { DonateInfo } from "./Components/ProtectedPages/User/DonateInfo/DonateInfo";
import { AddDonate } from "./Components/ProtectedPages/Admin/AddDonate/AddDonate";
import { Bookmark } from "./Components/ProtectedPages/User/Bookmark/Bookmark";
import { Missing } from "./Components/PublicPages/Missing/Missing";
import { Main } from "./Components/ProtectedPages/User/Main/Main";
import { Login } from "./Components/PublicPages/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./Auth/ProtectedRoute";
import { AuthProvider } from "./Auth/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Missing />} />
        <Route path="/main" element={<ProtectedRoute component={Main} />} />
        <Route
          path="/"
          element={
            <ProtectedRoute component={() => <Navigate to="/main" replace />} />
          }
        />
        <Route
          path="/bookmark"
          element={<ProtectedRoute component={Bookmark} />}
        />
        <Route
          path="/adddonate"
          element={<ProtectedRoute component={AddDonate} />}
        />
        <Route
          path="/donateinfo"
          element={<ProtectedRoute component={DonateInfo} />}
        />
      </Routes>
    </AuthProvider>
  );
}
