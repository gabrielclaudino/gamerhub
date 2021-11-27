import PropTypes from 'prop-types';

const Button = ({ type, children, disabled, onClick, name }) => {
  return (
    <button
      name={name}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className='flex items-center justify-center w-full py-3 text-sm text-white transition duration-150 ease-in bg-purple-500 focus:outline-none sm:text-base hover:bg-purple-600 '
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
