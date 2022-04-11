import React, { Component } from 'react';
import '../styles/style.css';

class General extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: {
                name: '',
                email: '',
                number: '',
            },
            errors: {
                name: '',
                email: '',
                number: '',
            },
            addBtn: true,
            form: false,
            display: false,
        };

        this.showInfo = this.showInfo.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
        this.showForm = this.showForm.bind(this);
        this.createForm = this.createForm.bind(this);
        this.createInfo = this.createInfo.bind(this);
    }

    handleValidation() {
        let isValid = true;
        let errors = {};
        const { name, email, number } = this.state.info;
        // Name
        if (!name) {
            isValid = false;
            errors['name'] = 'Please enter your name';
        }
        // Email
        if (!email) {
            isValid = false;
            errors['email'] = 'Please enter your email';
        }
        if (!email.includes('@')) {
            isValid = false;
            errors['email'] =
                'Please enter a valid email address (i.e. test@example.com)';
        }
        // Number
        if (!number) {
            isValid = false;
            errors['number'] = 'Please enter your phone number';
        }
        if (number.length !== 10) {
            isValid = false;
            errors['number'] =
                'Please enter a 10-digit phone number (i.e. 1234567890)';
        }

        this.setState({
            errors: errors,
        });

        return isValid;
    }

    showAddBtn() {
        return (
            <button
                onClick={(e) => {
                    this.setState({
                        addBtn: false,
                    });
                    this.showForm(e);
                }}
            >
                Add General Information
            </button>
        );
    }

    showInfo(e) {
        e.preventDefault();
        this.setState({
            form: false,
            display: true,
        });
    }

    createInfo() {
        const { name, email, number } = this.state.info;
        return (
            <div className="info-container">
                <p className="info-item">
                    <b>Name: </b>
                    {name}
                </p>
                <p className="info-item">
                    <b>Email: </b>
                    {email}
                </p>
                <p className="info-item">
                    <b>Phone Number: </b>
                    {number}
                </p>
                <button
                    onClick={(e) => {
                        this.setState({
                            display: false,
                        });
                        this.showForm(e);
                    }}
                >
                    Edit
                </button>
            </div>
        );
    }

    updateInfo(key, e) {
        this.setState((prevState) => {
            let info = { ...prevState.info };
            info[key] = e.target.value;
            return { info };
        });
    }

    showForm() {
        this.setState({
            form: true,
        });
    }

    // Refactor so that when editing, bring up entirely new form (maybe)
    hideForm() {
        // function that does the following: hides form; display info if there is info to display; display addBtn if there is no info
        this.setState({
            form: false,
        });
        if (!this.state.display) {
            this.setState({
                addBtn: true,
            });
        }
    }

    createForm() {
        const { name, email, number } = this.state.info;

        return (
            <div>
                <form className="info-container">
                    <div className="info-item">
                        <label htmlFor="name">
                            <b>Name</b>
                        </label>
                        <input
                            type="text"
                            id="name"
                            onChange={(e) => this.updateInfo('name', e)}
                            value={name}
                        ></input>
                        <span className="error-text">
                            {this.state.errors.name}
                        </span>
                    </div>
                    <div className="info-item">
                        <label htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => this.updateInfo('email', e)}
                            value={email}
                        ></input>
                        <span className="error-text">
                            {this.state.errors.email}
                        </span>
                    </div>
                    <div className="info-item">
                        <label htmlFor="phone-number">
                            <b>Phone Number</b>
                        </label>
                        <input
                            type="text"
                            id="phone-number"
                            onChange={(e) => this.updateInfo('number', e)}
                            value={number}
                        ></input>
                        <p className="error-text">{this.state.errors.number}</p>
                    </div>
                    <div className="info-btns">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                if (this.handleValidation()) {
                                    this.showInfo(e);
                                }
                            }}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.addBtn ? this.showAddBtn() : null}
                {this.state.form ? this.createForm() : null}
                {this.state.display ? this.createInfo() : null}
            </div>
        );
    }
}

export default General;
