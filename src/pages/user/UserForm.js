import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { submitUserAction } from "../../actions/UserAction";

const UserFormFunction = props => {
    const { handleSubmit } = props
    const submit = (data, submitUserAction) => {
        submitUserAction(data)
    }
    return (
        <form onSubmit={ handleSubmit ((fields) => submit(fields, submitUserAction))}>
            <label>
                Name
            </label>
            <Field
                type="text"
                component="input"
                name="name"
            />
            <label>
                Email
            </label>
            <Field
                type="email"
                component="input"
                name="email"
            />
            <button type="submit">Enviar</button>
        </form>
    );
}
const UserForm = (reduxForm({
    form: 'formUser'
}))(UserFormFunction)
const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(UserForm)