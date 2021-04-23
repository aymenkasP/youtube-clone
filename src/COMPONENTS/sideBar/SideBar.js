import React from 'react'
import "./_sideBar.scss"
import {MdSubscriptions ,
     MdExitToApp,MdThumbUp,
     MdHistory,
     MdLibraryBooks,
     MdHome, MdSentimentDissatisfied
} from 'react-icons/md'

export default function SideBar({sideBar , sideBarFunc}) {
    return (
        <nav className={sideBar ? "sideBar open" : "sideBar"}
        onClick={() => sideBarFunc(false)}>
             <li>
            <MdHome size={23} />
            <span>Home</span>
         </li>
         <li>
            <MdSubscriptions size={23} />
            <span>Subscriptions</span>
         </li>

         <li>
            <MdThumbUp size={23} />
            <span>Liked Video</span>
         </li>

         <li>
            <MdHistory size={23} />
            <span>History</span>
         </li>

         <li>
            <MdLibraryBooks size={23} />
            <span>Library</span>
         </li>
         <li>
            <MdSentimentDissatisfied size={23} />
            <span>I don't Know</span>
         </li>

         <hr />

         <li>
            <MdExitToApp size={23} />
            <span>Log Out</span>
         </li>

         <hr />
        </nav>
    )
}
