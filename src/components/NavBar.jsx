import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import Switch from './forms/Switch';

const NavBar = ({ readGlobalState, writeGlobalState }) => {
	const { selectedColorMode } = readGlobalState;
	const { setSelectedColorMode } = writeGlobalState;

	// Function to be move the the nav comp when implemented
	const onColorModeChange = () => {
		if (selectedColorMode === 'light') {
			localStorage.setItem('colorMode', JSON.stringify('dark'));
			setSelectedColorMode('dark');
			return;
		} else {
			localStorage.setItem('colorMode', JSON.stringify('light'));
			setSelectedColorMode('light');
			return;
		}
	};

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
				<Button onClick={() => onColorModeChange()}>
					{selectedColorMode === 'light'
						? 'Switch to dark mode'
						: 'Switch to light mode'}
				</Button>
				<Switch
					readGlobalState={readGlobalState}
					writeGlobalState={writeGlobalState}
				/>
			</NavItem>
		</Nav>
	);
};

export default NavBar;
