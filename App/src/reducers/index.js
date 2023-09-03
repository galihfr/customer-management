import { combineReducers } from 'redux';
import contacts from './contacts';/*state contact*/
import { reducer as formReducer } from 'redux-form';/*proes instalasi redux-form*/

export default combineReducers({
    contacts, /*ini nanti yang digunakan untuk menampilkan data di component*/
    form: formReducer,
})