import { Component } from 'react'

class Saved extends Component {
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
        imageUrl: 'https://picsum.photos/200'
     }

    handleTag = () => {
        if(this.state.tags.length === 0) return <p>There are no tags</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
    }

    render() { 
        return (
            <div>
                {this.state.tags.length === 0 && 'Create new tags'}
                {this.handleTag()}
                <img src={this.state.imageUrl}></img>
                <span style={{
                    fontWeight: 'bold',
                    fontSize: 15
                }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-small'>Increment</button>
            </div>
        );
    }

    getBadgeClasses = () => {
        let classes = 'badge m-2 badge-'
        classes += this.state.count === 0? 'warning' : 'primary'
        return classes
    }

    formatCount = () => {
        const { count } = this.state
        return count === 0? 'Zero' : count
    }
}
 
export default Saved;