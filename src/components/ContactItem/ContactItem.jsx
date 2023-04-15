import PropTypes from 'prop-types';

 const ContactItem = ({contacts, onDelete }) => {
  return contacts.map(({ id, name, number }) => {
  return (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={() => onDelete(id, name)}>Delete</button>
    </li>
  );
});
};

export default ContactItem;

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};