import React, { Component } from "react";
import FormComponent from "../../components/FormComponent";
import { connect } from "react-redux";
import { postContactCreate } from "../../actions/contactAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    postContactCreate: state.contacts.postContactCreate,
    errorPostContactCreate: state.contacts.errorPostContactCreate,
  };
};

class AddContact extends Component {
  handleSubmit(data) {
    this.props.dispatch(postContactCreate(data));
  }

  render() {
    if (this.props.postContactCreate || this.props.errorPostContactCreate) {
      if (this.props.errorPostContactCreate) {
        swal("Failed!", this.props.errorPostContactCreate, "error");
      } else {
        swal(
          "Contact Created !",
          "Full Name : " +
            this.props.postContactCreate.firstName +
            " " +
            this.props.postContactCreate.lastName,
          "success"
        );
        setTimeout(() => (window.location.href = "/"), 2000);
      }
    }

    return (
      <div style={{ margin: "50px 0px" }}>
        <div className="container">
          <FormComponent
            title="New Contact Form"
            btnName="Submit"
            onSubmit={(data) => this.handleSubmit(data)}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(AddContact);
