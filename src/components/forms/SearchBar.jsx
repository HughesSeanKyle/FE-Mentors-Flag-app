import React from 'react';
import { FaBeer, FaMoon, FaSun } from 'react-icons/fa';
import {
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Form,
	FormGroup,
	InputGroupText,
	Input,
	InputGroup,
	Navbar,
	Nav,
	Container,
	Media,
} from 'reactstrap';

import '../../App.css';

const SearchBar = () => {
	return (
		<Form className="navbar-search navbar-search-dark form-inline mr-3 mt-4 d-none d-md-flex ml-lg-auto">
			<FormGroup className="mb-0">
				<InputGroup className="input-group-alternative">
					<InputGroupText className="search-bar__icon-dark">
						<i className="fa fa-search" />
					</InputGroupText>
					<Input className="search-bar-dark" placeholder="Search" type="text" />
				</InputGroup>
			</FormGroup>
		</Form>
	);
};

export default SearchBar;
