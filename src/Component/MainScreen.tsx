import * as React from 'react'
import { State, Post } from '../Store/State'
import { ReactDOM } from 'react'
import { getStore } from '../Store/Store'

interface MainScreenProps {
    username: string,
    data: Post[],
    showNewPost: boolean
}

export default class MainScreen extends React.Component<MainScreenProps, {}> {

    public render() {
        return (
            <div id='mainscreen'>
                { this.list() }
                <button id='new' onClick={ this.showNewPost.bind(this) }></button>
            </div>
        )
    }

    private list(): JSX.Element {
        const elements = this.props.data.map((item, idx) => (
            this.props.showNewPost || idx > 0 ? (
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
            ) : (
                <div key={ idx } />
            )
        ))
        return (
            <div>
                { elements }
            </div>
        )
    }

    private showNewPost() {
        getStore().load({ showNewPost: true })
    }

}