import { Link } from "react-router-dom";
import InputField from "./InputField";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Sign Up with</h2>
      <SocialLogin />

      <p className="separator"><span>or</span></p>

      <form className="login-form">
        <InputField type="text" placeholder="Full Name" icon="" />
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />
        <InputField type="password" placeholder="Confirm Password" icon="lock" />

        <button type="submit" className="login-button">Sign Up</button>
      </form>

      <p className="signup-prompt">
        Already have an account? <Link to="/" className="signup-link">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;
