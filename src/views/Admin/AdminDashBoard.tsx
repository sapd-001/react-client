import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashBoard = () => {
	return (
		<div className="flex flex-col">
			<div className="flex">
				<div className="shadow shadow-slate-300 py-4 h-screen w-56">
					<h1 className="text-xl font-bold">Admin dashboard</h1>
					<div className="w-full">
						<ul className="flex gap-4 flex-col w-full">
							{['Profile', 'Settings', 'Tasks', 'Logout'].map(
								(item) => {
									return item.toLowerCase() !== 'profile' ? (
										<Link
											to={`/admin/${item.toLowerCase()}`}
											className="hover:border-b border-slate-500 px-4"
											key={item}
										>
											{item}
										</Link>
									) : (
										<Link
											key={item}
											to={'/admin'}
											className="hover:border-b border-slate-500 block px-4"
										>
											{item}
										</Link>
									);
								}
							)}
						</ul>
					</div>
				</div>
				<div className="w-full flex flex-col">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminDashBoard;
