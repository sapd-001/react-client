/* eslint-disable indent */
/* eslint-disable @typescript-eslint/naming-convention */
import Homepage from '../views/Homepage';
import { IconDefinition, faDev } from '@fortawesome/free-brands-svg-icons';

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
		isNested: false,
	},
];

export { appRoutes as RoutePaths };
