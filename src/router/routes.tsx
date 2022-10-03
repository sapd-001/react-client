/* eslint-disable indent */
/* eslint-disable @typescript-eslint/naming-convention */
import AdminDashBoard from '../views/Admin/AdminDashBoard';
import AdminProfile from '../views/Admin/AdminProfile';
import AdminSettings from '../views/Admin/AdminSettings';
import AllAdmin from '../views/Admin/AllAdmin';
import AllTasks from '../views/Admin/AllTasks';
import CompletedTasks from '../views/Admin/CompletedTasks';
import Departments from '../views/Admin/Departments';
import Designations from '../views/Admin/Designations';
import Employees from '../views/Admin/Employees';
import Homepage from '../views/Homepage';
import PendingTasks from '../views/Admin/PendingTasks';
import React from 'react';
import RejectedTasks from '../views/Admin/RejectedTasks';
import Tasks from '../views/Admin/Tasks';
import { IconDefinition, faDev } from '@fortawesome/free-brands-svg-icons';
import {
	faBriefcase,
	faCogs,
	faHome,
	faPencil,
	faUserCog,
	faUserFriends
} from '@fortawesome/free-solid-svg-icons';


interface IRouteProps {
	pathName: string;
	urlPath: string;
	Component: React.ReactElement;
	isNested: boolean;
	children?: IRouteProps[];
	icon?: IconDefinition;
}

const appRoutes: IRouteProps[] = [
	{
		pathName: 'Home',
		urlPath: '/',
		Component: <Homepage />,
		isNested: false,
		icon: faHome
	},
	{
		pathName: 'Admin',
		urlPath: 'admin',
		Component: <AdminDashBoard />,
		isNested: true,
		children: [
			{
				pathName: 'Departments',
				urlPath: '/admin/departments',
				Component: <Departments />,
				isNested: false,
				icon: faDev
			},
			{
				pathName: 'Employees',
				urlPath: '/admin/employees',
				Component: <Employees />,
				isNested: false,
				icon: faUserFriends
			},
			{
				pathName: 'Designations',
				urlPath: '/admin/designations',
				Component: <Designations />,
				isNested: false,
				icon: faBriefcase
			},
			{
				pathName: 'Profile',
				urlPath: '/admin',
				Component: <AdminProfile />,
				isNested: false,
				icon: faUserCog
			},
			{
				pathName: 'Settings',
				urlPath: '/admin/settings',
				Component: <AdminSettings />,
				isNested: false,
				icon: faCogs
			},
			{
				pathName: 'Tasks',
				urlPath: '/admin/tasks',
				Component: <Tasks />,
				isNested: true,
                icon:faPencil,  
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
				pathName: 'all-admin',
				urlPath: '/admin/*'
			}
		]
	}
];

export { appRoutes as RoutePaths };
