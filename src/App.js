import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getAllCountries } from './api/getCountries';
import NavBar from './components/navs/NavBar';
import HomeLayout from './layouts/HomeLayout';
import CountryDetailsLayout from './layouts/CountryDetailsLayout';

import './App.css';

function App() {
	const [selectedColorMode, setSelectedColorMode] = useState(null);
	const [allCountries, setAllCountries] = useState(null);
	const [showSelectedCountry, setShowSelectedCountry] = useState(null);

	const readGlobalState = {
		selectedColorMode,
		allCountries,
		showSelectedCountry,
	};
	const writeGlobalState = {
		setSelectedColorMode,
		setAllCountries,
		setShowSelectedCountry,
	};

	console.log('readGlobalState', readGlobalState);

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
		(async () => {
			const allCountriesResp = await getAllCountries();

			if (allCountriesResp.data) {
				setAllCountries(allCountriesResp.data);
			} else {
				setAllCountries(allCountriesResp.error);
			}
		})();
	}, []);

	return (
		<div className={selectedColorMode === 'light' ? 'app-light' : 'app-dark'}>
			<BrowserRouter>
				<NavBar
					readGlobalState={readGlobalState}
					writeGlobalState={writeGlobalState}
				/>
				<Routes>
					<Route
						path="/"
						element={
							<HomeLayout
								readGlobalState={readGlobalState}
								writeGlobalState={writeGlobalState}
							/>
						}
					/>
					<Route
						path="/country/:name"
						element={
							<CountryDetailsLayout
								readGlobalState={readGlobalState}
								writeGlobalState={writeGlobalState}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
