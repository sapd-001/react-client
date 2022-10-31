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

const AdminEvaluators = () => {
	return (
		<div>
			<h1>Evaliuators</h1>
			<div>
				<Table columns={cols} rows={[]}/>
			</div>
		</div>
	);
};

export default AdminEvaluators;