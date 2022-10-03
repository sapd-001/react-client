/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { RoutePaths } from '../../router/routes';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';

const AdminDashBoard = () => {
	return (
		<div className="flex flex-col">
			<div className="flex">
				<div className="shadow shadow-slate-300 py-4 h-screen w-64 sticky top-0 bg-slate-600">
					<h1 className="text-lg font-bold uppercase text-center">Admin</h1>
					<div className="w-full">
						<ul className="flex gap-4 flex-col w-full">
							{RoutePaths.find(
								(p) => p.pathName!.toLowerCase() === 'admin'
							)?.children!.map((item) => {
								return item.pathName.toLowerCase() !==
									'profile' ? (
									<Link
										to={item.urlPath}
										className="hover:border-b border-slate-500 px-4"
										key={item.pathName}
									>
										{item.icon ? (
											<div className='flex gap-4 text-lg text-white'>
												<FontAwesomeIcon
													icon={item.icon}
													size="lg"
												/>{' '}
												<span>{item.pathName}</span>
											</div>
										) : (
											<div className='text-white'>{item.pathName}</div>
										)}
									</Link>
								) : item.pathName.toLowerCase() ===
								  'all-admin' ? null : (
									<Link
										key={item.pathName}
										to={'/admin'}
										className="hover:border-b border-slate-500 block px-4"
									>
										{item.icon ? (
											<div>
												<FontAwesomeIcon
													icon={item.icon}
												/>{' '}
												<span>{item.pathName}</span>
											</div>
										) : (
											<div className='font-lg text-white'>{item.pathName}</div>
										)}
									</Link>
								);
							})}
						</ul>
					</div>
				</div>
				<div className="w-full flex flex-col">
					<div className="w-full sticky top-0 h-16 shadow-lg bg-blue-700 text-white flex items-center justify-between px-4">
						<h1 className='capitalize font-bold text-xl'>Employees evaluation system</h1>
						<div className="flex items-center gap-4">
							<div className="relative flex items-center">
								<FontAwesomeIcon icon={faBell} />
								<span className="h-3 w-3 text-[16px] p-2 absolute rounded-full bg-red-400 text-white flex items-center justify-center -top-2 -right-2">
									{5}
								</span>
							</div>
							<button className="w-8 h-8 rounded-full overflow-hidden">
								<img
									src="/avatar.webp"
									alt=""
									className="w-full object-cover"
								/>
							</button>
						</div>
					</div>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminDashBoard;
