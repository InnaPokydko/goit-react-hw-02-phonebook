import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';

class ContactForm extends Component {
  state = {
    name: '',
    id: '',
  };

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    const { name, number } = this.state;

    return (
      <Formik initialValues={{ name, number }} onSubmit={this.handleSubmit}>
        <Form>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <ErrorMessage name="number" component="div" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};



//   // Відповідає за оновлення стану
//   handleChange = e => {
//     this.setState({ name: e.target.value });
//   };

//   // Викликається під час відправлення форми
//   handleSubmit = evt => {
//     evt.preventDefault();
//     console.log(`Signed up as: ${this.state.name}`);

//     // Проп, який передається формі для виклику під час сабміту
//     this.props.onSubmit({ ...this.state });
//   };

//   render() {
//     const { name } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>

//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }


