import React, {Component} from 'react';
import Hello from './components/hello';

class App extends Component {
	handleClick() {
		window.alert('clicked');
	}
	render() {
		return (
			<Hello onClick={this.handleClick}></Hello>
		);
	}
};

React.render(<App></App>, document.getElementById('app'));
