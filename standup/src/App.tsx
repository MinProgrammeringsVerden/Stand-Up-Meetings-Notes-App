import React from 'react';
import './App.css';
import Note from './components/Note';
import {HomeComponent} from './components/Home';



 
const App:React.FC = ()=> {
  
   return ( 
      <>
        <h2>Visual Stand up Meetings Notes</h2>
        <Note />
        <hr/>
        <HomeComponent/>
          
      </>
      
     );
  }
 
export default App;
