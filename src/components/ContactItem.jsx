import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from "./DeleteButton";
// import PropTypes from "prop-types";
import { validateProps } from "../utils/validation";
import Joi from "joi";

const contactItemPropsSchema = Joi.object({
  id: Joi.number().required(),
  imageUrl: Joi.string().required(),
  name: Joi.string().required(),
  tag: Joi.string().required(),
  onDelete: Joi.func().required(),
});

function ContactItem(props) {
  const { id, imageUrl, name, tag, onDelete } = validateProps(
    contactItemPropsSchema,
    props,
    "ContactItem",
  );

  return (
    <div className="contact-item flex items-center my-6 border border-dashed border-black p-4 rounded-lg">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

// ContactItem.propTypes = {
//   imageUrl: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   onDelete: PropTypes.func.isRequired,
// }

export default ContactItem;
