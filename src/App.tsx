import React from 'react';
import Navbar from './Navbar'
import './App.css';

const App = () => {
  const pages = {
    'Home': <></>,
    'Profolio': <></>,
  }

  const [page, setPage] = React.useState('Home');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setPage(newValue);
  };

  return (
    <Navbar tab={page} tabs={Object.keys(pages)} handleChange={handleChange} />
  )
}

export default App;
