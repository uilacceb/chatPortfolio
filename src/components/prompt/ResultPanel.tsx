import { useEffect, useRef } from "react";
import type { CommandItem, LinkItem } from "../data/commands";

type HistoryItem = {
  command: string;
  title?: string;
  content: string;
  type?: "text" | "commands" | "links";
  links?: LinkItem[];
};

type ResultPanelProps = {
  history: HistoryItem[];
  commands: CommandItem[];
};

const ResultPanel = ({ history, commands }: ResultPanelProps) => {
  const resultPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (resultPanelRef.current) {
      resultPanelRef.current.scrollTo({
        top: resultPanelRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  return (
    <section
      className="result-panel"
      aria-label="Portfolio result panel"
      ref={resultPanelRef}
    >
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
                      <li className="prompt-list" key={commandItem.title}>
                        <span className="prompt-symbol">&gt;</span>
                        <span>
                          <span className="prompt-list-title">
                            {commandItem.title}
                          </span>{" "}
                          - {commandItem.about}
                        </span>
                      </li>
                    ))}

                    <li className="prompt-list">
                      <span className="prompt-symbol">&gt;</span>
                      <span>
                        <span className="prompt-list-title">clear</span> - Clear
                        command history
                      </span>
                    </li>
                  </ul>
                </div>
              ) : item.type === "links" ? (
                <div className="contact-links">
                  <p>{item.content}</p>

                  {item.links?.map((link) => (
                    <div className="contact-link-div" key={link.label}>
                      {link.imageSrc && (
                        <img
                          src={link.imageSrc}
                          alt={`${link.label} logo`}
                          width={25}
                          height={25}
                        />
                      )}

                      <a href={link.href} target="_blank">
                        {link.label}
                      </a>
                    </div>
                  ))}
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
