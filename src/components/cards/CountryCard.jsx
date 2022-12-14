import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../../App.css';

const CountryCard = (props) => {
	// From source get the
	// 1. Country
	// 2. Population
	// 3. Region
	// 4. Capital
	return (
		<div>
			<Card>
				<CardImg
					top
					width="20%"
					height="30%"
					src="https://flagcdn.com/w320/mr.png"
					alt="Card image cap"
				/>
				<CardBody>
					<CardTitle>Country name</CardTitle>
					<CardText>population</CardText>
					<CardText>region</CardText>
					<CardText>capital</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default CountryCard;
