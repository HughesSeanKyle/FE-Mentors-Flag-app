import React from 'react';

import { Form, FormGroup, InputGroupText, Input, InputGroup } from 'reactstrap';

import '../../App.css';

const FilterSelectBar = ({ readGlobalState, writeGlobalState }) => {
	const { selectedColorMode, allCountries } = readGlobalState;

	return (
		<Form className="ml-lg-auto mr-3 mt-4">
			<FormGroup className="mb-0 filter-bar-dimensions">
				<InputGroup className="input-group-alternative">
					<Input
						className={
							selectedColorMode === 'light'
								? 'search-bar-light'
								: 'search-bar-dark'
						}
						placeholder="Filter"
						type="select"
					>
						<option value={'option1'}>Filter by Region</option>
						<option value={'option1'}>Africa</option>
						<option value={'option2'}>America</option>
						<option value={'option1'}>Asia</option>
						<option value={'option2'}>Europe</option>
						<option value={'option1'}>Oceana</option>
					</Input>
				</InputGroup>
			</FormGroup>
		</Form>
	);
};

export default FilterSelectBar;
