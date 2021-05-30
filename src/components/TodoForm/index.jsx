import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit : PropTypes.func
};

TodoForm.defaultProps = {
    onSubmit : null
}

function TodoForm(props) {
    const {onSubmit} = props;
    const [val, setVal] = useState('');

    function handleValChange(e){
        console.log(e.target.value);
        setVal(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!onSubmit) return;

        const formValues = {
            title: val
        };
        onSubmit(formValues);
        setVal('');
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input type = 'text' value = {val} onChange = {handleValChange}/>
            </form>
        </div>
    );
}

export default TodoForm;