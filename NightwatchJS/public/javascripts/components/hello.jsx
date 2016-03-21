import React, {Component} from 'react';

export default class Hello extends Component {
	render() {
		return (
			<h1 onClick={this.props.onClick}>Hello World</h1>
		);
	}
};
