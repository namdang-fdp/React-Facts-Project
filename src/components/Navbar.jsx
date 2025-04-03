import ReactLogo from "../assets/React-icon.svg.png";


export default function Navbar() {
    return(
      <header>
        <nav className="nav-bar">
            <img src={ReactLogo} alt="ReactLogo"/>
            <span>ReactFacts</span>
        </nav>
      </header>
    )
  }