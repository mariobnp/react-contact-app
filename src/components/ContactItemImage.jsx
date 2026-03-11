// import PropTypes from "prop-types";
import { validateProps } from "../utils/validation";
import Joi from "joi";

const contactItemImagePropsSchema = Joi.object({
  imageUrl: Joi.string().required(),
});

function ContactItemImage(props) {
  const { imageUrl } = validateProps(
    contactItemImagePropsSchema,
    props,
    "ContactItemImage",
  );
  return (
    <div className="contact-item__image w-16 rounded-full">
      <img src={imageUrl} alt="contact-avatar" />
    </div>
  );
}

// ContactItemImage.propTypes = {
//   imageUrl: PropTypes.string.isRequired,
// };

export default ContactItemImage;
