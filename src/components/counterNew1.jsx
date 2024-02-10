import React, { Component } from 'react'

class CounterNew1 extends Component {
    state = { 
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        address: {
            street: ''
        }
     } 

     style = {
        fontSize: 15,
        fontWeight: 'bold'
     }

    render() { 

        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0)? "warning": "primary"

        return (
            <div>
                {/* <img src={this.state.imageUrl}></img> */}
                <span style={this.style} className='badge badge-primary m-2'>{this.formatCount()}</span>
                <span style={{
                    fontSize: 15,
                    fontWeight: 'bolder'
                }} className={classes}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
            </div>
        );
    }
    
    formatCount() {
        const { count } = this.state
        return count === 0? "Zero": count
    }
}
 
export default CounterNew1;
