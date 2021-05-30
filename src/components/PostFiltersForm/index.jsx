import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit:null,
};

function PostFiltersForm(props) {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);


    function handleSearchTermChange(e){
        setSearchTerm(e.target.value);
        const value = e.target.value;

        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value, 
            };
            if(onSubmit) {
                onSubmit(formValues);
            }
        }, 300);

        
    }
    return (
        <div>
            <input type = "text" value = {searchTerm} onChange ={handleSearchTermChange} />
        </div>
    );
}

export default PostFiltersForm;