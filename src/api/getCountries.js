import axios from 'axios';

export async function getAllCountries() {
	try {
		const response = await axios.get('https://restcountries.com/v3.1/all');

		return {
			data: response.data,
			error: null,
		};
	} catch (error) {
		return {
			data: null,
			error: error.message,
		};
	}
}
