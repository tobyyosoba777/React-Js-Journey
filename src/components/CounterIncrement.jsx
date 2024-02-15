import React, { Component } from 'react'

class CounterIncrement extends Component {
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
     }; 

    handleIncrement = product => {
        console.log(product)
        this.setState({count: this.state.count + 1})
    }

    style={
        fontSize: 15,
        fontWeight: 'bold'
    }

    render() { 
        return (
            <div>

                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button style={{
                    fontSize: 15,
                    fontWeight: 'bold'
                }} onClick={ () => this.handleIncrement('Added, Current Value: '+this.state.count) } 
                className='btn btn-secondary btn-sm'>Increment</button>
                
                <button style={this.style} onClick={() => {this.handleIncrement('Clicked ' + this.state.count)}}
                className='btn btn-secondary btn-sm'>
                    Increment
                </button>

            </div>
            
        );
    }

    getBadgeClasses = () => {
        let classes = 'badge m-2 badge-'
        let { count } = this.state
        classes += count === 0? 'danger': count === 1? 'warning': count === 2? 'success': 'primary'
        return classes
    }

    formatCount = () => {
        const { count } = this.state
        return count === 0? 'Zero' : count
        
    }
}

export default CounterIncrement;
