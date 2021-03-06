import PropTypes from "prop-types";

const StateWindow = ({ state }) => {
  return (
    <>
      <div className="state-window">
        <table>
          <thead className="header">
            <tr>
              <td>ID</td>
              <td>TYPE</td>
              <td>TIMESTAMP</td>
              <td>COUNT</td>
              <td>VALID</td>
            </tr>
          </thead>
          <tbody>
            {Object.values(state).map((entry) => {
              return (
                <tr key={entry.id}>
                  <td>{entry.id}</td>
                  <td>{entry.type}</td>
                  <td>{entry.timeStamp}</td>
                  <td>{entry.count}</td>
                  <td>{entry.isValid.toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .state-window {
          height: 150px;
          border-color: #ffffff;
          border-style: dashed solid;
          border-width: .95rem;
          overflow-y: scroll;
          font-family: "Montserrat", sans-serif;
        }
        .header {
          font-weight: 700;
        }
        thead,
        td {
          text-align: center;
        }
      `}</style>
    </>
  );
};
StateWindow.propTypes = {
  state: PropTypes.object,
};
export default StateWindow;
