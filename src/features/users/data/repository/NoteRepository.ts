import { NoteDTO } from "../models/NoteDTO";
import { Note } from "../models/Note";

export class NoteRepository {

    async create(note: Note): Promise<NoteDTO | null> {
        
        const response = await fetch(import.meta.env.VITE_URL, {
            method: 'POST',
            body: JSON.stringify({
                title: note.title,
                body: note.body,
                userId: note.userId
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })

        if (!response.ok) return null;

        const data: NoteDTO = await response.json();
        return data;
    }

    register() { }
    updateUser() {}
    deleteUser() {}
}