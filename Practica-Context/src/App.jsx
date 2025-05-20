import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import InformationLocal from "./pages/InformacionLocal";
import Information from "./pages/Informacion";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path= "/" element= { <Login /> } />
            <Route  element= { <PrivateRoute /> }>
               <Route path= "/Dashboard" element= { <Dashboard/> } />
               <Route path= "/Information" element= { <Information/> } />
            </Route>
             <Route path= "/InformationLocal" element= { <InformationLocal/> } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};


export default App;