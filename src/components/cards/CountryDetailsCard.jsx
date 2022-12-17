import { useEffect } from 'react';
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

	// Helpers
	const getBorderCountryDetails = () => {
		if (!showSelectedCountry.borders) {
			return {
				data: null,
				error: 'This country has no neighboring countries',
			};
		}

		const borderCountriesDetails = [];

		showSelectedCountry.borders.map((borderCountry) => {
			allCountries.map((country) => {
				if (borderCountry == country.cca3) {
					borderCountriesDetails.push(country);
				}
			});
		});

		if (!borderCountriesDetails) {
			return {
				data: null,
				error: 'Border countries failed to populate',
			};
		}

		if (borderCountriesDetails) {
			return {
				data: borderCountriesDetails,
				error: null,
			};
		}
	};

	const onBorderBtnRenderWithDetails = () => {
		const borderCountryDetails = getBorderCountryDetails();

		if (borderCountryDetails.error) {
			return <div style={{ color: 'red' }}>{borderCountryDetails.error}</div>;
		}

		return borderCountryDetails.data.map((borderCountry, index) => {
			return (
				<Button
					key={index}
					style={{ fontSize: 'smaller' }}
					className={
						selectedColorMode === 'light'
							? 'card-light-text show-page__card-row-display__text show-page__text-light'
							: 'card-dark-text show-page__card-row-display__text show-page__text-dark'
					}
				>
					{borderCountry.name.common}
				</Button>
			);
		});
	};

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
				<div style={{ color: 'red' }}>
					This country has no neighboring countries
				</div>
			);
		}
	};

	const getNativeCountryName = () => {
		if (showSelectedCountry) {
			const getNativeName = showSelectedCountry.name.nativeName;
			if (!getNativeName) {
				return 'Native name not found';
			}
			const nativeNameObjFirst = Object.values(getNativeName)[0].official;
			return nativeNameObjFirst;
		}
		return 'Native name not found';
	};

	const getCountryCurrency = () => {
		if (showSelectedCountry) {
			const getCurrency = showSelectedCountry.currencies;
			if (!getCurrency) {
				return 'Currency not found';
			}
			const currencyObjFirst = Object.values(getCurrency)[0].name;
			return currencyObjFirst;
		}
		return 'Currency not found';
	};

	const getCountryLanguages = () => {
		if (showSelectedCountry) {
			const getLangs = showSelectedCountry.languages;
			if (!getLangs) {
				return 'Languages not found';
			}
			const langsValues = Object.values(getLangs);
			return langsValues.join(',');
		}
		return 'Languages not found';
	};

	useEffect(() => {
		const borderCountries = getBorderCountryDetails();
		console.log('borderCountries', borderCountries);
	}, []);

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
							Capital:{' '}
							{showSelectedCountry.capital
								? showSelectedCountry.capital[0]
								: 'none'}
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
						{onBorderBtnRenderWithDetails()}
					</div>
				</Container>
			</Card>
		</div>
	);
};

export default CountryDetailsCard;
