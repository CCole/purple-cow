import PropTypes from 'prop-types';

const PrimaryButton = ({ action }) => {
  return (
    <>
      <button
        className="btn btn--primary"
        onClick={() => {
          action();
        }}
      >
        Count!
      </button>
      <style jsx>{`
        .btn {
          padding: 1rem;
        }
        .btn--primary {
          font-family: 'Montserrat Alternates', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          width: 300px;
          background: #78638f;
          color: #ffffff;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};
PrimaryButton.propTypes = {
  action: PropTypes.func,
};
export default PrimaryButton;
