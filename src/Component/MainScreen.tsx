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
            <div id='mainscreen'>
                { this.list() }
            </div>
        )
    }

    private list(): JSX.Element {
        const elements = this.props.data.map((item, idx) => (
            <div className='post' key={ idx }>
                <p>@{ this.props.username }_64</p>
                <p>
                    <img src={item.img} alt='' />
                </p>
                <p>{ item.hashtag }</p>
                <p>
                    { item.description } &nbsp;
                    <a href={ item.url }>{ item.url }</a>
                </p>
            </div>
        ))
        return (
            <div>
                { elements }
            </div>
        )
    }

}