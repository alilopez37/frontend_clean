import { NoteDTO } from "../data/models/NoteDTO";
import { Note } from "../data/models/Note";
import { NoteRepository } from "../data/repository/NoteRepository";

export class CreateNoteUseCase {
    noteRepository : NoteRepository

    constructor() {
        this.noteRepository = new NoteRepository()
    }

    async execute(note : Note ) : Promise<NoteDTO | null> {

        const response : NoteDTO | null = await this.noteRepository.create(note)

        var data = null
        if (response != null)
            data = new NoteDTO(response.id, response.title, response.body, response.userId)
        console.log("Use Case" + JSON.stringify(data));
        
        return data;
    }
}