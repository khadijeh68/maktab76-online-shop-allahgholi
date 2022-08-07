import { wordsToNumber } from "@persian-tools/persian-tools";

import "./App.css";

function App() {
  return wordsToNumber("منفی سه هزارمین", { digits: "fa" }); // "-۳۰۰۰"

}

export default App;
