import { useState } from 'react';
import { Container, Row } from 'reactstrap';
import CountryCard from '../components/cards/CountryCard';
import SearchBar from '../components/forms/SearchBar';
import FilterSelectBar from '../components/forms/FilterSelectBar';

import '../App.css';

const HomeLayout = ({ readGlobalState, writeGlobalState }) => {
	const { selectedColorMode, allCountries } = readGlobalState;

	const [searchTerm, setSearchTerm] = useState(null);
	const [filterSelection, setFilterSelection] = useState(null);

	const readHomeState = { searchTerm, filterSelection };
	const writeHomeState = { setSearchTerm, setFilterSelection };

	const mapCountries = (searchTerm, filterSelection, componentRequesting) => {
		return allCountries?.map((country, index) => {
			const { altSpellings, population, region, capital, flags, name } =
				country;

			if (searchTerm && name.common.includes(searchTerm)) {
				return (
					<CountryCard
						altSpellings={altSpellings}
						population={population}
						region={region}
						capital={capital}
						flags={flags}
						name={name}
						key={name.common}
						readGlobalState={readGlobalState}
					/>
				);
			}

			if (filterSelection && region.includes(filterSelection)) {
				return (
					<CountryCard
						altSpellings={altSpellings}
						population={population}
						region={region}
						capital={capital}
						flags={flags}
						name={name}
						key={name.common}
						readGlobalState={readGlobalState}
					/>
				);
			}

			if (!searchTerm && !filterSelection && !componentRequesting) {
				return (
					<CountryCard
						altSpellings={altSpellings}
						population={population}
						region={region}
						capital={capital}
						flags={flags}
						name={name}
						key={name.common}
						readGlobalState={readGlobalState}
					/>
				);
			}
		});
	};

	// helpers
	const onSearchOrFilterUpdate = (compLocation, term) => {
		if (compLocation === 'SearchBar') {
			setFilterSelection(null);
			setSearchTerm(term);
			return;
		}

		if (compLocation === 'FilterBar') {
			if (term === 'All Regions') {
				setSearchTerm(null);
				setFilterSelection('');
				return;
			}
			setSearchTerm(null);
			setFilterSelection(term);
			return;
		}
	};

	return (
		<Container>
			<div>
				<ul className="search-filter-display">
					<li>
						<SearchBar
							readGlobalState={readGlobalState}
							writeGlobalState={writeGlobalState}
							readHomeState={readHomeState}
							onSearchOrFilterUpdate={onSearchOrFilterUpdate}
						/>
					</li>
					<li>
						<FilterSelectBar
							readGlobalState={readGlobalState}
							writeGlobalState={writeGlobalState}
							readHomeState={readHomeState}
							writeHomeState={writeHomeState}
							onSearchOrFilterUpdate={onSearchOrFilterUpdate}
						/>
					</li>
				</ul>
			</div>

			<div className="home-layout-display">
				{mapCountries(searchTerm, filterSelection)}
			</div>
		</Container>
	);
};

export default HomeLayout;
