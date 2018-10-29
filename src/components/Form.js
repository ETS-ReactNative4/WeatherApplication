import React from "react";


class Form extends React.Component {

	render() {

	return (
		
		<form onSubmit={this.props.getWeather}>
		<input type='text' name="city" placeholder="City"/>
		<input type='text' name="country" placeholder="Country"/>
		<p> <button> Get Weather </button> </p>
		</form>

		);

	}
	

};

export default Form;