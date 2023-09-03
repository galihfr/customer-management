import React from 'react';
import './CardComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';/*koneksi yang digunakan untuk memanggil state pada reducers*/
import swal from 'sweetalert';
import { deleteDataContactPermanent } from '../actions/contactAction';

const mapStateToProps = (state) => {
    return {
        getContactList: state.contacts.getContactList,
        errorContactList: state.contacts.errorContactList
    }
}

const handleDelete = (dispatch, id) => {
    swal({
        title: "Are you sure delete a contact ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                dispatch(deleteDataContactPermanent(id))
                swal("Contact has been deleted!", {
                    icon: "success",
                });
            }
            setTimeout(() => window.location.reload(), 2000)
        });
}

const CardComponent = (props) => {

    return (
        <>
            <div className="container MainCard">            

                <Link to={"/create"}>
                    <button className="btnNewContact"><FontAwesomeIcon icon={faPlusCircle} /> New Contact</button>
                </Link>
                {props.getContactList ? (
                    props.getContactList.map((value, row) => {
                        return (
                            <div className="containerCard" key={row}>
                                <div className="contentLeft">
                                    <div>
                                        <img className="imgProfile" src={require('../assets/images/avatar.jpg')} alt="profile" />
                                    </div>
                                    <div className="nameAge">
                                        <h5>{value.firstName} {value.lastName}</h5>
                                        <p>{value.age} Tahun</p>
                                    </div>
                                </div>
                                <div className="contentRight">
                                    <Link to={"edit/" + value.id} className="btn btn-warning" style={{ borderRadius: '20px' }}>
                                            Edit
                                    </Link>
                                    <button className="btn btn-outline-warning deleteRight" style={{ borderRadius: '20px' }} onClick={() => handleDelete(props.dispatch, value.id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })) : (
                        <div className="text-center">
                            {props.errorContactList ? (<h1>{props.errorContactList}</h1>) : (
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )}
                        </div>
                    )}
            </div>
        </>
    )
}

export default connect(mapStateToProps, null)(CardComponent);
