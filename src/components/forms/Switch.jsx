import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Row } from 'reactstrap';
import { FaBeer, FaMoon, FaSun } from 'react-icons/fa';
import '../../App.css';

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
				{selectedColorMode === 'light' ? (
					<FaSun className="nav__color-mode-icon" />
				) : (
					<FaMoon className="nav__color-mode-icon" />
				)}
				<Input
					className={
						selectedColorMode === 'light'
							? 'nav__switch-color-mode-light'
							: 'nav__switch-color-mode-dark'
					}
					role="button"
					type="switch"
					checked={selectedColorMode === 'light' ? false : true}
					onChange={() => {
						onColorModeChange();
					}}
				/>

				<Label className="nav__switch-color-mode-lable" check>
					{selectedColorMode === 'light' ? 'light mode' : 'dark mode'}
				</Label>
			</FormGroup>
		</Form>
	);
};

export default Switch;
