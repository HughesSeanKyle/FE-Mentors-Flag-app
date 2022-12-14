import React from 'react';

import { Form, FormGroup, InputGroupText, Input, InputGroup } from 'reactstrap';

import '../../App.css';

const FilterSelectBar = () => {
	return (
		<Form className="navbar-search navbar-search-dark form-inline mr-3 mt-4 d-none d-md-flex ml-lg-auto">
			<FormGroup className="mb-0 filter-bar-dimensions">
				<InputGroup className="input-group-alternative">
					<Input className="search-bar-dark" placeholder="Filter" type="select">
						<option value={'option1'}>Option 1</option>
						<option value={'option2'}>Option 2</option>
						<option value={'option1'}>Option 1</option>
						<option value={'option2'}>Option 2</option>
						<option value={'option1'}>Option 1</option>
					</Input>
				</InputGroup>
			</FormGroup>
		</Form>
	);
};

export default FilterSelectBar;
