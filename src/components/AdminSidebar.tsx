import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import { navlinks } from '../data/nav';

const AdminSidebar = () => {
	return (
		<div className="flex flex-col h-screen w-64 bg-black py-4 text-white sticky top-0">
			<h2 className="text-2xl font-bold uppercase text-center">Admin</h2>
			<div className="text-center font-bold text-black bg-slate-400 py-2">
				Dashboard
			</div>
			<div>
				{navlinks.admin.map((n) => (
					<Link
						key={n.pathName}
						to={n.urlPath}
						className="flex px-6 py-3 text-xl font-bold items-center gap-4 hover:bg-slate-200 hover:text-black"
					>
						<FontAwesomeIcon icon={n.icon} />
						<span>{n.pathName}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default AdminSidebar;
