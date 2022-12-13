import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { Button } from 'reactstrap';

function App() {
	const [selectedColorMode, setSelectedColorMode] = useState(null);

	const setInitColorMode = () => {
		let colorMode = JSON.parse(localStorage.getItem('colorMode'));

		if (!colorMode) {
			localStorage.setItem('colorMode', JSON.stringify('light'));
			setSelectedColorMode('light');
			return;
		}
	};

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

	useEffect(() => {
		setInitColorMode();
	}, []);

	return (
		<div className={selectedColorMode === 'light' ? 'app-light' : 'app-dark'}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<div>
								<Button onClick={() => onColorModeChange()}>
									{selectedColorMode === 'light'
										? 'Switch to dark mode'
										: 'Switch to light mode'}
								</Button>
							</div>
						}
					/>
					<Route path="/flag/:flagId" element={<div>Flag by ID</div>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
