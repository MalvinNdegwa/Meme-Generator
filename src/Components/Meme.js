import './Meme.css'
import memesData from './memesData'

export default function Meme() {
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber= Math.floor(Math.random()*memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)

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
        </main>
    )
}