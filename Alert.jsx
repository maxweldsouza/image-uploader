import React from 'react';

export default function Alert({ showing, type }) {
    if (showing) {
        return (
            <div className={`alert alert-${type}`} role="alert">
                {this.state.error}
            </div>
        );
    }
}
