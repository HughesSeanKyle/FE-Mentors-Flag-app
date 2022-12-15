import { useState } from 'react';

import { Form, FormGroup, InputGroupText, Input, InputGroup } from 'reactstrap';

import '../../App.css';

const FilterSelectBar = ({ readGlobalState, writeGlobalState }) => {
	const { selectedColorMode, allCountries } = readGlobalState;

	const [selectedField, setSelectedField] = useState('Filter by Region');

	console.log('selectedField', selectedField);

	return (
		<Form className="ml-lg-auto mr-3 mt-4">
			<FormGroup className="mb-0 filter-bar-dimensions">
				<InputGroup className="input-group-alternative">
					<Input
						className={
							selectedColorMode === 'light'
								? 'search-bar-light search-filter__text-light'
								: 'search-bar-dark search-filter__text-dark'
						}
						placeholder="Filter"
						type="select"
						onChange={(e) => setSelectedField(e.target.value)}
					>
						<option
							className={
								selectedColorMode === 'light'
									? 'search-filter__text-light'
									: 'search-filter__text-dark'
							}
							value={'Filter by Region'}
						>
							{selectedField !== 'Filter by Region'
								? 'All'
								: 'Filter by Region'}
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
							value={'America'}
						>
							America
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
							value={'Oceana'}
						>
							Oceana
						</option>
					</Input>
				</InputGroup>
			</FormGroup>
		</Form>
	);
};

export default FilterSelectBar;
