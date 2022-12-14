import { useRef } from 'react';
import { Container, Row } from 'reactstrap';
import CountryCard from '../components/cards/CountryCard';
import SearchBar from '../components/forms/SearchBar';
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
		<Container>
			<div>
				<ul>
					<li>
						<SearchBar />
					</li>
					<li>
						<form className="form-inline">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button
								className="btn btn-outline-success my-2 my-sm-0"
								type="submit"
							>
								Search
							</button>
						</form>
					</li>
				</ul>
			</div>

			<div className="home-layout-display">{mapCountries()}</div>
		</Container>
	);
};

export default HomeLayout;
