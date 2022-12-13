import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import NavBar from './components/NavBar';

function App() {
	const [selectedColorMode, setSelectedColorMode] = useState(null);

	const readGlobalState = { selectedColorMode };
	const writeGlobalState = { setSelectedColorMode };

	const setInitColorMode = () => {
		let colorMode = JSON.parse(localStorage.getItem('colorMode'));

		if (!colorMode) {
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
				<NavBar
					readGlobalState={readGlobalState}
					writeGlobalState={writeGlobalState}
				/>
				<Routes>
					<Route path="/" element={<div>All flags</div>} />
					<Route path="/flag/:flagId" element={<div>Flag by ID</div>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
