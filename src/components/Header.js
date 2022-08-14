import logo from './Airbnb/Air.svg';
export function Header(){
    return(
      <header>
      <nav>
         <img src={logo}  alt="logo" className='App-logo' />
         
      </nav>
    </header>
    )
  }