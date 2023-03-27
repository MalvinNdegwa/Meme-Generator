import pic from './Troll Face.png'
import './Header.css'
export default function Header(){
    return (
        <nav className='Header'>
            <img className='Header--image' src={pic} alt="Troll Face"/>
            <h1 className='Header--title'>Meme Generator</h1>
            <h4 className='Header--project'>React-course project 3</h4>
        </nav>
    )
}