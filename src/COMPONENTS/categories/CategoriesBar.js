import React, { useState } from 'react'
import './_categories.scss'

const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
 ]
 
export default function CategoriesBar() {
    const [activeElement, setActiveElement] = useState('All')
    

    return (
        <div className='CategoriesBar' >
            {
                keywords.map((keyword,idx)=> <span key={idx} 
                onClick={()=> setActiveElement(keyword)}
                className={activeElement === keyword ? 'active' : ''}>
                  {keyword} </span> )
            }
        </div>
    )
}
