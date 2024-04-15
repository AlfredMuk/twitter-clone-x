import twitter from '../assets/Twitter.svg';
import Homme from "../assets/Home.svg";
import Vector from "../assets/Vector.svg";
import Group from "../assets/Group.svg";
import Vector1 from "../assets/Vector1.svg";
import Notifications from "../assets/Notifications.svg";
import Vector2 from "../assets/Vector2.svg";
import Lists from "../assets/Lists.svg";
import Group1 from "../assets/Group1.svg";
import More from "../assets/More.svg";
import Name from "../assets/Name.svg";
import "../App.css";
 
import {Link} from "react-router-dom"

function Sidebar() {
    return(

        <div className="sidebar">
            <i className="icon-class"><img src={twitter} alt=" " /></i>

            <div className="sidebarIcons">
                <Link to="/">
                    <i className="icon-class">
                        <img src={Homme} alt=" " /></i>
                    <p>Home</p>
                </Link>
            </div>

            <div className="sidebarIcons">
                <Link to ={"/Explore"}>
                <i class="icon-class">
                    <img src={Vector} alt=" " /> </i>
                <p>Explore</p>
                </Link>
            </div>

            <div className="sidebarIcons">
                <Link to={"/notifications"}>
                    <i class="icon-class">
                        <img src={Notifications} alt=" " /></i>
                    <p>Notifications</p>
                </Link>
            </div>

            <div className="sidebarIcons">
                <Link to={"/lists"}>
                    <i class="icon-class">
                        <img src={Lists} alt=" " /></i>
                    <p>Lists</p>
                </Link>
            </div>

            <div className="sidebarIcons">
                <Link to={"/Messages"}>
                    <i class="icon-class">
                        <img src={Vector1} alt=" " /></i>
                    <p>Messages</p>
                </Link>
            </div>

            <div className="sidearIcons">
                <Link to={"/bookmarks"}>
                    <i class="icon-class">
                        <img src={Vector2} alt=" " /></i>
                    <p>Bookmarks</p>
                </Link>
            </div>

            <div className='sidebarIcons'>
                <Link to ={"/Lists"}>
                    <i class="icon-class">
                        <img src={Lists} alt=" " /></i>
                    <p>Lists</p>
                </Link>
            </div>

            <div className="sidebarIcons">
                <Link to =  {"/profile/" }>
                    <i class="icon-class">
                        <img src={Group1} alt=" " /></i>
                    <p>Profile</p>
                </Link>
            </div>

            <div className="sidebarIcons">
                <Link to = {"/More"}>
                    <i class="icon-class">
                        <img src={More} alt=" " /></i>
                    <p>More</p>
                </Link>
            </div>

           

            <button className='button1'>button</button>

         <div className="sidebar">
            <i className="icon-class">
                <img src={Name} alt=" " />
            </i>
                <p>Name</p>
         </div>       
        </div>

    );
};
export default Sidebar