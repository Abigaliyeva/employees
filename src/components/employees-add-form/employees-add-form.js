import {Component} from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    
    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const{onAdd} = this.props;
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form action="" className="add-form d-flex"
                onSubmit={(e) => onAdd(name, salary, e)}>
                    <input type="text" 
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onChangeValue}/>
                    <input type="number" 
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onChangeValue}/>
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;