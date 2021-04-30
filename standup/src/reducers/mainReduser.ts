import { combineReducers } from'redux';
import {notesReducer} from './notesReduser';
import { INotes } from '../action/notesAction';


export interface IStoreState{
  notes:INotes[];
}

export const reducers = combineReducers<IStoreState>({
    notes:notesReducer
})