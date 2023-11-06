import { Component } from "react";
import "./CopyToClipboard.css";

export class CopyToClipboard extends Component {
  textArea: any;

  copyClipBoard() {
    this.textArea.select();
    document.execCommand("copy");
  }

  render() {
    return (
      <div id="CopyToClipboard">
        <input
          readOnly
          value={localStorage.getItem("token") ?? "Попробуй перезайти!"}
          type="text"
          ref={(textarea) => (this.textArea = textarea)}
        />
        <button onClick={this.copyClipBoard}>Копировать</button>
      </div>
    );
  }
}
