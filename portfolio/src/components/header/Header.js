import React from 'react'
import "../header/Header.css"

export default function Header() {
  return (
    <header className='header'>
        <div className='header-left'>
            <span>Icon</span>
            <span>Aleks Hovakimyan</span>
        </div>
        <div className='header-right'>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">PROJECTS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
    </header>
  )
}
