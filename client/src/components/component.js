import { Component } from 'react';
import Weather from './weather';
import Checklist from './checklist';

class Components extends Component {
    render() {
        return(
            <div>
                <Weather />
                <Checklist />
            </div>
        )
    }
}

export default Components;