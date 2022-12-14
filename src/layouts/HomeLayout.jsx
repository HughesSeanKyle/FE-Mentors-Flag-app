import React from 'react';
import { Container } from 'reactstrap';
import CountryCard from '../components/cards/CountryCard';
import '../App.css';

const HomeLayout = () => {
	return (
		<Container className="home-layout-display">
			<CountryCard />
			<CountryCard />
			<CountryCard />
			<CountryCard />
		</Container>
	);
};

export default HomeLayout;
