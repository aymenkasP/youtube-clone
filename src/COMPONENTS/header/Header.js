import React from 'react'
import './_header.scss'
import { FaBars } from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdNotifications , MdApps} from 'react-icons/md'

export default function Header({sideBarFunc}) {
    return (
        <div className='border border-dark header'>
            <FaBars className='header__menu' size={26} 
            onClick={()=> sideBarFunc() }
             />
            
            <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'  
            alt ='youTube Logo' className='header__logo' />

            <form>
                <input type='text' placeholder='search' />
                <button type='submit' >
                   <AiOutlineSearch size={22} />
                </button>
            </form>
        <div className='header__icons' >
            <MdNotifications size={28} />
            <MdApps size={28} />
            <img src="https://www.nespthreatenedspecies.edu.au/media/lbxliyag/no-photo-for-bio.jpg"
             alt='user avatar' />
        </div>

        </div>
    )
}
