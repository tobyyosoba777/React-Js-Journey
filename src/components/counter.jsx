import React, { Component } from 'react'

class Counter extends Component {
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
     }; 

    handleIncrement = () => {
        console.log("Incremented", this)
        this.setState({count: this.state.count + 1})
    }

    renderTags = () => {
        if(this.state.tags.length === 0) return <p>There are no Tags</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
    }

    render() { 
        return (
            <div>
                {this.state.tags.length === 0 && 'Please create a new tag!'}
                {this.renderTags()}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button style={{
                    fontSize: 15,
                    fontWeight: 'bold'
                }} onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
            </div>
        );
    }

    getBadgeClasses = () => {
        let classes = 'badge m-2 badge-'
        let { count } = this.state
        classes += count === 0? 'dark': count === 1? 'warning': count === 2? 'success': 'primary'
        return classes
    }

    formatCount = () => {
        const { count } = this.state
        return count === 0? 'Zero' : count
        
    }
}

export default Counter;
