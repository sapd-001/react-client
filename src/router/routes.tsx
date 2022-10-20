/* eslint-disable indent */
/* eslint-disable @typescript-eslint/naming-convention */
import Admin from '../views/AdminPage';
import AdminDashboard from '../views/AdminDashboard';
import AdminDepartments from '../views/AdminDepartments';
import AdminDesignations from '../views/AdminDesignations';
import AdminEmployees from '../views/AdminEmployees';
import AdminEvaluations from '../views/AdminEvaluations';
import AdminEvaluators from '../views/AdminEvaluators';
import AdminTasks from '../views/AdminTasks';
import AdminUsers from '../views/AdminUsers';
import Homepage from '../views/Homepage';
import React from 'react';

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
		Component: <Admin />,
		isNested: true,
		pathName: 'Admin',
		urlPath: '/admin',
		children: [
			{
				Component: <AdminDashboard />,
				isNested: false,
				pathName: 'Dashboard',
				urlPath: '/admin/'
			},
			{
				Component: <AdminDepartments />,
				isNested: false,
				pathName: 'Department',
				urlPath: '/admin/departments'
			},
			{
				Component: <AdminDesignations />,
				isNested: false,
				pathName: 'Designations',
				urlPath: '/admin/designations'
			},
			{
				Component: <AdminEmployees />,
				isNested: false,
				pathName: 'Employees',
				urlPath: '/admin/employees'
			},
			{
				Component: <AdminEvaluations />,
				isNested: false,
				pathName: 'Evaluations',
				urlPath: '/admin/evaluation'
			},
			{
				Component: <AdminTasks />,
				isNested: false,
				pathName: 'Tasks',
				urlPath: '/admin/tasks'
			},
			{
				Component: <AdminEvaluators />,
				isNested: false,
				pathName: 'Evaluators',
				urlPath: '/admin/evaluators'
			},{
				Component: <AdminUsers />,
				isNested: false,
				pathName: 'Users',
				urlPath: '/admin/users',
			}
		]
	}
];

export { appRoutes as RoutePaths };
