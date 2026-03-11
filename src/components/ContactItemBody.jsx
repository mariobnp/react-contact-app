// import PropTypes from "prop-types";
import { validateProps } from "../utils/validation";
import Joi from "joi";

const contactItemBodyPropsSchema = Joi.object({
  name: Joi.string().required(),
  tag: Joi.string().required(),
});

function ContactItemBody(props) {
  const { name, tag } = validateProps(
    contactItemBodyPropsSchema,
    props,
    "ContactItemBody",
  );

  return (
    <div className="contact-item__body pl-2 ml-2 border-l-4 border-gray-400 flex-1">
      <h3 className="contact-item__title py-1">{name}</h3>
      <p className="contact-item__username font-light">@{tag}</p>
    </div>
  );
}

// ContactItemBody.propTypes = {
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
// }

export default ContactItemBody;
