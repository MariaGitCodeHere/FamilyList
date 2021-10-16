import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


const Modal = ({ handleClose, show, children, transferElements }) => {
	const showHideClassName = show ? 'modal display-block' : 'modal  display-none';


	const fields = {}

	const addElement = event => {
		transferElements(fields)
	}

	const saveField = (attrName) => {
		return (event) => {
			fields[attrName] = event.target.value
		}
	}


	return (
		<div className={showHideClassName}>
			<div className="modalBox">
		      <div className="for-form">
		        <form onSubmit={ event => { handleClose();event.preventDefault() } }>
		          <div>
		            <label  
		            	id="lastName-label" 
		            	htmlFor="lastName">
		            		Фамилия предка
		            </label>
		            <input 
		            	name="lastName" 
		            	type="text" 
		            	className="lastName"
		            	placeholder="пример: Романов (муж.р.)"
		            	required
		            	onChange={saveField('lastName')}
		            />
		          </div>
		          <div>
		            <label  
		            	id="areaName-label" 
		            	htmlFor="areaName">
		            		Губерния и уезд, где жил предок
		            </label>
		            <input 
		            	name="areaName" 
		            	type="text" 
		            	className="areaName" 
		            	placeholder="пример: Енисейская, Абанский"
		            	required 
		            	onChange={saveField('areaName')}
		            />
		          </div>
		          <div>
		            <label  
		            	id="personName-label" 
		            	htmlFor="personName">
		            		Как вас зовут?
		            </label>
		            <input 
		            	name="personName" 
		            	type="text" 
		            	className="personName" 
		            	placeholder="пример: Иван Романов"
		            	required 
		            	onChange={saveField('personName')}
		            />
		          </div>
		          <div>
		            <label  
		            	id="links-label">
		            		Как с вами связаться?
		            </label>
		            <input 
		            	name="emailLink" 
		            	type="text" 
		            	className="contact" 
		            	placeholder="эл.почта"
		            	required 
		            	onChange={saveField('emailLink')}
		            />
		            <input 
		            	name="okLnk" 
		            	type="text" 
		            	className="contact" 
		            	placeholder="ссылка на профиль в одноклассниках"
		            	onChange={saveField('okLnk')}
		            />
		            <input 
		            	name="fbLink" 
		            	type="text" 
		            	className="contact" 
		            	placeholder="ссылка на профиль в фейсбуке"
		            	onChange={saveField('fbLink')}
		            />
		          </div>
		          <input
					type="submit"
					id="submit"
					onClick={addElement}
					placeholder="Add"
				  />
		          {children}
		          <button 
		          	id="back" 
		          	onClick={handleClose}
		          >Назад
		          </button>
		        </form>
		      </div>
		    </div>
		</div>
	);
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Modal />, container);


export default Modal;