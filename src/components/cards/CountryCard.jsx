import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../../App.css';

const CountryCard = ({
	selectedColorMode,
	altSpellings,
	population,
	region,
	capital,
	flags,
}) => {
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
				<CardBody
					className={
						selectedColorMode === 'light' ? 'card-light-text' : 'card-dark-text'
					}
				>
					<CardTitle>Country name</CardTitle>
					<CardText className="m-0">population</CardText>
					<CardText className="m-0">region</CardText>
					<CardText className="m-0">capital</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default CountryCard;
