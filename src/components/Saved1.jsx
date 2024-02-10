import  { Component } from 'react'

class Saved1 extends Component {
    state = { 
        count: 3,
        tags: ['tag1', 'tag2', 'tag3'],
        imageUrl: 'https://picsum.photos/200'
     } 

    handleTags = () => {
    if(this.state.tags.length === 0) return <p>There are no tags</p>

    return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
    }

    render() { 
        return (
            <div>
                <img src={this.state.imageUrl} alt="" /> <br />
                <span style={{
                    fontSize: 15,
                    fontWeight: 'bold'
                }} className={this.handleClass()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>

            </div>
        );
    }
    
    handleClass = () => {
        let classes = 'badge m-2 badge-'
        let { count } = this.state
        classes += count === 0? 'dark': count === 1? 'warning' : 'primary'
        return classes
    }

    formatCount = () => {
        const { count } = this.state
        return count === 0? 'Zero' : count
    }
}
 
export default Saved1;