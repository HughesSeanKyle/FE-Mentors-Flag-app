import { useState } from 'react';
import { Container, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import CountryCard from '../components/cards/CountryCard';
import SearchBar from '../components/forms/SearchBar';
import FilterSelectBar from '../components/forms/FilterSelectBar';

import '../App.css';

const HomeLayout = ({
	readGlobalState,
	writeGlobalState,
	onCountryDetailSelect,
}) => {
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
					<Link
						style={{ textDecoration: 'none' }}
						to={`/country/${altSpellings[0]}`}
						onClick={() => onCountryDetailSelect(country)}
					>
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
					</Link>
				);
			}

			if (filterSelection && region.includes(filterSelection)) {
				return (
					<Link
						style={{ textDecoration: 'none' }}
						to={`/country/${altSpellings[0]}`}
						onClick={() => onCountryDetailSelect(country)}
					>
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
					</Link>
				);
			}

			if (!searchTerm && !filterSelection && !componentRequesting) {
				return (
					<Link
						style={{ textDecoration: 'none' }}
						to={`/country/${altSpellings[0]}`}
						onClick={() => onCountryDetailSelect(country)}
					>
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
					</Link>
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

			{!allCountries ? (
				<div
					className={
						selectedColorMode === 'light' ? 'spinner-light' : 'spinner-dark'
					}
				>
					<Spinner />
				</div>
			) : (
				<div className="home-layout-display">
					{mapCountries(searchTerm, filterSelection)}
				</div>
			)}
		</Container>
	);
};

export default HomeLayout;
