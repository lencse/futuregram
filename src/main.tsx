import * as React from 'react'
import * as ReactDom from 'react-dom'
import Main from './Component/Main'
import Instagram from './Loader/Instagram'

const ig = new Instagram()
// ig.getHashtags('lilla_racz').then(hashtags => { console.log(hashtags) })

ReactDom.render(
    <Main />,
    document.getElementById('react-main')
)
