import StepTwo from "./StepTwo";

const Form = ({
  usernameValue,
  setUsername,
  emailValue,
  setEmail,
  passwordValue,
  setPassword,
  confirmpasswordValue,
  setConfirmpassword,
  setformulaire,
}) => {
  const handleSubmit = (event) => {
    confirmpasswordValue &&
    passwordValue &&
    confirmpasswordValue === passwordValue
      ? (setformulaire = true)
      : alert("Vos deux mots de passe ne sont pas identiques");
    console.log(setformulaire);
    event.preventDefault();
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          value={usernameValue}
          type="text"
          placeholder="John Doe"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <p>Email</p>
        <input
          value={emailValue}
          type="email"
          placeholder="johndoe@lereacteur.io"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <p>Password</p>
        <input
          value={passwordValue}
          type="password"
          placeholder="leReacTeuR2022"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <p>Confirm your password</p>
        <input
          value={confirmpasswordValue}
          type="password"
          placeholder="leReacTeuR2022"
          onChange={(event) => {
            setConfirmpassword(event.target.value);
          }}
        />
        <br />
        <input className="register" type="submit" value={"Register"} />
      </form>
      {setformulaire === true ? <StepTwo /> : ""}
    </div>
  );
};

export default Form;
