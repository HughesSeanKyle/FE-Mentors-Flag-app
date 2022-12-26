import React from 'react';

import { Form, FormGroup, InputGroupText, Input, InputGroup } from 'reactstrap';

import '../../App.css';

const SearchBar = ({
	readGlobalState,
	readHomeState,
	onSearchOrFilterUpdate,
}) => {
	const { selectedColorMode, allCountries } = readGlobalState;

	// Helper
	const firstCharToUpperCase = (term) => {
		if (!term) {
			return '';
		}
		return term[0].toUpperCase() + term.slice(1).toLowerCase();
	};

	return (
		<InputGroup className="input-group-alternative search-bar-dimensions">
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
				placeholder="Search for a country..."
				type="text"
				onChange={(e) =>
					onSearchOrFilterUpdate(
						'SearchBar',
						firstCharToUpperCase(e.target.value)
					)
				}
			/>
		</InputGroup>
	);
};

export default SearchBar;
