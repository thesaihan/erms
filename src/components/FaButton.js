import React from 'react';
import './FaButton.css';

const FaButton = (props) => {

    const classes = ['FaButton','fas d-inline-block erms-hover'];
    classes.push('fa-'+props.faName);
    if(props.floatDir)
        classes.push('float-'+props.floatDir);

    return (
        <i className={classes.join(' ')}></i>
    );
};

export default FaButton;