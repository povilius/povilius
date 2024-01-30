import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
      <div>
      <img src="../public/povilius-logo.png" alt="Profile picture" />
      </div>
      <div>
        <Link to='/home'>Home</Link>
        <Link to='/aboutme'>About me</Link>
        <Link to='/resume'>Resumé</Link>
        <Link to='/interiors'>Interiors</Link>
        <Link to='/photography'>Photography</Link>
        <Link to='/contacts'>Contacts</Link>
      </div>
    </div>
  )
}

export default Header