import React from "react";
import "./Informacion.css";

const InformationLocal = () => (
  <div className="info-container">
    <h1>¿Qué es <code>Private Route</code> en React?</h1>
    <p>
      <strong>Private Route</strong> es un tipo de ruta en la web que requiere que el usuario esté autenticado, iniciado sesión , para poder acceder a ella.
    </p>
    <h2>¿Para qué se utiliza?</h2>
    <ul>
      <li>Proteger información sensible o funcionalidad específica de una aplicación web</li>
      <li>Pueden utilizarse para controlar el <em>acceso basado en roles</em> , donde usuarios con diferentes permisos tienen acceso a diferentes secciones.</li>
    </ul> 
    <h2>Ejemplo básico</h2>
    <pre>
      <code>{`
              const PrivateRoute = () => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Outlet /> : <Navigate to = "/" />;
    }
      `}</code>
    </pre>
  </div>
);

export default InformationLocal;