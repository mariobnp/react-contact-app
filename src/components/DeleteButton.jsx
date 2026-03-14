// import PropTypes from "prop-types";
import Joi from "joi";
import { validateProps } from "../utils/validation";
import { FiDelete } from "react-icons/fi";

const deleteButtonPropsSchema = Joi.object({
  id: Joi.number().required(),
  onDelete: Joi.func().required(),
});

function DeleteButton(props) {
  const { id, onDelete } = validateProps(
    deleteButtonPropsSchema,
    props,
    "DeleteButton",
  );

  return (
    <button
      className="contact-item__delete p-2 text-[18px] bg-orange-600 text-white border-0 rounded cursor-pointer"
      onClick={() => onDelete(id)}
    >
      <FiDelete />
    </button>
  );
}

export default DeleteButton;
