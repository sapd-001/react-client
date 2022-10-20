import React from 'react';
import bg from './../assets/login-bg.jpg';

const Homepage = () => {
	return (
		<div className="flex items-center justify-center h-screen flex-col gap-10 relative">
			<img src={bg} alt="" className="absolute w-full h-full -z-[1]" />
			<form
				action=""
				className="w-full max-w-[30rem] p-4 md:p-12 rounded-md shadow-md flex flex-col bg-slate-100 gap-4"
			>
				<h1 className="text-2xl font-bold text-center my-6">
					Welcome to Astra Employee Appraisal system
				</h1>
				<div className="flex flex-col">
					<label htmlFor="email">Email address</label>
					<input
						type="text"
						className="w-full border-none outline-none bg-slate-200 rounded-md p-2 text-md"
						placeholder="Email address "
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="w-full border-none outline-none bg-slate-200 rounded-md p-2 text-md"
						placeholder="Password"
					/>
				</div>
				<div className="flex flex-row-reverse justify-end gap-2 items-center">
					<label htmlFor="remeber">Rember me</label>
					<input
						name="remember"
						type="checkbox"
						className="border-none h-4 outline-none bg-slate-200 rounded-md p-2 text-md"
						placeholder="Password"
					/>
				</div>
				<button className="w-full bg-blue-600 py-2 rounded font-bold text-lg text-white">
					Sign in
				</button>
			</form>
		</div>
	);
};

export default Homepage;
