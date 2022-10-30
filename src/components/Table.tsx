/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import StatusBadge from './StatusBadge';

type DataType = {
	[x: string]: any;
	id: number;
	userName: string;
	department: string;
	role: string;
	admissionDate: string;
};
const data:DataType[] = [
	{
		id: 1,
		userName: 'Mike Juma',
		department: 'tech',
		role: 'Admin',
		admissionDate: new Date().toDateString()
	},
	{
		id: 1,
		userName: 'Mike Juma',
		department: 'tech',
		role: 'Admin',
		admissionDate: new Date().toDateString()
	}
];

const Table = () => {
	return (
		<div className="p-4">
			<table className="w-full border-collapse border-2 shadow p-2 text-center overflow-x-scroll">
				<thead>
					<tr className="font-bold text-xl uppercase bg-slate-200">
						{[
							'#',
							'Username',
							'Department',
							'Role',
							'Admission date',
							'Status',
							'Actions'
						].map((c) => (
							<th key={c} className="border border-slate-300 px-4 py-4">
								{c}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="w-full text-xl font-medium">
					{data.map((d) => (
						<tr key={d.id} className="w-full">
							{Object.keys(d).map((k) => (
								<td key={k} className="border px-4 py-2">
									{d[k]}
								</td>
							))}
							<td className="border px-4 py-2">
								<StatusBadge
									name="Cancelled"
									status="cancelled"
								/>
							</td>
							<td className="border px-4 py-2 flex items-center">
								<button className="border rounded-3xl px-3 py-1 uppercase text-[12px] bg-blue-600 text-white h-fit">
									Edit
								</button>
								<button className="border rounded-3xl px-3 py-1 uppercase text-[12px] bg-red-600 text-white h-fit">
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
