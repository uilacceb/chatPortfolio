type CommandItem = {
  title: string;
  about: string;
  content: string;
};

type HistoryItem = {
  command: string;
  content: string;
  type?: "text" | "commands";
};

type ResultPanelProps = {
  history: HistoryItem[];
  commands: CommandItem[];
};

const ResultPanel = ({ history, commands }: ResultPanelProps) => {
  return (
    <section className="result-panel" aria-label="Portfolio result panel">
      {history.length === 0 ? (
        <div className="empty-state">
          <h2>Hi, welcome!</h2>
          <p>
            Type "<span style={{ fontWeight: "bold" }}>cmds</span>" to see all
            available commands.
          </p>
        </div>
      ) : (
        history.map((item, index) => (
          <div className="history-item" key={`${item.command}-${index}`}>
            <div className="user-prompt">
              <span className="prompt-symbol">&gt;</span>
              <p>{item.command}</p>
            </div>

            <div className="result-content">
              {item.type === "commands" ? (
                <div className="command-suggestions">
                  <ul>
                    {commands.map((commandItem) => (
                      <div className="prompt-list" key={commandItem.title}>
                        <span className="prompt-symbol">&gt;</span>
                        <li>
                          <span className="prompt-list-title">
                            {commandItem.title}
                          </span>{" "}
                          - {commandItem.about}
                        </li>
                      </div>
                    ))}

                    <div className="prompt-list">
                      <span className="prompt-symbol">&gt;</span>
                      <li>
                        <span className="prompt-list-title">clear</span> - Clear
                        command history
                      </li>
                    </div>
                  </ul>
                </div>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default ResultPanel;
