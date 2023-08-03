import React, {useState, ReactElement} from 'react'

import HomePage from 'home/Home'
import Navbar from 'Navbar'

import './App.css';

const App = () => {
  const tabs: {[key: string]: ReactElement} = {
    'Home': <HomePage />,
    'Profolio': <></>,
  }

  const [activeTab, setActiveTab] = useState('Home');
  const setNewActiveTab = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Navbar activeTab={activeTab} tabs={Object.keys(tabs)} handleChange={setNewActiveTab} />
      {tabs[activeTab]}
    </>
  )
}

export default App;
