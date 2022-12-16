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

	// use abbreviated country names and show full name on btn hover
	const sampleBorderBtnArr = showSelectedCountry
		? showSelectedCountry.borders
		: ['Spain', 'UK', 'Ireland'];

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
					className={
						selectedColorMode === 'light' ? 'card-light-text' : 'card-dark-text'
					}
				>
					This country has no neighboring countries
				</div>
			);
		}
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
					name
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
							Native name:
						</CardText>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Population:
						</CardText>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Region:
						</CardText>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Sub Region:
						</CardText>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Capital:
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
							Top Level Domain:
						</CardText>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Currencies:
						</CardText>
						<CardText
							className={
								selectedColorMode === 'light'
									? 'card-light-text m-0'
									: 'card-dark-text m-0'
							}
						>
							Languages:
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
