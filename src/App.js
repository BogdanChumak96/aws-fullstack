import './App.css';
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <div className="App">
       Hello
    </div>

  );
}

export default withAuthenticator(App);
