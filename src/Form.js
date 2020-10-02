import React from "react";
import useForm from "./useForm";
import validate from './LoginFormValidationRules';

const Form = () => {

  const { values, errors, handleChange, handleSubmit } = useForm(login, validate);

  function login() {
    alert(JSON.stringify(values));
  }

  return (
    <form onSubmit={handleSubmit} className="form" action="#" method="POST" noValidate>
      <input
        autoComplete="off"
        type="text"
        placeholder="Your Name"
        name="name"
        onChange={handleChange}
        value={values.name || ''}
        required
      />
      <input 
        className={`input ${errors.email && 'is-danger'}`}
        type="email" 
        name="email"
        placeholder="Your Email" 
        onChange={handleChange}
        value={values.email || ''}
        required
      />
      {errors.email && (
        <p className="help is-danger">{errors.email}</p>
  )}
      <input 
        className={`input ${errors.phone && 'invalid'}`}
        type="tel" 
        name="phone"
        placeholder="Phone" 
        onChange={handleChange}
        value={values.phone || ''}
        required
      />
      {errors.phone && (
        <p className="help is-danger">{errors.phone}</p>
  )}
      <button type="submit">Download eBook Now</button>
      <p className="form__notice">
        * We don’t share your personal info with anyone. Check out our Policy
        for more information.
      </p>
    </form>
  );
};

export default Form;
