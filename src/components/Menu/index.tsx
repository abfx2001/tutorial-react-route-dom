import './style.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about" state={'this is state from About'}>About</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/posts/10?page=101">Post 10</Link>
                </li>
                <li>
                    <Link to="/redirect">Redirecionamento</Link>
                </li>
            </ul>
        </nav>
    )
}