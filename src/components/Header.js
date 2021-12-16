import logo from '../logo.svg';
import icons8 from '../icons8-user-male.svg'

export default function Header() {
    const row = {
        display: 'flex',
        'flex-direction': 'row',
        'flex-wrap': 'wrap',
        'align-items': 'center',
        'justify-content': 'center',
        width: '100%'
      };
    
    const column = {
        display: 'flex',
        'flex-direction': 'column',
        'flex-basis': '100%',
        flex: 1
      }

    return (
        <nav>
            <div style={row}>
                <div style={column}>
                    <img src={logo} className='App-logo' alt='logo' />
                </div>
                <div style={column}>
                    <a href='login'>
                        <img src={icons8} className='App-logo' alt='User icon'/>
                    </a>
                </div>
            </div>
        </nav>
    );
}
