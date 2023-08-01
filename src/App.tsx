import React, {useState, ReactElement} from 'react'
import HomePage from './HomePage'
import Navbar from './Navbar'
import './App.css';

const App = () => {
  const pages: {[key: string]: ReactElement} = {
    'Home': <HomePage />,
    'Profolio': <></>,
  }

  const [page, setPage] = useState('Home');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setPage(newValue);
  };

  return (
    <>
      <Navbar tab={page} tabs={Object.keys(pages)} handleChange={handleChange} />
      {pages[page]}
    </>
  )
}

export default App;
