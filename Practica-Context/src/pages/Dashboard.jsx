import React, { useEffect } from "react";
import "./Dashboard.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const { user , logOut } = useAuth();

    const handleLogout = () => {
        if(logOut()){
            navigate("/");
        }
    }

    const handleInformation = () => {
            navigate("/Information");/**  Nota: Aquí no era necesario colocar el if por que no estaba cumpliendo con un condición, ya que solo se necesita que se navegue*/
    }
    
   


    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
             <h1 className="dashboard-title">¡Bienvenido al Dashboard!</h1> 
             <p className="dashboard-user">
                Hola, <span>{user || "Usuario logueado"}</span>
             </p>
             <button className="dashboard-button" onClick={handleLogout}> Cerrar sesión </button>
             <button className="dashboard-button" onClick={handleInformation}> información </button>
            </div>
        </div>
    );
};


export default Dashboard;

