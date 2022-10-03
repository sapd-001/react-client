import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faAdd, faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

const Designations = () => {
	return <div className="flex flex-col gap-3">
		<div className="flex justify-between py-4 px-6 m-2 shadow shadow-slate-400 items-center rounded">
			<h2>Designations list</h2>
			<button className="px-4 py-2 rounded-md bg-white border border-blue-500 flex items-center gap-2">
				<FontAwesomeIcon icon={faAdd} />
            New Designation
			</button>
		</div>
		<div className="flex flex-col gap-3 m-4 shadow-sm p-2">
			<table className="border-collapse h-[calc(100vh_-_4rem)] overflow-scroll">
				<thead>
					<tr className="text-lg text-left">
						<th className="border-2 p-4 w-8"># </th>
						<th className="border-2 p-4">Designation </th>
						<th className="border-2 p-4">
                        Designation Description
						</th>
						<th className="border-2 p-4">Designation Status</th>
						<th className="border-2 p-4">Actions</th>
					</tr>
				</thead>
				<tbody>
					{Array(20)
						.fill('0')
						.map((_, i) => (
							<tr key={i}>
								<td className="border-2 p-4 w-8">{i}</td>
								<td className="border-2 p-4">IT</td>
								<td className="border-2 p-4">
                                Information Technology
								</td>
								<td className="border-2 p-4">
									<div>
										<span className="bg-green-600 text-white py-[2px] px-2 rounded-2xl text-sm">
                                        Active
										</span>
									</div>
								</td>
								<td className="border-2 p-4">
									<div className="flex gap-3">
										<FontAwesomeIcon
											className="cursor-pointer text-blue-400"
											icon={faPencil}
										/>
										<FontAwesomeIcon
											className="cursor-pointer text-gray-500"
											icon={faEye}
										/>
										<FontAwesomeIcon
											className="cursor-pointer text-red-400"
											icon={faTrash}
										/>
									</div>
								</td>
							</tr>
						))}
				</tbody>
			</table>
			<div>
				<p>showing 1 to 10 of 20 entries</p>
				<div>
					{/* pagination buttons */}
                
				</div>
			</div>
		</div>
	</div>;
};

export default Designations;
