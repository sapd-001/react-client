/* eslint-disable indent */
/* eslint-disable @typescript-eslint/naming-convention */
import AdminDashBoard from '../views/Admin/AdminDashBoard';
import AdminProfile from '../views/Admin/AdminProfile';
import AdminSettings from '../views/Admin/AdminSettings';
import AllAdmin from '../views/Admin/AllAdmin';
import AllTasks from '../views/Admin/AllTasks';
import CompletedTasks from '../views/Admin/CompletedTasks';
import Homepage from '../views/Homepage';
import PendingTasks from '../views/Admin/PendingTasks';
import React from 'react';
import RejectedTasks from '../views/Admin/RejectedTasks';
import Tasks from '../views/Admin/Tasks';

interface IRouteProps {
	pathName: string;
	urlPath: string;
	Component: React.ReactElement;
	isNested: boolean;
	children?: IRouteProps[];
}

const appRoutes: IRouteProps[] = [
	{
		pathName: 'Home',
		urlPath: '/',
		Component: <Homepage />,
		isNested: false
	},
	{
		pathName: 'Admin',
		urlPath: 'admin',
		Component: <AdminDashBoard />,
		isNested: true,
		children: [
			{
				pathName: 'Profile',
				urlPath: '/admin',
				Component: <AdminProfile />,
				isNested: false
			},
			{
				pathName: 'Settings',
				urlPath: '/admin/settings',
				Component: <AdminSettings />,
				isNested: false
			},
			{
				pathName: 'Tasks',
				urlPath: '/admin/tasks',
				Component: <Tasks />,
				isNested: true,
				children: [
					{
						pathName: 'Completed',
						Component: <CompletedTasks />,
						isNested: false,
						urlPath: '/admin/tasks/completed'
					},
					{
						pathName: 'All',
						Component: <AllTasks />,
						isNested: false,
						urlPath: '/admin/tasks'
					},
					{
						pathName: 'Rejected',
						Component: <RejectedTasks />,
						isNested: false,
						urlPath: '/admin/tasks/rejected'
					},
					{
						pathName: 'Pending',
						Component: <PendingTasks />,
						isNested: false,
						urlPath: '/admin/tasks/pending'
					},
					{
						pathName: 'All',
						Component: <AllTasks />,
						isNested: false,
						urlPath: '/admin/tasks/all'
					}
				]
			},
			{
				Component: <AllAdmin />,
				isNested: false,
				pathName: 'All admin catch routes',
				urlPath: '/admin/*'
			}
		]
	}
];

export { appRoutes as RoutePaths };
