import logo from '../assets/react-logo.svg'
const Navbar= ()=>{
    return (
        <header className={"header"}>
            <nav className={"nav"}>
                <img src={logo} className="logo" alt="react-logo" />
                <span className='facts'>ReactFacts</span>
            </nav>
        </header>
    )
}
export default Navbar;