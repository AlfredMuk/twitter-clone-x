import twitter from '../assets/Twitter.svg';
import Homme from "../assets/Home.svg";
import Vector from "../assets/Vector.svg";
import Group from "../assets/Group.svg";
import Vector1 from "../assets/Vector1.svg";
import Vector2 from "../assets/Vector2.svg";
import Lists from "../assets/Lists.svg";
import Group1 from "../assets/Group1.svg";
import More from "../assets/More.svg";
import "../App.css";

function Sidebar() {
    return(

        <div className="sidebar">
            <i class="icon-class"><img src={twitter} alt=" " /></i>
            <div className="sidebarIcons">
                <i class="icon-class"><img src={Homme} alt=" " /></i>
                <p>Home</p>
            </div>
            <div className="sidebarIcons">
                <i class="icon-class"><img src={Vector} alt=" " /> </i>
                <p>Explore</p>
            </div>
            <div className="sidebarIcons">
                <i class="icon-class"><img src={Group} alt=" " /></i>
                <p>Notifications</p>
            </div>
            <div className="sidebarIcons">
                <i class="icon-class"><img src={Vector1} alt=" " /></i>
                <p>Messages</p>
            </div>
            <div className="sidebarIcons">
                <i class="icon-class"><img src={Vector2} alt=" " /></i>
                <p>Bookmarks</p>
            </div>
            <div className='sidebarIcons'>
                <i class="icon-class"><img src={Lists} alt=" " /></i>
                <p>Lists</p>
            </div>
            <div className="sidebarIcons">
                <i class="icon-class"><img src={Group1} alt=" " /></i>
                <p>Profile</p>
            </div>
            <div className="sidebarIcons">
                <i class="icon-class"><img src={More} alt="" /></i>
                <p>More</p>
            </div>

            <button className='button1'>button</button>
        </div>

    );
};
export default Sidebar