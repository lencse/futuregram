import * as React from 'react'
import { State, Post } from '../Store/State'
import { ReactDOM } from 'react'
import { getStore } from '../Store/Store'

interface MainScreenProps {
    username: string,
    data: Post[]
}

export default class MainScreen extends React.Component<MainScreenProps, {}> {

    public render() {
        return (
            <div>
                <p>@{ this.props.username }</p>
                { this.list() }
            </div>
        )
    }

    private list(): JSX.Element {
        const elements = this.props.data.map((item, idx) => (
            <div key={ idx }>
                <p>{ item.hashtag }</p>
                <p>{ item.description }</p>
                <p>
                    <img src={item.img} alt='' />
                </p>
                <p>
                    <a href={ item.url }>{ item.url }</a>
                </p>
                <hr />
            </div>
        ))
        return (
            <div>
                { elements }
            </div>
        )
    }

}