import React, { Component } from 'react';
import '../styles/style.css';

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addBtn: true,
            form: false,
            displayInfo: false,
            info: {
                school: '',
                degree: '',
                gradYear: '',
                gpa: '',
            },
            errors: {
                school: '',
                degree: '',
                gradYear: '',
                gpa: '',
            },
        };

        this.displayForm = this.displayForm.bind(this);
        this.editInfo = this.editInfo.bind(this);
    }

    handleValidation() {
        let isValid = true;
        let errors = {};
        const { school, degree, gradYear, gpa } = this.state.info;
        // School
        if (!school) {
            isValid = false;
            errors['school'] = 'Please enter a school';
        }
        // Degree
        if (!degree) {
            isValid = false;
            errors['degree'] = 'Please enter a degree';
        }
        // Grad Year
        if (!gradYear) {
            isValid = false;
            errors['gradYear'] = 'Please enter a graduation year';
        }
        if (!/^[0-9]{4,4}$/.test(gradYear)) {
            isValid = false;
            errors['gradYear'] =
                'Please enter a valid graduation year (i.e. 2020)';
        }
        if (parseInt(gradYear) < 1900) {
            isValid = false;
            errors['gradYear'] = 'Please enter a graduation year after 1899';
        }
        // GPA
        if (!gpa) {
            isValid = false;
            errors['gpa'] = 'Please enter a GPA';
        }

        this.setState({ errors: errors });

        return isValid;
    }

    showAddBtn() {
        return <button onClick={this.displayForm}>Add Education</button>;
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
        const { school, degree, gradYear, gpa } = this.state.info;
        return (
            <div>
                <form className="info-container">
                    <div className="info-item">
                        <label htmlFor="school">
                            <b>School</b>
                        </label>
                        <input
                            onChange={(e) =>
                                this.handleInputChange('school', e)
                            }
                            type="text"
                            id="school"
                            value={school}
                        ></input>
                        <p className="error-text">{this.state.errors.school}</p>
                    </div>
                    <div className="info-item">
                        <label htmlFor="degree">
                            <b>Degree</b>
                        </label>
                        <input
                            onChange={(e) => {
                                this.handleInputChange('degree', e);
                            }}
                            type="text"
                            id="degree"
                            value={degree}
                        ></input>
                        <p className="error-text">{this.state.errors.degree}</p>
                    </div>
                    <div className="info-item">
                        <label htmlFor="grad-year">
                            <b>Graduation Year</b>
                        </label>
                        <input
                            onChange={(e) => {
                                this.handleInputChange('gradYear', e);
                            }}
                            type="text"
                            id="grad-year"
                            value={gradYear}
                        ></input>
                        <p className="error-text">
                            {this.state.errors.gradYear}
                        </p>
                    </div>
                    <div className="info-item">
                        <label>
                            <b>GPA</b>
                        </label>
                        <input
                            onChange={(e) => {
                                this.handleInputChange('gpa', e);
                            }}
                            type="text"
                            id="gpa"
                            value={gpa}
                        ></input>
                        <p className="error-text">{this.state.errors.gpa}</p>
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
        const { school, degree, gradYear, gpa } = this.state.info;

        return (
            <div className="info-container">
                <p className="info-item">
                    <b>School:</b>
                    {school}
                </p>
                <p className="info-item">
                    <b>Degree:</b>
                    {degree}
                </p>
                <p className="info-item">
                    <b>Graduation Year:</b>
                    {gradYear}
                </p>
                <p className="info-item">
                    <b>GPA:</b>
                    {gpa}
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

export default Education;
