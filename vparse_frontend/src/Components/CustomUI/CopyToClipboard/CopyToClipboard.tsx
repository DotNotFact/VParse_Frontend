import { useEffect, useRef } from "react";
import "./CopyToClipboard.css";

export const CopyToClipboard = () => {
  const textAreaRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  const copyClipBoard = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <div id="CopyToClipboard">
      <input
        readOnly
        value={"В ближайшем обновлении :з"}
        type="text"
        ref={textAreaRef}
      />
      <button onClick={copyClipBoard}>Копировать</button>
    </div>
  );
};
