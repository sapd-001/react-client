import React from 'react';
import Table, { TableColumnProps } from '../components/Table';

const cols: TableColumnProps[] = [
	{
		columnName: 'id',
		id: 1,
		title: '#'
	},
	{
		columnName: 'id',
		id: 1,
		title: '#'
	},
	{
		columnName: 'id',
		id: 1,
		title: '#'
	},
	{
		columnName: 'id',
		id: 1,
		title: '#'
	},
	{
		columnName: 'id',
		id: 1,
		title: '#'
	}
];

const AdminDepartments = () => {
	return (
		<div>
			<h1>Departements</h1>
			<div>
				<Table columns={cols} rows={[]} />
			</div>
		</div>
	);
};

export default AdminDepartments;
