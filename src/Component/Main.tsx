import * as React from 'react'
import { State, Post } from '../Store/State'
import { ReactDOM } from 'react'
import { assign } from 'lodash'
import { createStore, Subscriber } from '../Store/Store'
import InputScreen from './InputScreen'
import MainScreen from './MainScreen'

const db = require('../../database/db.json')

export default class Main extends React.Component<{}, State> implements Subscriber {

    constructor(a, b) {
        super(a, b);
        this.state = new State()
        createStore(this)
    }

    public render() {
        return this.state.futurized
            ? <MainScreen username={ this.state.username } data={ this.state.data } />
            : <InputScreen username={ this.state.username } />
    }

    public refresh(data: any) {
        this.setState(assign(this.state, data))
    }

}