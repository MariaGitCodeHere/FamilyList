import React from 'react';
import Column from './Column.js';
import './App.css';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lastNames: props.surnames,
			selectedSurname: null,
			selectedArea: null
		};
		this.sortList = function (propertyName) {
			let x = function (a, b) {
			  if (a[propertyName] > b[propertyName]) {
			    return 1;
			  }
			  if (a[propertyName] < b[propertyName]) {
			    return -1;
			  }
			  return 0;
			}
			return x
		}
		this.transferElements = (fields) => {
    	 	this.setState({
	        	lastNames: [
	                ...this.state.lastNames,
	                {
	                  	lastName: fields.lastName,
	                  	areas: [
		                  	{
		                  		areaName: fields.areaName,
		                  		contacts: [
		                  			{
		                  				personName: fields.personName,
		                  				emailLink: fields.fbLink,
		                  				okLink: fields.emailLink,
		                  				fbLink: fields.okLink
		                  			}
		                  		]
		                  	}
		                ]
	               }
	            ]
	     	});
		}
	}


	render() {
		let columnAreasList = null;
		let columnContactList = null;

		if (this.state.selectedSurname) {
			const allAreas = this.state.selectedSurname.areas.sort(this.sortList('areaName'))
			const listAreas = allAreas.map(element => (
					<li
						key={element.areaName}
						onClick={() => this.openContactList(element)}
					>
					{element.areaName}
					</li>
			))
			columnAreasList = (
				<Column title="Districts" list={listAreas} transferElements={this.transferElements} />
			)
		}

		if (this.state.selectedArea) {
			const allContacts = this.state.selectedArea.contacts.sort(this.sortList('personName'))
			const listContacts = allContacts.map(element => (
				<li
					key={element.personName}
				>
				{element.personName}
					<span>
						<a 
							href={element.emailLink} 
							className="link-hovered"
							target="_blank" rel="noopener noreferrer">email
						</a>
					</span>
					<span>
						<a 
							href={element.fbLink} 
							className="link-hovered"
							target="_blank" rel="noopener noreferrer">fb
						</a>
					</span>
					<span>
						<a 
							href={element.okLink} 
							className="link-hovered"
							target="_blank" rel="noopener noreferrer">ok
						</a>
					</span>
				</li>
			))
			columnContactList = (
				<Column title="Contacts" list={listContacts} transferElements={this.transferElements} />
			)
		}


		const allLastNames = this.state.lastNames.sort(this.sortList('lastName'))
		const listSurnames = allLastNames.map(element => (
			<li 
				key={element.lastName}
				onClick={() => this.openAreaList(element)}
			>
			{element.lastName}
			</li>
		))
		return (
			<div>
				<Column title="Surnames" list={listSurnames} transferElements={this.transferElements} />
				{columnAreasList}
				{columnContactList}
			</div>
		)


	}
	openAreaList = selectedSurname => {
		this.setState({
			selectedSurname: selectedSurname,
			selectedArea: null
		})
	}
	openContactList = selectedArea => {
		this.setState({
			selectedArea: selectedArea,
		})

	}
}

export default App;