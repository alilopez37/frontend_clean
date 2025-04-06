
export class Note {
    title: string
    body: string
    userId: number

    constructor(title:string, body:string, userId: number) {
        this.title = title
        this.body = body
        this.userId = userId
    }
}