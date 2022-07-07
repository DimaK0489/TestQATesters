import React from "react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../routes";

export const InfoAction: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Info Action</h1>
      <button onClick={() => navigate(ROUTES.homePage)}>Go to HomePage</button>
    </div>
  )
}
