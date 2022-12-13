import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import Switch from './forms/Switch';

const NavBar = ({ readGlobalState, writeGlobalState }) => {
	const { selectedColorMode } = readGlobalState;
	const { setSelectedColorMode } = writeGlobalState;

	return (
		<Nav
			className={selectedColorMode === 'light' ? 'navbar-light' : 'navbar-dark'}
			pills
		>
			<NavItem>
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
			<NavItem>
				<Switch
					readGlobalState={readGlobalState}
					writeGlobalState={writeGlobalState}
				/>
			</NavItem>
		</Nav>
	);
};

export default NavBar;
