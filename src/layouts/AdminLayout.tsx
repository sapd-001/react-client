import AdminSidebar from '../components/AdminSidebar';
import LayoutFooter from '../components/LayoutFooter';
import LayoutHeader from '../components/LayoutHeader';
import React from 'react';

type AdminLayoutProps = {
	children: JSX.Element;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
	return (
		<div className="flex">
			<AdminSidebar />
			<div className=''>
				<LayoutHeader />
				<div className="min-h-screen">{children}</div>
				<LayoutFooter />
			</div>
		</div>
	);
};

export default AdminLayout;
