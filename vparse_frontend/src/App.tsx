import { DonateInfo } from "./Components/ProtectedPages/User/DonateInfo/DonateInfo";
import { AddDonate } from "./Components/ProtectedPages/Admin/AddDonate/AddDonate";
import { Bookmark } from "./Components/ProtectedPages/User/Bookmark/Bookmark";
import { Missing } from "./Components/PublicPages/Missing/Missing";
import { Main } from "./Components/ProtectedPages/User/Main/Main";
import { Login } from "./Components/PublicPages/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./Auth/ProtectedRoute";
import { AuthProvider } from "./Auth/AuthProvider";
import FilterContext from "./Components/TestComponent/FilterContext";
import { IFilterProps } from "./models/IHeader";
import { useState } from "react";

export default function App() {
  const [filter, setFilter] = useState<IFilterProps>({
    age_from: "",
    age_to: "",
    sex: "0",
    sort: "0",
    status: "",
    has_photo: "0",
    online: "0",
    can_write_private_message: "0",
    can_send_friend_request: "0",
    can_see_all_posts: "0",
    is_friend: "0",
    common_count: "0",
  });

  return (
    <AuthProvider>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Missing />} />
          <Route path="/main" element={<ProtectedRoute component={Main} />} />
          <Route
            path="/"
            element={
              <ProtectedRoute
                component={() => <Navigate to="/main" replace />}
              />
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
      </FilterContext.Provider>
    </AuthProvider>
  );
}
