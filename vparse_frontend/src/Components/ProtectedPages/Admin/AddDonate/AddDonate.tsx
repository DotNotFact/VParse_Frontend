import adminService from "../../../../Services/AdminService";
import { useState } from "react";
import "./AddDonate.css";

export const AddDonate = () => {
  const [vipId, setVipId] = useState("");
  const [role, setRole] = useState("");

  const token = localStorage.getItem("token");

  const handleAddDonate = () => {
    try {
      adminService.AddRole(token, vipId, role);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="maxWidth addDonate-wrapper">
      <div className="p-1 maxWidth addDonate-container">
        <p>Админ панель</p>

        <hr />

        <div style={{ padding: 10, border: "1px solid #000", borderRadius: 5 }}>
          <p>Id Пользователя</p>
          <input
            value={vipId}
            onChange={(e) => setVipId(e.target.value)}
            style={{ marginTop: 20, borderBottom: "1px solid #000" }}
          />
        </div>

        <div style={{ padding: 10, border: "1px solid #000", borderRadius: 5 }}>
          <p>Роль</p>

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="0">Базовая</option>
            <option value="1">Вип</option>
            <option value="2">Супер-Вип</option>
            <option value="3">Админ</option>
          </select>
        </div>

        <button onClick={handleAddDonate}>Добавить</button>
      </div>
    </div>
  );
};
