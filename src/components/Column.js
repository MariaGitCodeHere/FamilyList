import React from 'react';
import Modal from './Modal.js';
import '../App.css';


class Column extends React.Component {
	state = { show: false};

	showModal = () => this.setState({ show: true});
	hideModal = () => this.setState({ show: false});
	


	render () {
		return (
			<div className="column">
				<Modal show={this.state.show} handleClose={this.hideModal} transferElements={this.props.transferElements}>
				</Modal>
				<h1>{this.props.title}</h1>
				<ul>
					<li><button className="plus" onClick={this.showModal}>Add+</button></li>
					{this.props.list}
				</ul>
			</div>
		)
	}
}


export default Column;