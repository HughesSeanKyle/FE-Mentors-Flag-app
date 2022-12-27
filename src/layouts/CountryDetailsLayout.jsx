import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from '@reach/router';
import { useNavigate } from '@reach/router';
import { Container, Row, Media, Button } from 'reactstrap';
import CountryDetailsCard from '../components/cards/CountryDetailsCard';

import '../App.css';

const CountryDetailsLayout = ({
	readGlobalState,
	writeGlobalState,
	onCountryDetailSelect,
}) => {
	const navigate = useNavigate();
	const { selectedColorMode, showSelectedCountry } = readGlobalState;

	const [searchTerm, setSearchTerm] = useState(null);
	const [filterSelection, setFilterSelection] = useState(null);

	const readHomeState = { searchTerm, filterSelection };
	const writeHomeState = { setSearchTerm, setFilterSelection };

	useEffect(() => {
		if (!showSelectedCountry) {
			navigate('/');
		}

		window.scrollTo(0, 0);
		return () => {
			onCountryDetailSelect(null);
		};
	}, []);

	return (
		<Container className="show-page-container">
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
				<div className="show-page__img-container">
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
				</div>
				<div className="show-page__img-container">
					<Media body>
						<CountryDetailsCard
							readGlobalState={readGlobalState}
							writeGlobalState={writeGlobalState}
							readHomeState={readHomeState}
							onCountryDetailSelect={onCountryDetailSelect}
						/>
					</Media>
				</div>
			</div>
		</Container>
	);
};

export default CountryDetailsLayout;
