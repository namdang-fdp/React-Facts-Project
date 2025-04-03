import ReactBlackLogo from "../assets/react-icon-256x228-wzabudcw.png";

export default function Main() {
    return(
      <main>
        <h1>Fun facts about React</h1>
        <img src={ReactBlackLogo} alt="react-background-logo"/>
        <ul className="facts-list">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200k stars on Github</li>
          <li>Is maintained by Meta</li>
          <li>Powers thoundsands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    )
  }