import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import ContactValidation from '../validations/ContactValidation';
import BackComponent from '../components/BackComponent';
import './FormComponent.css';

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning },
}) => (
        <div>
            <label for={input}>{label}</label>
            <input {...input} type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly} className="form-control" style={{ borderRadius: '15px' }}/>
            {touched &&
                ((error && <p style={{ color: "red" }}>{error}</p>) ||
                    (warning && <p style={{ color: "brown" }}>{warning}</p>))}
        </div>
    );

const mapStateToProps = (state) => {
    return {
        initialValues: {
            firstName: state.contacts.getContactEdit.firstName,
            lastName: state.contacts.getContactEdit.lastName,
            age: state.contacts.getContactEdit.age,            
        }
    }
}


class FormComponent extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="form-group col-md-6" style={{ backgroundColor: 'white', padding: '50px', borderRadius: '30px', boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.05)' }}>
                <h5 style={{marginBottom: '15px'}}>{this.props.title}</h5>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Field
                                type="text"
                                name="firstName"
                                component={renderField}
                                label="First Name"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <Field
                                type="text"
                                name="lastName"
                                component={renderField}
                                label="Last Name"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <Field
                                type="text"
                                name="age"
                                component={renderField}
                                label="Age"
                            />
                        </div>
                    </div>
                    <div className="form-row btn-form">
                        <button type="submit" className="btn btn-primary" disabled={this.props.submitting} style={{ borderRadius: '20px' }}>{this.props.btnName}</button>
                        <BackComponent />
                    </div>
                </div>
            </form>
        )
    }
}

FormComponent = reduxForm({
    form: 'formCreateContact',
    validate: ContactValidation,
    enableReinitialize: true,
})(FormComponent)
export default connect(mapStateToProps, null)(FormComponent);
