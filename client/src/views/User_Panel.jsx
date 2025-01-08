import { Panel } from '../components/Side Panel/panel.jsx'
import { Nav } from '../components/Navbar/navbar.jsx';
import {Profile} from '../components/Profile/Profile.jsx'
export default function User_Panel() {
    return (
        <div>
            {/* <Nav /> */}
            <Profile />
            <Panel />
          
        </div>

    );
}