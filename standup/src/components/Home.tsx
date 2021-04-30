import * as React from 'react';

export interface HomeProps {
    
}
 
export interface HomeState {
    
}
 
class Home extends React.Component<HomeProps, HomeState> {
  
    render() { 
        return ( 
        <div>
            <h2>Visual Stand up Meeting Notes</h2>
            <div>One note </div>
            <div>One note </div>
            <div>One note </div>
            <div>One note </div>

        </div>
         );
    }
}
 
export default Home;