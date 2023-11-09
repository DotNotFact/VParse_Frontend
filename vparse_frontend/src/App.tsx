import { DonateInfo } from "./Components/ProtectedPages/User/DonateInfo/DonateInfo";
import { AddDonate } from "./Components/ProtectedPages/Admin/AddDonate/AddDonate";
import { Bookmark } from "./Components/ProtectedPages/User/Bookmark/Bookmark";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { Header } from "./Components/ProtectedPages/User/Header/Header";
import { Missing } from "./Components/PublicPages/Missing/Missing";
import { Main } from "./Components/ProtectedPages/User/Main/Main";
import { Login } from "./Components/PublicPages/Login/Login";
import { useEffect, useState } from "react";

export default function App() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // if(!token) return;
  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get("token");
    const storageToken = localStorage.getItem("token");
    const newToken = urlToken || storageToken;

    if (newToken) {
      localStorage.setItem("token", newToken);
      setToken(newToken);
    } else {
      navigate("/");
    }
  }, []);

  if (!token) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Navigate to="main" replace />} />
        <Route path="main" element={<Main />} />
        <Route path="bookmark" element={<Bookmark />} />
        <Route path="adddonate" element={<AddDonate />} />
        <Route path="donateinfo" element={<DonateInfo />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </>
  );
}
