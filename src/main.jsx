import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Counter from './components/counter.jsx';
import Counternew from './components/counterNew.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import CounterNew1 from './components/counterNew1.jsx';
import Counter1 from './components/Counter1.jsx';
import Saved from './components/Saved.jsx';
import Saved1 from './components/Saved1.jsx';

const element = <h1>Hello World</h1>;

console.log(element);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Counter/>
    {/* <Counter1/> */}
    {/* <Counternew/> */}
    {/* <CounterNew1/> */}
    {/* <Saved1/> */}
  </React.StrictMode>,
)
