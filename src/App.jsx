import React, { Component } from 'react';
import Clock from './Clock';
import './App.css'
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			deadline: 'May 20, 2017',
			newDeadline: ''
		}
	}

	changeDeadline(){
		this.setState({
			deadline: this.state.newDeadline
		});		
	}

    render() {
    	return (
			 <Row className="show-grid">
				<Col md={6} mdPush={6}>
					<div className="App">
						<div className="App-title">
							Countdown to {this.state.deadline}
						</div>
						<Clock 
							deadline={this.state.deadline}
						/>
						<Form inline>
							<FormControl 
								className="Deadline-input" placeholder='new date' 
								onChange={event => this.setState({newDeadline: event.target.value})}
							/>
							<Button onClick={() => this.changeDeadline()}>
								Submit
							</Button>
						</Form>
					</div>		
				</Col>
				<Col md={6} mdPull={6}>
					<div className="App">
						<div className="App-title">
							Stopwatch to {this.state.deadline}
						</div>
						<Clock 
							deadline={this.state.deadline}
						/>
						<Form inline>
							<FormControl 
								className="Deadline-input" placeholder='new date' 
								onChange={event => this.setState({newDeadline: event.target.value})}
							/>
							<Button onClick={() => this.changeDeadline()}>
								Submit
							</Button>
						</Form>
					</div>		
				</Col>
			</Row>			
    	)        
    }
}
 
export default App;