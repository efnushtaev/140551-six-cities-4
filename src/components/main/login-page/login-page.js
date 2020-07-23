import React from 'react';
import {authOperations} from '../../../redux/reducers/auth-reducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {getAuthStatus} from '../../../redux/selectors/auth-selectors';

const LoginPage = (props) => {
  const [email, setEmail] = React.useState(``);
  const [password, setPassword] = React.useState(``);

  let emailInput = React.createRef();
  let passwordInput = React.createRef();
  let submitForm = React.createRef();

  const handleEmailChange = () => {
    const emailCurrent = emailInput.current.value;
    setEmail(emailCurrent)
  }
  const handlePasswordChange = () => {
    const passwordCurrent = passwordInput.current.value;
    setPassword(passwordCurrent)
  }
  const handleSubmitClick = (e) => {
    e.preventDefault();
    props.updateAuthStatus(email, password);
  }

  return !props.isAuth
    ? <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form className="login__form form" action="#" method="post">
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input ref={emailInput} onChange={handleEmailChange} className="login__input form__input" type="email" name="email" placeholder="Email" required="required"/>
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input ref={passwordInput} onChange={handlePasswordChange} className="login__input form__input" type="password" name="password" placeholder="Password" required="required"/>
          </div>
          <button ref={submitForm} onClick={(e) => handleSubmitClick(e)} className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
      </section>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </section>
    </div>
    : <Redirect to={`/`}/>
}

let mapDispatchToProps = (dispatch) => ({
  updateAuthStatus(email, password) {
    dispatch(authOperations.updateAuthStatus(email, password))
  }
})

let mapStateToProps = (state) => ({
  isAuth: getAuthStatus(state)
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    React.memo)(LoginPage);
