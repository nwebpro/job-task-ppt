/* eslint-disable react/prop-types */
const TripOptionSelect = ({ register }) => {
	return (
		<div className="grid grid-cols-3 justify-center border border-secondary border-r-0 w-[350px] items-center mx-auto text-center mb-5">
			<div>
				<input
					type="radio"
					className="peer hidden"
					id="roundTrip"
					value="roundTrip"
					{...register('trip')}
				/>
				<label
					htmlFor="roundTrip"
					className="block cursor-pointer select-none p-1 text-center peer-checked:bg-secondary peer-checked:text-white border-r border-secondary"
				>
					Round Trip
				</label>
			</div>
			<div>
				<input
					type="radio"
					className="peer hidden"
					id="oneWay"
					value="oneWay"
					{...register('trip')}
				/>
				<label
					htmlFor="oneWay"
					className="block cursor-pointer select-none p-1 text-center peer-checked:bg-secondary peer-checked:text-white border-r border-secondary"
				>
					One Way
				</label>
			</div>
			<div>
				<input
					type="radio"
					className="peer hidden"
					id="multiCity"
					value="multiCity"
					{...register('trip')}
				/>
				<label
					htmlFor="multiCity"
					className="block cursor-pointer select-none p-1 text-center peer-checked:bg-secondary peer-checked:text-white border-r border-secondary"
				>
					Multi City
				</label>
			</div>
		</div>
	);
};

export default TripOptionSelect;
