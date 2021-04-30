import React from 'react';
import { Route , Switch } from  'react-router-dom';
import Home from './Home';
import Note from './Note';



 
const Router: React.FC = () => {
    return ( 
        <Switch>
           <Route path ='/' component={ Home } exact/>
           <Route path ='/note' component={ Note }  />
         
        </Switch>
     );

    }
export default Router;