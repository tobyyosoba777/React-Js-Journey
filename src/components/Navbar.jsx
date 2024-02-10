import React from 'react'


const Navbar = () => {

    const state = {
        navTags: ['Home', 'About', 'Footer'],
        imageUrl: 'https://picsum.photos/200'
    }

    const displayTags = () => {
        if(state.navTags.length === 0) return 'No Tags, add navbar Tags'
        return state.navTags.map(tag => <li key={tag}>{tag}</li>)
    }
  return (
    <div>
      <div className="header">
        <p style={{
            display: 'flex',
            listStyleType: 'none',
            marginLeft: '20px'
        }} className='btn badge-primary'>{displayTags()}</p>
        <img style={{
            height: 90,
            borderRadius: '50%'
        }} src={state.imageUrl} alt=""  />
        <a href={state.imageUrl}>Towbbie</a>
      </div>
    </div>
  )
}

export default Navbar
