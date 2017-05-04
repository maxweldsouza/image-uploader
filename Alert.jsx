import React from 'react';

export default function Alert({ showing, type, message }) {
    if (showing) {
        return (
            <div className={`alert alert-${type}`} role="alert">
                {message}
            </div>
        );
    }
}
