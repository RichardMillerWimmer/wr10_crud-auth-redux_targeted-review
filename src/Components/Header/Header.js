import userEvent from '@testing-library/user-event';
import './Header.scss';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/reducers/userReducer';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

// we'll have to bring in something from react-router-dom so the logout button pushes users to login page

function Header(props) {
    const handleLogout = () => {
        axios.delete('/auth/logout')
            .then(() => {
                this.props.history.push('/')
            })
    }

    return (
        <header className='site-header'>
            <h2 className='site-title'>Silly Jokes by Sillier People</h2>
            <p>Welcome {props.user ? props.user.email : 'Guest'}</p>
            {/* we'll update so only logged in users see the logged in button */}
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </header>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}
export default withRouter(connect(mapStateToProps, { logoutUser })(Header));