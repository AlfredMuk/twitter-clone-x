import Timeline from './components/timeline'
import './App.css'
import Sidebar from './components/sidebar';
import Trends from './components/Trend';
  import {Outlet} from  "react-router-dom";


function Twitter() {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Trends />
    </>
  );
};

export default Twitter;
