/* eslint-disable react/prop-types */
const FlightDetailsTable = ({ searchResults }) => {
	const flightOffer = searchResults?.flightOffer;
	return (
		<section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
			<table className="w-full flight_details_table">
				<thead>
					<tr>
						<th>Flight</th>
						<th>Aircraft</th>
						<th>Class</th>
						<th>Fare</th>
						<th>Route</th>
						<th>Departure</th>
						<th>Arrival</th>
						<th></th>
						<th>Duration</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{flightOffer?.map((data, i) => (
						<tr key={i}>
							<td>
								{data.itineraries.map((item, i) => (
									<div key={i}>
										{item.segments.map((segment, i) => (
											<p key={i}>
												{segment.marketingCarrier}{' '}
												{segment.flightNumber}
											</p>
										))}
									</div>
								))}
							</td>
							<td>
								{data.itineraries.map((item, i) => (
									<div key={i}>
										{item.segments.map((segment, i) => (
											<p key={i}>
												{segment.aircraft}
											</p>
										))}
									</div>
								))}
							</td>
							<td>
								{data.class[0].map((item, i) => (
									<p key={i}>{item}</p>
								))}
							</td>
							<td>
								{data.fareBasis[0].map((item, i) => (
									<p key={i}>{item}</p>
								))}
							</td>
							<td>
								{data.itineraries.map((item, i) => (
									<div key={i}>
										{item.segments.map((segment, i) => (
											<p key={i}>
												{segment.departure.iataCode} -{' '}
												{segment.arrival.iataCode}
											</p>
										))}
									</div>
								))}
							</td>
							<td>
								{data.itineraries.map((item, i) => (
									<div key={i}>
										{item.segments.map((segment, i) => (
											<p key={i}>
												{segment.departure.at}
											</p>
										))}
									</div>
								))}
							</td>
							<td>
								{data.itineraries.map((item, i) => (
									<div key={i}>
										{item.segments.map((segment, i) => (
											<p key={i}>{segment.arrival.at}</p>
										))}
									</div>
								))}
							</td>
							<td>
								<p>----</p>
								<p>----</p>
							</td>
							<td>
								{data.itineraries.map((time, i) => (
									<p key={i}>{time.duration}</p>
								))}
							</td>
							<td>
								<p>{data?.price}</p>
								<p>
									<button className="details_btn">
										Select
									</button>
								</p>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default FlightDetailsTable;
