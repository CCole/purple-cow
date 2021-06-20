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
          overflow: scroll;
          font-family: 'Montserrat', sans-serif;
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
export default StateWindow;
