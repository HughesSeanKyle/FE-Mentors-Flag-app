import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Switch = ({ readGlobalState, writeGlobalState }) => {
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
				<Label check>
					{selectedColorMode === 'light'
						? 'Switch to dark mode'
						: 'Switch to light mode'}
				</Label>
			</FormGroup>
		</Form>
	);
};

export default Switch;
