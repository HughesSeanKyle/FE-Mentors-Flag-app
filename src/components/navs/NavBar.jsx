import { Nav, NavItem, NavLink, Row } from 'reactstrap';
import Switch from '../forms/Switch';
import '../../App.css';

const NavBar = ({ readGlobalState, writeGlobalState }) => {
	const { selectedColorMode } = readGlobalState;
	const { setSelectedColorMode } = writeGlobalState;

	return (
		<Nav
			className={selectedColorMode === 'light' ? 'navbar-light' : 'navbar-dark'}
			pills
		>
			<NavItem className="navbar__logo">
				<NavLink
					className={
						selectedColorMode === 'light'
							? 'navbar-light-text'
							: 'navbar-dark-text'
					}
					href="#"
				>
					Where in the world?
				</NavLink>
			</NavItem>
			<NavItem className="align-self-center navbar__switch">
				<Switch
					readGlobalState={readGlobalState}
					writeGlobalState={writeGlobalState}
				/>
			</NavItem>
		</Nav>
	);
};

export default NavBar;
