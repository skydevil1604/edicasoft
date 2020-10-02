export default function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.phone) {
      errors.phone = 'Phone is required';
    } else if (isNaN(values.phone)) {
      errors.phone = 'phone must be a number';
    }
    return errors;
  };