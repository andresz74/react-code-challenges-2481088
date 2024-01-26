import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState([]);

  const isEmail = email => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm;
    return emailRegex.test(email);
  };
  const pwdLongEnough = pwd => pwd.length > 8;
  const matchPasswords = (pwd1, pwd2) => pwd1 === pwd2;

  const ErrorsMessage = () => {
    return errors.map((error, index) => <p key={index}>{error}</p>);
  };

  const handleSubmit = e => {
    const errorsMsg = [];
    e.preventDefault();
    if (!isEmail(email)) errorsMsg.push(`It's not an email.`);
    if (!pwdLongEnough(password))
      errorsMsg.push(`Password must be at least 8 characters`);
    if (!matchPasswords(password, passwordConfirm))
      errorsMsg.push(`Passwords don't match`);
    setErrors(errorsMsg);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <input type="submit" value="Submit" />
      <ErrorsMessage />
    </form>
  );
}
