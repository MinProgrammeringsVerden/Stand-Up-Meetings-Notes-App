import * as React from 'react';
import { fetchNotes , deleteNote } from '../action/notesAction';
import { IStoreState } from '../reducers/mainReduser';
import { INotes } from '../action/notesAction';
import {connect} from 'react-redux';


export interface IHomeProps {
    notes:INotes[]; 
    fetchNotes: Function;
    deleteNote: typeof deleteNote
} 
 

 
class Home extends React.Component<IHomeProps> {

   // componentDidMount(){
    //  this.props.fetchNotes();
   //  }

   onButtonClickFetching = (): void => {
     this.props.fetchNotes();
     };

  onButtonClickDeleting = (id:number): void => {
      this.props.deleteNote(id);
        console.log('deleting ', )
    };


    renderNotesList (): JSX.Element[]{
        return this.props.notes.map((note :INotes) => {
            return <div key={note.id}>
                <div>{note.title}</div>
                <button onClick ={() =>this.onButtonClickDeleting(note.id)}>Remove the Note</button>
            </div>
        })
       }
   
  
    render() { 
        //this.props.(This anotation shows the props of the App component)
        console.log(this.props.notes)
        return ( 
         
        <div>
            <h2>Visual Stand up Meeting Notes</h2>
            <button onClick ={this.onButtonClickFetching}>Fetch Notes</button>
            <div>{this.renderNotesList()}</div>
            

        </div>
         );
    }
}
const mapStateToProps = ( {notes}: IStoreState ): {notes: INotes[] } => {
    return {notes}
}
 
export const HomeComponent = connect(mapStateToProps , { fetchNotes , deleteNote })(Home);