/* eslint-disable react/prop-types */
const ExtraOptionSelect = ({ register, searchResults }) => {
	return (
		<div>
			<div className="flex items-center justify-between border-b border-secondary py-3">
				<div>
					<label htmlFor="extraOptions">
						<input
							type="checkbox"
							id="extraOptions"
							{...register('extraOptions')}
							className="mr-2 w-4 h-4"
						/>
						Extra Options
					</label>
				</div>
				<div className="flex items-center gap-3">
					<span>Environment</span>
					<label htmlFor="dummy">
						<input
							type="radio"
							id="dummy"
							value="dummy"
							{...register('environment')}
							className="mr-2 w-4 h-4"
						/>
						Dummy
					</label>
					<label htmlFor="pdt">
						<input
							type="radio"
							id="pdt"
							value="pdt"
							{...register('environment')}
							className="mr-2 w-4 h-4"
						/>
						PDT
					</label>
				</div>
				{searchResults ? (
					<div
						className={`text-white bg-secondary py-1 px-3 h-[35px] rounded-md`}
					>
						Search
					</div>
				) : (
					<button
						className={`text-white bg-secondary py-1 px-3 h-[35px] rounded-md`}
						type="submit"
					>
						Search
					</button>
				)}
			</div>
			{searchResults && <p>Data parsed successfully</p>}
		</div>
	);
};

export default ExtraOptionSelect;
