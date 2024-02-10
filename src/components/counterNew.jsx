import { Component } from 'react';

class Counternew extends Component {
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
        imageUrl: 'https://picsum.photos/200',
        addresss: {
            street: ''
        }
     } 

    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    }

    render() { 
        return (
            <div>
                <h1>{this.state.tags[0]}</h1>
                <img src={this.state.imageUrl} alt="" /> <br></br>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <span style={{
                    fontSize: 15,
                    fontWeight: 'bold'
                }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
                <ul>
                    {this.state.tags.map((tag) => {
                        return <li>{tag}</li>
                    })}
                </ul>
                <ul>
                    {this.state.tags.map(tag => <li>{tag}</li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0? "warning" : "primary"
        return classes
    }

    formatCount () {
        const { count } = this.state
        return count === 0? "Zero": count
    }
}

export default Counternew;


