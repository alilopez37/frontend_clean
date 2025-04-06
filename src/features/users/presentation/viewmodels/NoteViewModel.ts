import { makeAutoObservable, runInAction } from "mobx";
import { Note } from "../../data/models/Note";
import { CreateNoteUseCase } from "../../domain/CreateNoteUseCase";


export class NoteViewModel {
  title: string = '';
  body: string = '';
  userId : number = 0;
  error: string | null = null;
  isValid = false; //Se utiliza para verificar si la comunicación con la data (API) ha sido exitosa
  createNoteUseCase: CreateNoteUseCase;


  constructor() {
    makeAutoObservable(this); //Convierte automáticamente todas las propiedades y métodos públicos de una clase en observables, acciones, computeds, etc., según el contexto.
    this.createNoteUseCase = new CreateNoteUseCase();
  }

  onChangeTitle(title: string) {
    this.title = title;
    console.log(title);
    
  }
  onChangeBody(body: string) {
    this.body = body;
  }

  onChangeUserId(userId: string) {
    this.userId = Number.parseInt(userId);
  }

  async doCreateNote() {
    
    this.error = null;
    
    if (this.title !== "" && this.body !== "") {
      let note = new Note(this.title, this.body, this.userId);
      try {
        let data = await this.createNoteUseCase.execute(note);
        console.log(JSON.stringify(data));
        
        runInAction(() => { //se usa para modificar el estado observable de manera segura dentro de una acción asíncrona
          if (data != null)
            this.isValid = true
         });
      } catch (err: any) {
        runInAction(() => {
          this.error = err.message || "Error al cargar los usuarios";
        });
      }
    } else {
      this.error = "Campos vacios";
    }
  }

}
