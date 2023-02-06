import styled from "styled-components";
import LoadingContext from "../../configs/contexts/LoadingContext";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import completeLogo from "../../assets/completeLogo.png"

export default function SignUp() {
  const [formData, setFormData] = useState({email:"", name:"", password:"", confirmPassword:""});
  const { isLoading, setisLoading } = useContext(LoadingContext);
  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();
    //JWT
    navigate("/home");
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Wrapper>
      <Logo>
      <img src={completeLogo} alt={"Logo"}/>
      </Logo>
      <FormContainer>
        <form onSubmit={handleSignIn}>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={formData.email}
            disabled={isLoading}
            onChange={handleInputChange}
            required
          />
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            disabled={isLoading}
            onChange={handleInputChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            disabled={isLoading}
            onChange={handleInputChange}
            required
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            disabled={isLoading}
            onChange={handleInputChange}
            required
          />
          <button type="submit">
            {isLoading ? (
              <div>
                <ThreeDots color="#ffffff" />
              </div>
            ) : (
              <p>Login</p>
            )}
          </button>
        </form>
      </FormContainer>
      <Link to={"/"}>
        <h2>Already registered? Sign-in!</h2>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #040404;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  a{
    text-decoration: none;
    margin-top: 10px;
    font-size: 15px;
    color: #ffffff;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
  h1 {
    font-family: "Russo One", sans-serif;
    color: #ffffff;
    font-size: 75px;
  }
  h2 {
    font-family: "Russo One", sans-serif;
    color: #ffffff;
    font-size: 15px;
  }
`;

const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    font-weight: 400;
    border: none;
    font-size: 15px;
    width: 325px;
    height: 50px;
    border-radius: 5px;
    color: #000000;
    background-color: #ffffff;
    margin-bottom: 10px;
    padding-left: 15px;
  }
  button {
      text-align: center;
      width: 200px;
      height: 35px;
      border-radius: 5px;
      border: none;
      background-color: #ffffff;
      font-size: 20px;
      cursor: pointer;
    }
`;
