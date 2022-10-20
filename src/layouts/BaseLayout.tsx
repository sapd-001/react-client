import React from 'react';

interface IBaseLayoutProps {
	children: React.ReactElement;
}

const BaseLayout = ({ children }: IBaseLayoutProps) => {
	return (
		<div className="">
			<div className="max-w-[1560px] mx-auto">{children}</div>;
		</div>
	);
};

export default BaseLayout;
