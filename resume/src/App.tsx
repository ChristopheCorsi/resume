import "@blueprintjs/core/lib/css/blueprint.css";
import React from "react";
import "./shared.scss";
import ResumeLoader from "./containers/ResumeLoader";

// Export to pdf will be within done through:
// https://www.npmjs.com/package/react-to-pdf
function App() {
  let classes: string[] = ["App", "bp3-dark", "fullscreen", "bp3-ui-text"];
  return (
    // Todo: eventually add here an input to take external json files
    <div className={classes.join(" ")}>
      <ResumeLoader jsonPath="resume.json"/>
    </div>
  );
}

export default App;
