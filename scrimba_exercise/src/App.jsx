import React, { Component } from 'react';
import Acounter from './Acounter';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mount: true,
			ignoreProp: 0,
			seed: 40,
		};

		this.mountCounter = () => this.setState({ mount: true });
		this.unmountCounter = () => this.setState({ mount: false });
		this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
		this.seedGenerator = () => this.setState({ seed: Number.parseInt(Math.random() * 100) });
	}
	render() {
		return (
			<div>
				<button
					disabled={this.state.mount}
					onClick={this.mountCounter}
				>
					{' '}
					Mount Counter
				</button>
				<button
					disabled={!this.state.mount}
					onClick={this.unmountCounter}
				>
					Unmount Counter
				</button>
				<button onClick={this.ignoreProp}>ignore prop</button>
				<button onClick={this.seedGenerator}>Generate Seed</button>
				{this.state.mount && (
					<Acounter
						ignoreProp={this.state.ignoreProp}
						seed={this.state.seed}
					/>
				)}
			</div>
		);
	}
}

export default App;
