import React, { Component } from 'react'
import { ResumeObject } from '../types/resume'

interface Props {
    jsonPath:string;
}
interface State {
}

export default class Resume extends Component<Props, State> {
    state = {
    }

    render() {
        return (
            <div>
                <p>Resume</p>
            </div>
        )
    }
}
