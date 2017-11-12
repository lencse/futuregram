export class Post {

    public hashtag: string
    public description: string
    public img: string
    public url: string

}

export class State {

    public username: string = ''
    public data: Post[] = []
    public futurized: boolean = false

}
