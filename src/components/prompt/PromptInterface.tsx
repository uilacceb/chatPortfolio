import { useState } from "react";
import { commands, type LinkItem } from "../data/commands";
import ResultPanel from "./ResultPanel";
import PromptInputBox from "./PromptInputBox";
import "../../CSS/promptInterface.css";

type HistoryItem = {
  command: string;
  title?: string;
  content: string;
  type?: "text" | "commands" | "links";
  links?: LinkItem[];
};

const PromptInterface = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const rawCommand = input.trim();
    const command = rawCommand.toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (command === "cmds") {
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          command: rawCommand,
          title: "Available Commands",
          content: "",
          type: "commands",
        },
      ]);

      setInput("");
      return;
    }

    const result = commands.find(
      (item) => item.title === command.toLowerCase(),
    );

    if (result) {
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          command: rawCommand,
          content: result.content,
          type: result.type || "text",
          links: result.links,
        },
      ]);
    } else {
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          command: rawCommand,
          title: "Command Not Found",
          content: `Sorry, I don't recognize "${rawCommand}". Type "cmds" to see available commands.`,
          type: "text",
        },
      ]);
    }

    setInput("");
  };

  return (
    <section
      className="prompt-interface"
      aria-label="Prompt portfolio interface"
    >
      <ResultPanel history={history} commands={commands} />

      <PromptInputBox
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default PromptInterface;
