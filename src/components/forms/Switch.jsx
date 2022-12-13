import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Switch = ({ readGlobalState, writeGlobalState }) => {
	const [switchState, setSwitchState] = useState(false);
	console.log('switchState', switchState);

	const { selectedColorMode } = readGlobalState;
	const { setSelectedColorMode } = writeGlobalState;

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
		<Form>
			<FormGroup switch>
				<Input
					role="button"
					type="switch"
					checked={selectedColorMode === 'light' ? false : true}
					onChange={() => {
						onColorModeChange();
					}}
				/>
				<Label check>Checked switch checkbox input</Label>
			</FormGroup>
		</Form>
	);
};

export default Switch;
