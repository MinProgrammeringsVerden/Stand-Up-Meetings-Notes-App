import React from 'react';
import { Route , Switch } from  'react-router-dom';
import { HomeComponent }from './Home';
import Note from './Note';



 
const Router: React.FC = () => {
    return ( 
        <Switch>
           <Route path ='/' component={ HomeComponent } exact/>
           <Route path ='/note' component={ Note }  />
         
        </Switch>
     );

    }
export default Router;