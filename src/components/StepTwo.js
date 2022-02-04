import Footer from "./Footer";

const StepTwo = ({ usernameValue, emailValue, passwordValue }) => {
  return (
    <div>
      <h1 className="title">Results</h1>
      <div className="box">
        <p>Name : {usernameValue}</p>
        <p>Email : {emailValue}</p>
        <p>Password : {passwordValue}</p>
      </div>
      <button className="register">Edit your information</button>
      <Footer />
    </div>
  );
};

export default StepTwo;
