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
				className={selectedColorMode === 'light' ? 'card-light' : 'card-dark'}
			>
				<CardTitle
					className={
						selectedColorMode === 'light'
							? 'card-light-text-heading'
							: 'card-dark-text-heading'
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
					<Button>France</Button>
					<div>
						<Button>Spain</Button>
						<Button>Uk</Button>
						<Button>Ireland</Button>
					</div>
				</Container>
			</Card>
		</div>
	);
};

export default CountryDetailsCard;
