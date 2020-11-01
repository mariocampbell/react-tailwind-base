import React, { Component } from 'react';

class NewClass extends Component {

    state={
        newText: 'Webpack and React!'
    }

    render() {
        return (
            <div className='text-white'>
                { this.state.newText }
                <p>
                    Hello React!
                </p>
            </div>
        );
    }
}

export default NewClass;