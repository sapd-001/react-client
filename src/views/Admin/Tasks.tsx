import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import React from 'react';

const Tasks = () => {
	return (
		<div className='w-full'>
			<div className='uppercase px-4'>
				<h1 className='text-xl font-bold'>Tasks</h1>
			</div>
			<ul className="flex gap-4 shadow-md shadow-slate-300 w-full px-6">
				{['Completed', 'Pending', 'All', 'Rejected'].map((t) => {
					return (
						<Link to={`/admin/tasks/${t.toLowerCase()}`} key={t} className='capitalize'>
							{t.toLowerCase()}
						</Link>
					);
				})}
			</ul>
			<Outlet />
		</div>
	);
};

export default Tasks;
