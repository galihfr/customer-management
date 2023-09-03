import React, { Component } from "react";
import CardComponent from "../../components/CardComponent";
import { connect } from "react-redux";
import { getContactList, deleteContactData } from "../../actions/contactAction";

class HomePage extends Component {
  componentDidMount() {
    /*fungsi dispatch() untuk menginjek atau menghubungkan data dari API KE REDUCER*/
    this.props.dispatch(
      getContactList()
    ); /*getContactList() didapat dari fungsi yang dibuat pada proses pemanggilan API dengan AXIOS*/
    this.props.dispatch(deleteContactData());
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardComponent />
      </div>
    );
  }
}

export default connect()(HomePage);
