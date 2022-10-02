import React from 'react';

interface IBaseLayoutProps {
  children: React.ReactElement;
}

const BaseLayout = ({ children }: IBaseLayoutProps) => {
	return <div>{children}</div>;
};

export default BaseLayout;
