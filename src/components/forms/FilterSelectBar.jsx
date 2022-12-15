import { useState } from 'react';

import { Form, FormGroup, InputGroupText, Input, InputGroup } from 'reactstrap';

import '../../App.css';

const FilterSelectBar = ({
	readGlobalState,
	readHomeState,
	onSearchOrFilterUpdate,
}) => {
	const { selectedColorMode, allCountries } = readGlobalState;

	const { filterSelection } = readHomeState;

	return (
		<div className="filter-bar-dimensions">
			<select
				aria-label="Default select example"
				className={
					selectedColorMode === 'light'
						? 'form-select search-bar-light search-filter__text-light'
						: 'form-select search-bar-dark search-filter__text-dark'
				}
				placeholder="Filter"
				type="select"
				onChange={(e) => onSearchOrFilterUpdate('FilterBar', e.target.value)}
			>
				<option
					className={
						selectedColorMode === 'light'
							? 'search-filter__text-light'
							: 'search-filter__text-dark'
					}
					value={'All Regions'}
				>
					All Regions
				</option>
				<option
					className={
						selectedColorMode === 'light'
							? 'search-filter__text-light'
							: 'search-filter__text-dark'
					}
					value={'Africa'}
				>
					Africa
				</option>
				<option
					className={
						selectedColorMode === 'light'
							? 'search-filter__text-light'
							: 'search-filter__text-dark'
					}
					value={'Americas'}
				>
					Americas
				</option>
				<option
					className={
						selectedColorMode === 'light'
							? 'search-filter__text-light'
							: 'search-filter__text-dark'
					}
					value={'Asia'}
				>
					Asia
				</option>
				<option
					className={
						selectedColorMode === 'light'
							? 'search-filter__text-light'
							: 'search-filter__text-dark'
					}
					value={'Europe'}
				>
					Europe
				</option>
				<option
					className={
						selectedColorMode === 'light'
							? 'search-filter__text-light'
							: 'search-filter__text-dark'
					}
					value={'Oceania'}
				>
					Oceania
				</option>
			</select>
		</div>
	);
};

export default FilterSelectBar;
