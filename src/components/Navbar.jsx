import React, { useState } from 'react'

const Navbar = () => {

    const state = {
        navTags: ['Home', 'About', 'Footer'],
        imageUrl: 'https://picsum.photos/200'
    }

    const displayTags = () => {
        if(state.navTags.length === 0) return 'No Tags, add navTags'
        return state.navTags.map(tag => <li style={{
            display: 'flex',
            marginLeft: '20px',
            justifyContent: 'space-between'
        }} key={tag}>{tag}</li>)
    }

    const [mode, setMode] = useState('Dark')

    const toggleBackground = () => {
        var classes = 'navbar navbar-expand-lg navbar-light bg-'
        classes += mode === 'Dark'? 'light': 'dark'
        return classes
    }

    const toggleMode = () => {
        setMode(prevMode => (prevMode === 'Light' ? 'Dark' : 'Light'));
      };    

  return (
    <div className={toggleBackground()}>
      <div className="header">
      <img style={{
            height: 90,
            borderRadius: '50%'
        }} src={state.imageUrl} alt=""  />
        <a href={state.imageUrl}>Towbbie</a>
        <p style={{
            display: 'flex',
            listStyleType: 'none',
            marginLeft: '20px'
        }} className='btn badge-primary'>{displayTags()}</p>
        <button className='btn btn-sm' onClick={{toggleMode}}>{mode}</button>
        <button className='btn btn-sm btn-primary' onClick={toggleMode}>{mode}</button>
        
      </div>
    </div>
  )
}

export default Navbar
