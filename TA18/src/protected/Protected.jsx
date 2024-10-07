import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

const Protected = () => {
    const log = useContext(UserContext);
    
    return log.logged ? <Outlet /> : <Navigate to="/home" />;
};

export default Protected;

