/* eslint-disable react/prop-types */
import ExtraOptionSelect from './ExtraOptionSelect';
import TripOptionSelect from './TripOptionSelect';

const FlightSearchForm = ({ onSubmit, handleSubmit, register, searchResults }) => {
	return (
		<section className="container mx-auto mb-5 px-4 sm:px-6 lg:px-8">
			<div>
				<form
					className="flight_search_form"
					onSubmit={handleSubmit(onSubmit)}
				>
					<TripOptionSelect register={register} />
					<div className="flex items-center justify-between gap-3 border-b border-t border-secondary py-3">
						<input
							type="text"
							className="input_style uppercase"
							placeholder="LHR"
							{...register('origin')}
						/>
						<input
							type="text"
							className="input_style uppercase"
							placeholder="CDG"
							{...register('destination')}
						/>
						<input
							type="date"
							className="input_style"
							{...register('departureDate')}
						/>
						<select
							{...register('dayCountOne')}
							className="input_style"
						>
							<option>Day -</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
						<select
							{...register('dayCountTow')}
							className="input_style"
						>
							<option>Day +</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
						<select
							{...register('departureTime')}
							className="input_style"
						>
							<option>Anytime</option>
							<option value="00:00">00:00</option>
							<option value="01:00">01:00</option>
							<option value="02:00">02:00</option>
							<option value="03:00">03:00</option>
							<option value="04:00">04:00</option>
							<option value="05:00">05:00</option>
							<option value="06:00">06:00</option>
							<option value="07:00">07:00</option>
							<option value="08:00">08:00</option>
							<option value="09:00">09:00</option>
							<option value="10:00">10:00</option>
							<option value="11:00">11:00</option>
							<option value="12:00">12:00</option>
						</select>
						+
						<select
							{...register('passengerType')}
							className="input_style"
						>
							<option value="adult">Adult</option>
							<option value="children">Children</option>
						</select>
						<select
							{...register('passengerCount')}
							className="input_style"
						>
							<option>0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
						+
					</div>
					<ExtraOptionSelect register={register} searchResults={searchResults} />
				</form>
			</div>
		</section>
	);
};

export default FlightSearchForm;
