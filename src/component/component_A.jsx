import React from 'react';
import { Contact } from '../class/contact.class';
import ComponentB from './component_B';

const ComponentA = () => {

    const contact = new Contact('Jon','Doe','jondoe@emial.com',false);

    return(
        <div>
            <ComponentB props={contact}/>
        </div>
    )
}

export default ComponentA;