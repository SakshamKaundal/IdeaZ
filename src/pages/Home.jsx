import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"
import './homestyle.css'; // Import the CSS file

export const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar/>
            <div className="container"> 
                <h1 className="header">Keep your Ideas together</h1> 
                <button onClick={()=>{
                    navigate('/signup')
                }} className="big-button">Brainstorm</button> 
            </div>
        </div>
    )
}