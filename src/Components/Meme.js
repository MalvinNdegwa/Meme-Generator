import React from 'react'
import './Meme.css'
import memesData from './memesData'

export default function Meme() {
    const[memeImage,setMemeImage]=React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber= Math.floor(Math.random()*memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(url)

    }
    return (
        <main>
            <div className='form'>
                <input className='form--input' type="text" placeholder="Top Text" />
                <input className='form--input' type="text" placeholder="Bottom text" />
                <br></br>
                <button className='form--button'
                    onClick={getMemeImage} >
                    Get a new meme image  🖼
                </button>

            </div>
            <img src={memeImage} alt="memepic" className='meme--image'/>
        </main>
    )
}