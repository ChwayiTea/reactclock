import React, {Component} from 'react';

import Title from './Title';
import Clock from './Clock';
import '../style.css';


class Main extends Component{
    render(){
        return(
            <div className="img">
                <Title title="My First Clock"></Title>
                <Clock clock="ClockData"></Clock>
            </div>
        )

    }
}
export default Main