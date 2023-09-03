import React, { Component } from 'react';
import { getContactEdit, putContactUpdate } from '../../actions/contactAction';
import { connect } from 'react-redux';
import FormComponent from '../../components/FormComponent';
import swal from 'sweetalert';

const mapStateToProps = (state) => {
    return {
        postContactCreate: state.contacts.postContactCreate,
        errorPostContactCreate: state.contacts.errorPostContactCreate
    }
}


class UpdateContact extends Component {
    componentDidMount() {
        this.props.dispatch(getContactEdit(this.props.match.params.id));
    }

    handleSubmit(data) {
        this.props.dispatch(putContactUpdate(data, this.props.match.params.id));
    }


    render() {
        if (this.props.postContactCreate || this.props.errorPostContactCreate) {
            if (this.props.errorPostContactCreate) {
                swal("Failed!", this.props.errorPostContactCreate, "error");
            } else {
                swal("Contact Updated !", "Full Name : " + this.props.postContactCreate.firstName + " " + this.props.postContactCreate.lastName, "success");
                setTimeout(() => window.location.href = "/", 2000)
            }
        }

        return (
            <div style={{ margin: '50px 0px' }}>
                <div className="container">
                    <FormComponent title="Updated Contact Form" btnName="Update" onSubmit={(data) => this.handleSubmit(data)} />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(UpdateContact);