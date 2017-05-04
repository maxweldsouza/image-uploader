import React from 'react';
import PropTypes from 'prop-types';

export default function Alert({ showing, type, message }) {
    if (showing) {
        return (
            <div className={`alert alert-${type}`} role="alert">
                {message}
            </div>
        );
    }
    return null;
}

Alert.propTypes = {
    showing: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string,
};

Alert.defaultProps = {
    message: '',
};
