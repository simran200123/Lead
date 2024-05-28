import { useState } from 'react'
import './App.css'
import Slidebar from './components/Slidebar'
import Content from './components/Content'
import Profile from './components/Profile'

const App=() =>{
 

  return (
    <div className='dashboard'>
     <Slidebar/>
     <div className='dashboard--content'>
    <Content/>
     <Profile/>
     </div>
    </div>
  );
};

export default App;
