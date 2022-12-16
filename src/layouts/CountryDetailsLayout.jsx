import { useState } from 'react';
import { Container, Row, Media, Button } from 'reactstrap';
import CountryCard from '../components/cards/CountryCard';
import SearchBar from '../components/forms/SearchBar';
import FilterSelectBar from '../components/forms/FilterSelectBar';
import CountryDetailsCard from '../components/cards/CountryDetailsCard';

import '../App.css';

const CountryDetailsLayout = ({ readGlobalState, writeGlobalState }) => {
	const { selectedColorMode, allCountries } = readGlobalState;

	const [searchTerm, setSearchTerm] = useState(null);
	const [filterSelection, setFilterSelection] = useState(null);

	const readHomeState = { searchTerm, filterSelection };
	const writeHomeState = { setSearchTerm, setFilterSelection };

	return (
		<Container>
			<div>
				<ul className="search-filter-display">
					<li>
						<Button
							className={
								selectedColorMode === 'light'
									? 'show-page__icon-light'
									: 'show-page__icon-dark'
							}
						>
							<i
								style={
									selectedColorMode === 'light'
										? { color: 'hsl(200, 15%, 8%)' }
										: { color: 'hsl(0, 0%, 100%)' }
								}
								className="fa fa-arrow-left"
							/>{' '}
							Back
						</Button>
					</li>
				</ul>
			</div>

			<div className="show-page-layout-display">
				<Media
					object
					src="https://flagcdn.com/w320/ax.png"
					alt="cat"
					width="100%"
					height="54%"
					style={{ maxHeight: '450px' }}
				/>
				<Media body>
					<CountryDetailsCard
						readGlobalState={readGlobalState}
						writeGlobalState={writeGlobalState}
						readHomeState={readHomeState}
					/>
				</Media>
			</div>
		</Container>
	);
};

export default CountryDetailsLayout;
