import "./_loginPage.scss";

//* Importing images
import iconLogo from "../../../images/Logo.png";

//* Importing material UI
import { TextField } from "@mui/material";

//* Importing custom Hooks
import { useLoginPage } from "./useLoginPage";

export const LoginPage = () => {

  //* Importing elements
  const { 
    stylesTextfield, 
    formState,
    errorLogin, 
    onInputChange,
    onClickLogIn 
  } = useLoginPage();

  return (
    <div className="loginPage">

      <div className="loginPage__container">

        <div className="loginPage__container__logoTitle">

          <img src={ iconLogo } alt="" />
          <p>
            Email system for the TeachFellow company
          </p>

        </div>

        <div className="loginPage__container__inputs">

          <TextField
            label="Email"
            type="email"
            name="email"
            fullWidth
            value={ formState.email }
            onChange={ onInputChange }
            sx={ stylesTextfield }
          />

          <TextField
            label="Password"
            type="password"
            name="password"
            fullWidth
            value={ formState.password }
            onChange={ onInputChange }
            sx={ stylesTextfield }
          />
        
        </div>

        <div className="loginPage__container__errorMessage" 
          style={{ display: errorLogin ? '' : 'none' }}
        >
          <p>
            Sorry, we don't recognize the email or password 
          </p>
        </div>

        <button onClick={ onClickLogIn }>
          Log In
        </button>

      </div>

    </div>
  );
}
