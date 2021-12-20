import logo from '../../logo.svg';
import icons8 from '../../icons8-user-male.svg'
import './Header.css'

export default function Header() {

    return (
        <nav>
            <div className='div1'>
                <div>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <a href='login' className='padLeft'>
                        <img src={icons8} className='App-logo' alt='User icon'/>
                    </a>
                </div>
            </div>
        </nav>
    );
}