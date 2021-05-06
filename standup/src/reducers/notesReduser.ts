import { INotes } from '../action/notesAction';
import { Action, ActionTypes } from '../action/types'

 



export const notesReducer =(state: INotes[] = [], action :Action ) => {
    switch(action.type){
        case ActionTypes.fetchNotes:return action.payload;
        case ActionTypes.deleteNote:return state.filter((n:INotes) =>n.id !== action.payload)
        default : return state;

        
    }

}