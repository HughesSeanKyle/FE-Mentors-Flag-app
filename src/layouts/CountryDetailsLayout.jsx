import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Media, Button } from 'reactstrap';
import CountryCard from '../components/cards/CountryCard';
import SearchBar from '../components/forms/SearchBar';
import FilterSelectBar from '../components/forms/FilterSelectBar';
import CountryDetailsCard from '../components/cards/CountryDetailsCard';

import '../App.css';

const CountryDetailsLayout = ({
	readGlobalState,
	writeGlobalState,
	onCountryDetailSelect,
}) => {
	const { selectedColorMode, showSelectedCountry } = readGlobalState;

	const [searchTerm, setSearchTerm] = useState(null);
	const [filterSelection, setFilterSelection] = useState(null);

	const readHomeState = { searchTerm, filterSelection };
	const writeHomeState = { setSearchTerm, setFilterSelection };

	const navigate = useNavigate();

	const onBackClick = () => {
		navigate(-1);
	};

	useEffect(() => {
		return () => {
			onCountryDetailSelect(null);
		};
	}, []);

	return (
		<Container>
			<div>
				<ul className="search-filter-display">
					<li>
						<Link style={{ textDecoration: 'none' }} to={'/'}>
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
						</Link>
					</li>
				</ul>
			</div>

			<div className="show-page-layout-display">
				<Media
					object
					src={showSelectedCountry ? showSelectedCountry.flags.svg : null}
					alt={showSelectedCountry ? showSelectedCountry.name.common : 'name'}
					width="100%"
					height="54%"
					className={
						selectedColorMode === 'light'
							? 'show-page__img-light'
							: 'show-page__img-dark'
					}
				/>
				<Media body>
					<CountryDetailsCard
						readGlobalState={readGlobalState}
						writeGlobalState={writeGlobalState}
						readHomeState={readHomeState}
						// To update onBorderSelect
						onCountryDetailSelect={onCountryDetailSelect}
					/>
				</Media>
			</div>
		</Container>
	);
};

export default CountryDetailsLayout;
