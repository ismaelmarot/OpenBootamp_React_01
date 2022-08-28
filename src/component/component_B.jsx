import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../class/contact.class';

const ComponentB = ({props}) => {
    return(
        <div>
            <h2>
                First Name: { props.getFirstName() }
            </h2>
            <h2>
                Last Name: { props.getLastName() }
            </h2>
            <h2>
                Email: { props.getEmail() }
            </h2>
            <h3>
                Conected: { props.getConected() ? 'Online':'Offline' }
            </h3>
        </div>
    )
};

ComponentB.propType = {
    props: PropTypes.instanceOf(Contact)
};

export default ComponentB;