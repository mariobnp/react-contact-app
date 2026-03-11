import ContactItem from "./ContactItem";
// import PropTypes from "prop-types";
import Joi from "joi";
import { validateProps } from "../utils/validation";

const contactListPropsSchema = Joi.object({
  contacts: Joi.array()
    .items(
      Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required(),
        tag: Joi.string().required(),
        imageUrl: Joi.string().required(),
      }),
    )
    .required(),
  onDelete: Joi.func().required(),
});

function ContactList(props) {
  const { contacts, onDelete } = validateProps(
    contactListPropsSchema,
    props,
    "ContactList",
  );

  if(contacts.length === 0){
    return <p>Tidak ada kontak yang ditermukan</p>
  }

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact}
        />
      ))}
    </div>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onDelete: PropTypes.func.isRequired,
// }

export default ContactList;
