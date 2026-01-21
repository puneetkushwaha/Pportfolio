import React, { Component } from 'react';
import Clock from '../util components/clock';
import Status from '../util components/status';
import StatusCard from '../util components/status_card';
import Weather from '../util components/weather';

export default class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			status_card: false
		};
	}

	render() {
		return (
			<div className="main-navbar-vp absolute top-0 right-0 w-screen shadow-md flex flex-nowrap justify-between items-center bg-ub-grey text-ubt-grey text-sm select-none z-50">
				<div className="flex-1"></div>
				<div
					tabIndex="0"
					className={
						'px-2 flex items-center text-xs md:text-sm outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 space-x-2'
					}
				>
					<Weather />
					<div className="w-px h-3 bg-gray-600 mx-1 opacity-50 hidden md:block"></div>
					<Clock />
				</div>
				<div className="flex-1 flex justify-end">
					<div
						id="status-bar"
						tabIndex="0"
						onFocus={() => {
							this.setState({ status_card: true });
						}}
						// removed onBlur from here
						className={
							'relative pr-3 pl-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 '
						}
					>
						<Status />
						<StatusCard
							shutDown={this.props.shutDown}
							lockScreen={this.props.lockScreen}
							visible={this.state.status_card}
							toggleVisible={() => {
								// this prop is used in statusCard component in handleClickOutside callback using react-onclickoutside
								this.setState({ status_card: false });
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}
