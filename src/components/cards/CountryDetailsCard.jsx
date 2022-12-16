import React from 'react';
import {
	Button,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Container,
	Spinner,
} from 'reactstrap';
import '../../App.css';

const CountryDetailsCard = ({ readGlobalState, onCountryDetailSelect }) => {
	const { selectedColorMode, allCountries, showSelectedCountry } =
		readGlobalState;

	// Conditional Comp rendering
	const handleBorderBtnRender = () => {
		if (showSelectedCountry.borders) {
			return showSelectedCountry.borders.map((borderCountry, index) => {
				return (
					<Button
						key={index}
						className={
							selectedColorMode === 'light'
								? 'card-light-text show-page__card-row-display__text show-page__text-light'
								: 'card-dark-text show-page__card-row-display__text show-page__text-dark'
						}
					>
						{borderCountry}
					</Button>
				);
			});
		} else {
			return (
				<div
					// className={
					// 	selectedColorMode === 'light' ? 'card-light-text' : 'card-dark-text'
					// }
					style={{ color: 'red' }}
				>
					This country has no neighboring countries
				</div>
			);
		}
	};

	// Helpers
	const getNativeCountryName = () => {
		if (showSelectedCountry) {
			const getNativeName = showSelectedCountry.name.nativeName;
			console.log('getNativeName', getNativeName);
			const nativeNameObjFirst = Object.values(getNativeName)[0].official;
			console.log('nativeNameObjFirst', nativeNameObjFirst);
			return nativeNameObjFirst;
		}
		return 'Native name not found';
	};

	const getCountryCurrency = () => {
		if (showSelectedCountry) {
			const getCurrency = showSelectedCountry.currencies;
			console.log('getCurrency', getCurrency);
			const currencyObjFirst = Object.values(getCurrency)[0].name;
			console.log('currencyObjFirst', currencyObjFirst);
			return currencyObjFirst;
		}
		return 'Currency not found';
	};

	const getCountryLanguages = () => {
		if (showSelectedCountry) {
			const getLangs = showSelectedCountry.languages;
			console.log('getLangs', getLangs);
			const langsValues = Object.values(getLangs);
			console.log('langsValues', langsValues);
			return langsValues.join(',');
		}
		return 'Languages not found';
	};

	return (
		<div>
			<Card
				style={{ backgroundColor: 'transparent', border: 'none' }}
				className={
					selectedColorMode === 'light'
						? 'show-page__card-light'
						: 'show-page__card-dark'
				}
			>
				<CardTitle
					className={
						selectedColorMode === 'light'
							? 'card-light-text-heading show-page__card-title'
							: 'card-dark-text-heading show-page__card-title'
					}
				>
					{showSelectedCountry.name.common}
				</CardTitle>
				<CardBody className="show-page__card-text-columns">
					<Container>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Native name: {getNativeCountryName()}
						</CardText>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Population: {showSelectedCountry.population.toLocaleString()}
						</CardText>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Region: {showSelectedCountry.region}
						</CardText>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Sub Region: {showSelectedCountry.subregion}
						</CardText>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Capital: {showSelectedCountry.capital[0]}
						</CardText>
					</Container>
					<Container>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Top Level Domain: {showSelectedCountry.tld[0]}
						</CardText>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Currencies: {getCountryCurrency()}
						</CardText>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Languages: {getCountryLanguages()}
						</CardText>
					</Container>
				</CardBody>
				<Container className="show-page__card-row-display">
					<p
						className={
							selectedColorMode === 'light'
								? 'card-light-text show-page__card-row-display__text'
								: 'card-dark-text show-page__card-row-display__text'
						}
					>
						Border Countries:{' '}
					</p>
					<div
						className={
							showSelectedCountry.borders
								? 'show-page__card-row-display__buttons'
								: 'show-page__card-row-display__no-buttons'
						}
					>
						{handleBorderBtnRender()}
					</div>
				</Container>
			</Card>
		</div>
	);
};

export default CountryDetailsCard;
