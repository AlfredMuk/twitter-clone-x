import Timeline from './components/timeline'
//import './App.css'
import Sidebar from './components/sidebar';
import Trends from './components/Trend';
  import {Outlet} from  "react-router-dom";
  import "./index.css"


function Twitter() {
  return (
    <div className=' bg-black flex'>
      <Sidebar />
      <Outlet />
      <Trends />
    </div>
  );
};

export default Twitter;
