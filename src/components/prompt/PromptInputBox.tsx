type PromptInputBoxProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
};
export const placeholderText = "Try: about, skill, project...";

const PromptInputBox = ({
  input,
  setInput,
  handleSubmit,
}: PromptInputBoxProps) => {
  return (
    <form onSubmit={handleSubmit} className="prompt-form">
      <label htmlFor="command-input" />
      <input
        id="command-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholderText}
      />

      <button
        id="submit-button"
        type="submit"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default PromptInputBox;
