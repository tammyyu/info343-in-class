import React from 'react';

export default class extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {		
		var weather;

		if (this.state.weather) {
			weather = this.state.weather.results.map(w => <Weather key={w.id} weather={w} />);
		}
		
		return (
			<p className="center-text">{}</p>
		);
	}
}
		