import React from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Spinner,
} from 'reactstrap';
import '../../App.css';

const CountryCard = ({
	altSpellings,
	population,
	region,
	capital,
	flags,
	name,
	readGlobalState,
}) => {
	const { selectedColorMode } = readGlobalState;

	// From source get the
	// 1. Country
	// 2. Population
	// 3. Region
	// 4. Capital
	return (
		<div>
			<Card
				className={selectedColorMode === 'light' ? 'card-light' : 'card-dark'}
			>
				<CardImg
					top
					className="card__card-img"
					src={flags.png}
					alt="Card image cap"
				/>
				<CardBody>
					<CardTitle
						className={
							selectedColorMode === 'light'
								? 'card-light-text-heading'
								: 'card-dark-text-heading'
						}
					>
						{name.common}
					</CardTitle>
					<CardText
						className={
							selectedColorMode === 'light'
								? 'card-light-text m-0'
								: 'card-dark-text m-0'
						}
					>
						population: {population.toLocaleString()}
					</CardText>
					<CardText
						className={
							selectedColorMode === 'light'
								? 'card-light-text m-0'
								: 'card-dark-text m-0'
						}
					>
						region: {region}
					</CardText>
					<CardText
						className={
							selectedColorMode === 'light'
								? 'card-light-text m-0'
								: 'card-dark-text m-0'
						}
					>
						capital: {capital}
					</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default CountryCard;
