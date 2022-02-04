import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [formulaire, setformulaire] = useState(false);

  return (
    <div className="body">
      <h1 className="title">Create account</h1>
      <Form
        setUsername={setUsername}
        usernameValue={username}
        setEmail={setEmail}
        emailValue={email}
        setPassword={setPassword}
        passwordValue={password}
        setConfirmpassword={setConfirmpassword}
        confirmpasswordValue={confirmpassword}
        formulaireValue={formulaire}
        setformulaire={setformulaire}
      ></Form>
      <Footer />
    </div>
  );
}

export default App;
