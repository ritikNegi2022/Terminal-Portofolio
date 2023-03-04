import { Ps1 } from "./Ps1";

export const History = ({ history }) => {
  return (
    <>
      {history.map((entry, index) => (
        <div key={entry.command + index}>
          <div className="ps1">
            <div className="ps1Child">
              <Ps1 />
            </div>
            <div className="prevCommand">{entry.command}</div>
          </div>
          <p
            className="historyDisplay"
            style={{ lineHeight: "normal" }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};

export default History