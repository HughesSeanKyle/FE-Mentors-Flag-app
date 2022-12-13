import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [selectedColorMode, setSelectedColorMode] = useState(null);

	useEffect(() => {
		let colorMode = JSON.parse(localStorage.getItem('colorMode'));

		if (!colorMode) {
			localStorage.setItem('colorMode', JSON.stringify('light'));
			setSelectedColorMode('light');
			return;
		}

		setSelectedColorMode(colorMode);
	}, [selectedColorMode]);

	return (
		<div className={selectedColorMode === 'light' ? 'app-light' : 'app-dark'}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<div>All flags</div>} />
					<Route path="/flag/:flagId" element={<div>Flag by ID</div>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
