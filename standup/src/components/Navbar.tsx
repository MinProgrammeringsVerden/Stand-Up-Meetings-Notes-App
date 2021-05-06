import React from 'react';
import { Link } from 'react-router-dom';
import {HomeComponent} from './Home';
import Note from './Note';

 
const Navbar: React.FC = () => {
    return (
        <div>
          <Link to ='/'>Notes</Link>
          <Link to ='/note'>New Note</Link>
        </div>
      );
}
 
export default Navbar;