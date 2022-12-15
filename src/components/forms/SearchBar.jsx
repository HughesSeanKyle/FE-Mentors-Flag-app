import React from 'react';

import { Form, FormGroup, InputGroupText, Input, InputGroup } from 'reactstrap';

import '../../App.css';

const SearchBar = ({ readGlobalState, writeGlobalState }) => {
	const { selectedColorMode, allCountries } = readGlobalState;

	return (
		<Form className="ml-lg-auto mr-3 mt-4">
			<FormGroup className="mb-0 search-bar-dimensions">
				<InputGroup className="input-group-alternative">
					<InputGroupText
						className={
							selectedColorMode === 'light'
								? 'search-bar__icon-light'
								: 'search-bar__icon-dark'
						}
					>
						<i
							style={
								selectedColorMode === 'light'
									? { color: 'hsl(200, 15%, 8%)' }
									: { color: 'hsl(0, 0%, 100%)' }
							}
							className="fa fa-search"
						/>
					</InputGroupText>
					<Input
						className={
							selectedColorMode === 'light'
								? 'search-bar-light'
								: 'search-bar-dark search-filter__text-light'
						}
						placeholder="Search"
						type="text"
					/>
				</InputGroup>
			</FormGroup>
		</Form>
	);
};

export default SearchBar;
