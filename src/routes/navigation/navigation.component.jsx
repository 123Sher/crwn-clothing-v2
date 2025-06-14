import { Outlet, Link } from "react-router-dom" //Used for internal navigation in Single Page Applications (SPA).
//LINK=>Doesn’t reload the page — fast navigation.
import { Fragment} from "react"; //a Fragment is used to group multiple elements without adding an extra node to the DOM.
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'; //import the SVG file as a React component
import './navigation.styles.scss'

const Navigation = () =>
{
  return (
   <Fragment>
      <div className="navigation">
        <Link className='logo-container' to='/'>
          <CrwnLogo className="logo"></CrwnLogo>
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to='/shop'>SHOP</Link>
        </div>
        <div className="nav-links-container">
          <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
        </div>
      </div>
       <Outlet />
    </Fragment>
  )
}

export default Navigation;