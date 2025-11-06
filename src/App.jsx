import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Outlet } from "react-router";

const App = () => {
    return (
        <div className="main">
            <Navbar />
            <div className="page-container">
                <Outlet />
            </div>
        </div>
    );
};

export default App;
