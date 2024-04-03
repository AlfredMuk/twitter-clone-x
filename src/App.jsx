import Timeline from './components/timeline'
import './App.css'
import Sidebar from './components/sidebar';
import Trends from './components/Trend';


function Twitter() {
  return (
    <>
      <Sidebar />
      <Timeline />
      <Trends />
    </>
  );
};

export default Twitter;
