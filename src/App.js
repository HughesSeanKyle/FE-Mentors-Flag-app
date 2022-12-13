import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="app">
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
