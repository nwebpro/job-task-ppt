/* eslint-disable no-unused-vars */
import { useState } from 'react';
import FlightDetailsTable from '../Components/FlightDetailsTable';
import FlightSearchForm from '../Components/FlightSearchForm';
import { useForm } from 'react-hook-form';
import LoadingAnimation from '../Components/LoadingAnimation';
const apiBaseUrl = import.meta.env.VITE_LOCAL_BASE_URL;

const Home = () => {
	const [searchResults, setSearchResults] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			trip: 'oneWay',
			origin: '',
			destination: '',
			departureDate: '',
			dayCountOne: 'Day -',
			dayCountTow: 'Day +',
			departureTime: 'Anytime',
			passengerType: 'adult',
			passengerCount: '0',
			extraOptions: false,
			environment: 'dummy',
		},
	});
	const onSubmit = (data) => {
		setIsLoading(true);
		setTimeout(() => {
			fetch(`${apiBaseUrl}/src/data/flight_data.json`)
				.then((response) => response.json())
				.then((jsonData) => {
					setSearchResults(jsonData);
					setIsLoading(false);
				})
				.catch((error) => {
					console.error('Error fetching data:', error);
					setIsLoading(false);
				});
		}, 2000);
	};
	return (
		<>
			<FlightSearchForm
				onSubmit={onSubmit}
				handleSubmit={handleSubmit}
				register={register}
				searchResults={searchResults}
			/>
			<section className="container mx-auto px-4 sm:px-6 lg:px-8">
				{isLoading && <LoadingAnimation />}
			</section>
			{searchResults && (
				<FlightDetailsTable searchResults={searchResults} />
			)}
		</>
	);
};

export default Home;
