import { useRef } from 'react';
import { Container, Spinner } from 'reactstrap';
import CountryCard from '../components/cards/CountryCard';
import '../App.css';

const HomeLayout = ({ readGlobalState, writeGlobalState }) => {
	// This comp to manage search and filter logic
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
		<Container className="home-layout-display">{mapCountries()}</Container>
	);
};

export default HomeLayout;
