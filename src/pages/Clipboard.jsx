import React from "react";
import "./CLipboard.css";

function Clipboard() {
  const handleCopy = () => {
    alert("Text copied to clipboard!");
  };
  const handlePaste = () => {
    alert("Text pasted from clipboard!");
    document.writeln("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  };
  const handleCut = () => {
    alert("Text cut to clipboard!");
  };

  return (
    <div className="Clipboard">
      <h1>Clipboard Page</h1>
      <p onCopy={handleCopy}>
        Clipboard functionality will be implemented here.
      </p>
      <button className="btn" onClick={handlePaste}>
        Paste Text
      </button>
      <br />
      <p onClick={handleCut}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        natus sint eius omnis, reiciendis iure.
      </p>
      <input className="inp" type="text" onClick={handlePaste} />
    </div>
  );
}

export default Clipboard;
