import { State } from './State'
import Instagram from '../Loader/Instagram'
import { Post } from '../Store/State'

const db = require('../../database/db.json')

export interface Subscriber {
    refresh(data: any)
}

export class Store {

    private subscriber: Subscriber

    constructor(subscriber: Subscriber) {
        this.subscriber = subscriber
    }

    public load(data: any) {
        this.subscriber.refresh(data)
    }

    public futurize(username: string) {
        const result: Post[] = []
        const ig = new Instagram()
        const hashtags = ig.getHashtags(username)
        hashtags.forEach(hashtag => {
            db.forEach(item => {
                console.log(hashtag, item.hashtag)
                if (item.hashtag === `#${hashtag}`) {
                    result.push({
                        hashtag: item.hashtag,
                        description: item.description,
                        url: item.url,
                        img: item.img,
                    })
                }
            })
        })
        console.log(result)
        this.load({data: result})
    }

}

var store: Store

export function createStore(subscriber) {
    store = new Store(subscriber)
}

export function getStore(): Store {
    return store
}
