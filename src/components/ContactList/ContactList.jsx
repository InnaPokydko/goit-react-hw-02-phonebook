import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      <ContactItem contacts={contacts} onDelete={onDelete} />
    </ul>
  );
};

export default ContactList;

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
