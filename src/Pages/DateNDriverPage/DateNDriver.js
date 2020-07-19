import React,{ Component } from 'react';
import './dateNDriver.css';
import '../RequestRidePage/requestRide.css';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import Text from '../../components/TextComponent/Text';
import DatePicker from '../../components/DatePickerComponent/DatePicker';
import TimePicker from '../../components/TimePickerComponent/TimePicker';
import CarAndPerson from '../../components/CarAndPerson/Cap';
import WideButton from '../../components/WideButtonComponent/WideButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import _ from 'underscore';

let driverSelection = false;
const dsToTrue = () => {
	driverSelection = true;
}

const getAllRides = async (destination) => {
	let trips = [];
	try {
		// getting alll trips satisfying location
		let res = await axios.get('https://kptyn.herokuapp.com/trips/');
		// filtering the results to get only dates on and before the selected date
		// res.filter(
		// 	(res) =>
		// 		res.date <= window.$dateValue &&
		// 		res.time <= window.$timeValue
		// );
		// first sorting by time, then by date
		// res.data = _.sortBy(res, 'time');
		res.data = _.sortBy(res, 'date');
		console.log(window.$dateValue)
		return res;
	} catch (err) {
		console.log(`Axios request failed at getAllRides: ${err}`);
	}
};
// Then using map on the CarAndPerson and passing each data from the array
class DateNDriver extends Component {
	render() {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 2 }}
			>
				<FloatingLogo />
				<div className="middle">
					<Link to="/RequestRide">
						<button className="rect1"></button>
					</Link>
					<button className="rect1"></button>
				</div>
				<section className="middle">
					<div className="realign">
						<Text text="Select pickup date" />
					</div>
					<div className="goUPP">
						<DatePicker />
					</div>
					<br />
					<div className="realign">
						<Text text="Select pickup time" />
					</div>
					<div className="goUPP">
						<TimePicker />
						<h1 onClick={getAllRides}>test</h1>
					</div>
					<br />
					<div className="realign" id="sdr">
						<Text text="Select driver" />
					</div>
				</section>
				<div className="goUPP">
					<div id="cnd" onClick={dsToTrue}>
						<CarAndPerson />
					</div>
				</div>
				<section className="middle">
					<Link to={driverSelection?"/PickupDetails":"/dateAndTime"}>
						{' '}
						<WideButton buttonTitle="Next" />{' '}
					</Link>

					<br />
				</section>
			</motion.div>
		);
	}
}

export default DateNDriver;
