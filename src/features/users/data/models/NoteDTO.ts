export class NoteDTO{
    id: number
    title: string
    body: string
    userId: number

    constructor(id:number, title: string, body :string, userId:number) {
        this.id = id
        this.title = title
        this.body = body
        this.userId = userId
    }
}