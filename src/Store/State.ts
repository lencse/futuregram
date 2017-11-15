export class Post {

    public hashtag: string
    public description: string
    public img: string
    public url: string

}

export class State {

    public username: string = 'hannah_hackastory'
    public data: Post[] = []
    public futurized: boolean = false
    public showNewPost: boolean = false

}
