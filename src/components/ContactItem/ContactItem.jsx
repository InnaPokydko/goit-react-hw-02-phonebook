import PropTypes from 'prop-types';

 const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li>
      {name}: {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default ContactItem;

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};