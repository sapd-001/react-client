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

const AdminDesignations = () => {
	return (
		<div>
			<h1>Designations</h1>
			<div>
				<Table columns={cols} rows={[]} />
			</div>
		</div>
	);
};

export default AdminDesignations;
