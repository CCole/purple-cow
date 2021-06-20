import { number } from 'prop-types';

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
          font-family: 'Montserrat Alternates', sans-serif;
          font-weight: 700;
          font-size: 10rem;
          color: #5c3977;
        }
      `}</style>
    </>
  );
};
DisplayCount.propTypes = {
  count: number,
};

export default DisplayCount;
