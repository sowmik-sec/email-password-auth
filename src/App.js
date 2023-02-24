import "./App.css";
import { getAuth } from "firebase/auth";
import { app } from "./firebase/firebase.init";

const auth = getAuth(app);

function App() {
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };
  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input
          onBlur={handleEmailBlur}
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />
        <br />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
