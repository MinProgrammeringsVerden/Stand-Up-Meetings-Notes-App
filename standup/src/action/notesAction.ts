import axios from 'axios';
import {Dispatch} from 'redux'
import { ActionTypes } from './types';

export interface INotes{
    name:string ,
    task :string ,
    yesteday :string ,
    today :string,
    impediment :string
}

export interface IFetchNotesAction{
    type :ActionTypes.fetchNotes , 
    payload :INotes[]
}

export const fetchNotes = () =>{
    return async (dispatch: Dispatch) => {
        const {data} = await axios.get<INotes[]>('https://jsonplaceholder.typicode.com/todos')
     
        dispatch<IFetchNotesAction>({type :ActionTypes.fetchNotes , payload :data })

    }
}

