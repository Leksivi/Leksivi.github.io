import React from 'react'
import "../main/Main.css"
import Nav from '../nav/Nav'

export default function Main() {
  return (
    <main className='main'>
        <div className='main-center'>
            <h1>HEY, I'M ALEKS HOVAKIMYAN</h1>
            <span>A Frontend focused Web Developer building the Frontend of Websites and Web
            <p>Applications that leads to the success of the overall product</p></span>
            <button>PROJECTS</button>
        </div>
        <Nav />
    </main>
  )
}
