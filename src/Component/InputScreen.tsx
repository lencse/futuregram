import * as React from 'react'
import { State, Post } from '../Store/State'
import { ReactDOM } from 'react'
import { getStore } from '../Store/Store'

interface InputScreenProps {
    username: string
}

export default class InputScreen extends React.Component<InputScreenProps, {}> {

    public render() {
        return (
            <div>
                <input
                    type="text"
                    name="username"
                    id="username-input"
                    value={ this.props.username }
                    onChange={ this.changeUsername.bind(this) }
                />
                <button onClick={ this.futurize.bind(this) }>Futurize me!</button>
            </div>
        )
    }

    public changeUsername(event: React.FormEvent<HTMLInputElement>) {
        getStore().load({ username: event.currentTarget.value})
    }

    public futurize() {
        getStore().load({ futurized: true})
        getStore().futurize(this.props.username)
    }

}