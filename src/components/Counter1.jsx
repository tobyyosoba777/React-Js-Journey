import {Component} from "react";

class Counter1 extends Component {
    state = { 
        count: 1,
        tags: ['tag1', 'tag2']

     } 

     renderTag = () => {
        if(this.state.tags.length === 0) return(<p></p>)
     }

    render() { 
        return (
            <div>
                {this.state.tags.length === 0 && 'There are no Tags'}
                {this.renderTag()}
            </div>
        );
    }
}
 
export default Counter1;