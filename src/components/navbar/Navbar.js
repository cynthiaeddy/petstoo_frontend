import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import ToggleButton from '../mobileNavbar/ToggleButton';

class Navbar extends React.Component {
	render() {
		return (
			<nav id="navbar">
				<Link to="/home" className="navbar-logo">
					Adopt a Pet
				</Link>
				<div className="spacer" />
				<div className="navbar-words">
					{this.props.currentUser ? (
						<div>
							<ul>
								<li>
									<Link to="/home">Home</Link>
								</li>
								<li>
									<Link to={`/user`}>{this.props.currentUser.name}</Link>
								</li>
								<li>
									<Link to={'/logout'} onClick={this.props.logOut}>
										Log out
									</Link>
								</li>
							</ul>
						</div>
					) : (
						<div>
							<ul>
								<li>
									<Link to="/home">Home</Link>
								</li>
								<li>
									<Link to="/login">Log In</Link>
								</li>
								<li>
									<Link to="/signup">Sign Up</Link>
								</li>
							</ul>
						</div>
					)}
				</div>
				<div className="mobile-navbar-button">
					<ToggleButton click={this.props.buttonClickHandler} />
				</div>
			</nav>
		);
	}
}

export default Navbar;
