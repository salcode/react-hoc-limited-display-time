
import PropTypes from 'prop-types';

export default function Notification({message}) {
  return (
    <h2
      className="notification"
    >
      {message}
    </h2>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
};

Notification.defaultProps = {
  message: '',
};
