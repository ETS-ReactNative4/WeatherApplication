import React from "react";


class Weather extends React.Component {

	render() {

	return (
		
		<div> 
		
		{this.props.longitude && this.props.latitude && <p> Coordinates: { this.props.longitude}, {this.props.latitude} </p>}
		{this.props.city && this.props.country && <p> City and Country: { this.props.city }, { this.props.country } </p>}
		{this.props.temperature && <p> Temperature: { this.props.temperature} </p>}
		{this.props.humidity && <p> Humidity: { this.props.humidity }% </p>}
		{this.props.description && <p> Weather Conditions: { this.props.description } </p>}
		{this.props.windSpeed && <p> Wind Speed: { this.props.windSpeed}m/s </p>}
		
		 </div>
		
		

		);

	}
	

};

export default Weather;