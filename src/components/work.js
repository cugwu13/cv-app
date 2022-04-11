import React, { Component } from 'react';
import '../styles/style.css';

class Work extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addBtn: true,
            form: false,
            displayInfo: false,
            info: {
                company: '',
                title: '',
                details: '',
                years: '',
            },
            errors: {
                company: '',
                title: '',
                details: '',
                years: '',
            },
        };

        this.displayForm = this.displayForm.bind(this);
        this.editInfo = this.editInfo.bind(this);
    }

    handleValidation() {
        let isValid = true;
        let errors = {};
        const { company, title, details, years } = this.state.info;
        // Company
        if (!company) {
            isValid = false;
            errors['company'] = 'Please enter a company';
        }
        // Title
        if (!title) {
            isValid = false;
            errors['title'] = 'Please enter a title';
        }
        // Details
        if (!details) {
            isValid = false;
            errors['details'] = 'Please enter a details about your position';
        }
        // GPA
        if (!years) {
            isValid = false;
            errors['years'] =
                'Please enter years of experience for this position';
        }

        this.setState({ errors: errors });

        return isValid;
    }

    showAddBtn() {
        return <button onClick={this.displayForm}>Add Work Experience</button>;
    }

    displayForm() {
        this.setState({
            addBtn: false,
            form: true,
        });
    }

    displayInfo() {
        this.setState({
            addBtn: true,
            displayInfo: true,
            form: false,
        });
    }

    editInfo() {
        this.setState({
            addBtn: false,
            form: true,
            displayInfo: false,
        });
    }

    handleInputChange(key, e) {
        let info = this.state.info;
        info[key] = e.target.value;
        this.setState({ info });
    }

    get form() {
        const { company, title, details, years } = this.state.info;
        return (
            <div>
                <form className="info-container">
                    <div className="info-item">
                        <label htmlFor="company">
                            <b>Company</b>
                        </label>
                        <input
                            onChange={(e) =>
                                this.handleInputChange('company', e)
                            }
                            type="text"
                            id="company"
                            value={company}
                        ></input>
                        <p className="error-text">
                            {this.state.errors.company}
                        </p>
                    </div>
                    <div className="info-item">
                        <label htmlFor="title">
                            <b>TItle</b>
                        </label>
                        <input
                            onChange={(e) => {
                                this.handleInputChange('title', e);
                            }}
                            type="text"
                            id="title"
                            value={title}
                        ></input>
                        <p className="error-text">{this.state.errors.title}</p>
                    </div>
                    <div className="info-item">
                        <label htmlFor="details">
                            <b>Position Details</b>
                        </label>
                        <input
                            onChange={(e) => {
                                this.handleInputChange('details', e);
                            }}
                            type="text"
                            id="details"
                            value={details}
                        ></input>
                        <p className="error-text">
                            {this.state.errors.details}
                        </p>
                    </div>
                    <div className="info-item">
                        <label>
                            <b>Years of Experience</b>
                        </label>
                        <input
                            onChange={(e) => {
                                this.handleInputChange('years', e);
                            }}
                            type="text"
                            id="years"
                            value={years}
                        ></input>
                        <p className="error-text">{this.state.errors.years}</p>
                    </div>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            if (this.handleValidation()) {
                                this.displayInfo();
                            }
                        }}
                    >
                        Save
                    </button>
                </form>
            </div>
        );
    }
    get info() {
        const { company, title, details, years } = this.state.info;

        return (
            <div className="info-container">
                <p className="info-item">
                    <b>Company:</b>
                    {company}
                </p>
                <p className="info-item">
                    <b>Title:</b>
                    {title}
                </p>
                <p className="info-item">
                    <b>Position Details:</b>
                    {details}
                </p>
                <p className="info-item">
                    <b>Years of Experience:</b>
                    {years}
                </p>
                <button onClick={this.editInfo}>Edit</button>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.form ? this.form : null}
                {this.state.displayInfo ? this.info : null}
                {this.state.addBtn ? this.showAddBtn() : null}
            </div>
        );
    }
}

export default Work;
