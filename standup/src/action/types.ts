import {IFetchNotesAction , IDeleteNoteAction} from '../action/notesAction'


export enum ActionTypes{
    fetchNotes,
    deleteNote
}

export type Action = IFetchNotesAction | IDeleteNoteAction
