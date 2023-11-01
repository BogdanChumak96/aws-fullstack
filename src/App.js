import './App.css';
import LoginForm from "./LoginForm";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
       Hello
        {/*<LoginForm />*/}
    </div>

  );
}

export default withAuthenticator(App);
