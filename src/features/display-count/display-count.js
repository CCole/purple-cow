import PropTypes from "prop-types";

const DisplayCount = ({ count }) => {
  return (
    <>
      <div className="display">
        <span className="display__count">{count}</span>
      </div>
      <style jsx>{`
        .display {
          padding: 1rem;
        }
        .display__count {
          font-family: "Montserrat Alternates", sans-serif;
          font-weight: 700;
          font-size: 10rem;
          color: #5c3977;
          text-shadow: 1px 1px #ffffff, 
                2px 2px #ffffff, 
                3px 3px #ffffff,
                4px 4px #ffffff,
                5px 5px #ffffff,
                6px 6px #ffffff,
                7px 7px #ffffff;
        }
      `}</style>
    </>
  );
};
DisplayCount.propTypes = {
  count: PropTypes.number,
};

export default DisplayCount;
