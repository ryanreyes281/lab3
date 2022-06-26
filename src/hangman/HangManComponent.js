import React from "react";
import "./styles.css";
import { KeyBoardComponent } from "./components/KeyBoardComponent";
import { DrawComponent } from "./components/DrawComponent";
const HangManComponent = () => {
return (
<div>
<h1>HangMan</h1>
<hr />
<DrawComponent/>
<KeyBoardComponent/>
</div>
);
};
export default HangManComponent;