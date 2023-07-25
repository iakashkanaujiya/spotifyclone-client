import React from 'react'
import Icon from '../icons'

export default function NavButton({ property }) {

    function navigate(property) {
        if (property === "Back") {
            window.history.back();
        } else {
            window.history.forward();
        }
    };

    return (
        <button
            onClick={(e) => { navigate(property) }}
            style={{cursor: "pointer"}}
            className={property === 'Back' ? 'navButton no-outline' : 'navButton mediaNone no-outline'}>
            <Icon name={property} />
        </button>
    );
}
