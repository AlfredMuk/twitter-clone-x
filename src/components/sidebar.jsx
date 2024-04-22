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

import { Link } from "react-router-dom"

function Sidebar() {
    return (

        <div className="min-w-[20rem] gap-3 h-64 bg-black flex flex-col text-white p-5">

            <div className="h-[2.5rem] border-white "><img src={twitter} alt=" " /></div>

            <div className="flex-grow border-white items-center">
                <div className="sidebarIcons p-5">
                    <Link to="/">
                        <div className="icon-class">
                            <div class= "flex"> <img src={Homme } alt=" "/>
                                <p class="ml-2">Home</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="sidebarIcons">
                    <Link to={"/Explore"}>
                        <div class="icon-class">
                           <div class="flex"> <img src={Vector} alt=" " />
                                <p class="ml-2 py-5">Explore</p>
                           </div>
                         </div>
                    </Link>
                </div>

                <div className="sidebarIcons">
                    <Link to={"/notifications"}>
                        <div class="icon-class">
                            <div class="flex"><img src={Notifications} alt=" " />
                                <p class="ml-2">Notifications</p>
                            </div>   
                        </div>
                    </Link>
                </div>

                <div className="sidebarIcons">
                    <Link to={"/lists"}>
                        <div class="icon-class">
                            <div class="flex"><img src={Lists} alt=" " />
                                <p class="ml-2 py-5">Lists</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="sidebarIcons">
                    <Link to={"/Messages"}>
                        <div class="icon-class">
                          <div class="flex">  <img src={Vector1} alt=" " />
                            <p class="ml-2">Messages</p>
                          </div>
                        </div>
                    </Link>
                </div>

                <div className="sidearIcons">
                    <Link to={"/bookmarks"}>
                        <div class="icon-class">
                            <div class="flex"><img src={Vector2} alt=" " />
                                <p class="ml-2 py-5">Bookmarks</p>
                            </div>
                        </div>
                        
                    </Link>
                </div>

                <div className='sidebarIcons'>
                    <Link to={"/Lists"}>
                        <div class="icon-class">
                            <div class="flex"><img src={Lists} alt=" " />
                                <p class="ml-2">Lists</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="sidebarIcons">
                    <Link to={"/profile/"}>
                        <div class="icon-class">
                            <div class="flex"> <img src={Group1} alt=" " />
                                <p class="ml-2 py-6">Profile</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="sidebarIcons">
                    <Link to={"/More"}>
                        <div class="icon-class">
                            <div class="flex"><img src={More} alt=" " />
                            <p class="ml-2 py-4">More</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='h-[2.5rem] flex justify-center items-center bg-cyan-500 rounded-3xl'>
                <button className='bg-blue h-28'>button</button>
            </div>

            {/* <div className="sidebar">
            <i className="icon-class">
                <img src={Name} alt=" " />
            </i>
                <p>Name</p>
         </div>        */}
        </div>

    );
};
export default Sidebar