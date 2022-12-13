import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
	return (
		<div className={colorMode === 'light' ? 'app-light' : 'app-dark'}>
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
