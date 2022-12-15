import { useRef } from 'react';
import { Container, Row } from 'reactstrap';
import CountryCard from '../components/cards/CountryCard';
import SearchBar from '../components/forms/SearchBar';
import FilterSelectBar from '../components/forms/FilterSelectBar';

import '../App.css';

const HomeLayout = ({ readGlobalState, writeGlobalState }) => {
	const { selectedColorMode, allCountries } = readGlobalState;

	const mapCountries = () => {
		return allCountries?.map((country, index) => {
			const { altSpellings, population, region, capital, flags, name } =
				country;

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
		});
	};

	return (
		<Container>
			<div>
				<ul className="search-filter-display">
					<li>
						<SearchBar
							readGlobalState={readGlobalState}
							writeGlobalState={writeGlobalState}
						/>
					</li>
					<li>
						<FilterSelectBar
							readGlobalState={readGlobalState}
							writeGlobalState={writeGlobalState}
						/>
					</li>
				</ul>
			</div>

			<div className="home-layout-display">{mapCountries()}</div>
		</Container>
	);
};

export default HomeLayout;
