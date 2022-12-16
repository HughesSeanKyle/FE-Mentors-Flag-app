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

const CountryDetailsCard = ({ readGlobalState }) => {
	const { selectedColorMode } = readGlobalState;

	return (
		<div>
			<Card
				style={{ backgroundColor: 'transparent', border: 'none' }}
				className={selectedColorMode === 'light' ? 'card-light' : 'card-dark'}
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
					<div className="show-page__card-row-display__buttons">
						<Button
							className={
								selectedColorMode === 'light'
									? 'card-light-text show-page__card-row-display__text show-page__text-light'
									: 'card-dark-text show-page__card-row-display__text show-page__text-dark'
							}
						>
							Spain
						</Button>
						<Button
							className={
								selectedColorMode === 'light'
									? 'card-light-text show-page__card-row-display__text show-page__text-light'
									: 'card-dark-text show-page__card-row-display__text show-page__text-dark'
							}
						>
							Uk
						</Button>
						<Button
							className={
								selectedColorMode === 'light'
									? 'card-light-text show-page__card-row-display__text show-page__text-light'
									: 'card-dark-text show-page__card-row-display__text show-page__text-dark'
							}
						>
							Ireland
						</Button>
					</div>
				</Container>
			</Card>
		</div>
	);
};

export default CountryDetailsCard;
