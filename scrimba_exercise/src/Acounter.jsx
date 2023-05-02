import React, { Component } from 'react';

const ErrorComponent = () => <div>{props.ignoreCase}</div>;
class Acounter extends Component {
	constructor(props) {
		console.log('constructor');
		super(props);
		this.state = {
			counter: 0,
		};
		this.increment = () => {
			this.setState({ counter: this.state.counter + 1 });
		};

		this.decrement = () => {
			this.setState({ counter: this.state.counter - 1 });
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (props.seed && state.seed !== props.seed) {
			return {
				seed: props.seed,
				counter: props.seed,
			};
		}
		return null;
	}

	componentDidMount() {
		console.log('component did mount');
		console.log('-------------------');
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('component did update');
		console.log('-------------------');
	}

	componentWillUnmount() {
		console.log('componenet will unmount');
		console.log('-------------------');
	}

	componentDidCatch(error, info) {
		console.log('component did catch');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('should component update - DO NOT RENDER');
		if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
			return false;
		}
		console.log('should component update - render');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('get snapshot before update');
		return null;
	}

	render() {
		console.log('render');
		return (
			<>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Decrement</button>
				<div className="counter">Counter: {this.state.counter}</div>
				<ErrorComponent />
			</>
		);
	}
}

export default Acounter;
