import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        getContactEdit: state.contacts.getContactEdit,
        errorContactEdit: state.contacts.errorContactEdit
    }
}


const EditContactComponent = (props) => {
    return (
        <div style={{ margin: '50px 0px' }}>
            <div className="container">
                <h3>Edit Contact Form</h3>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label for="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="ex: Dadang" value={props.getContactEdit.firstName} />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="ex: Konelo" value={props.getContactEdit.lastName} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label for="age">Age</label>
                            <input type="text" className="form-control" id="age" placeholder="ex: 21" value={props.getContactEdit.age} />
                        </div>                        
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                    <button type="submit" className="btn btn-outline-dark" style={{ marginLeft: '10px' }}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, null)(EditContactComponent);
