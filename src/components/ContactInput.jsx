import { useState } from "react";
import Joi from "joi";
import { validateProps } from "../utils/validation";

const contactInputPropsSchema = Joi.object({
  addContact: Joi.func().required(),
});

function ContactInput(props) {
  const { addContact } = validateProps(
    contactInputPropsSchema,
    props,
    "ContactInput",
  );
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  function onNameChangeEventHandler(event) {
    setName(event.target.value);
  }

  function onTagChangeEventHandler(event) {
    setTag(event.target.value);
  }

  function onSubmitEventHandler(event) {
    event.preventDefault();
    addContact({ name, tag });

    setName("");
    setTag("");
  }

  return (
    <form
      action=""
      onSubmit={onSubmitEventHandler}
      className="flex flex-col justify-center items-center gap-4 contact-input border border-dashed border-black bg-gray-200 p-4 my-[14px] mb-8 rounded-lg"
    >
      <input
        className="w-full p-3 border border-gray-400 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
        type="text"
        placeholder="Nama"
        value={name}
        onChange={onNameChangeEventHandler}
      />
      <input
        className="w-full p-3 border border-gray-400 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
        type="text"
        placeholder="Tag"
        value={tag}
        onChange={onTagChangeEventHandler}
      />
      <button
        type="submit"
        className="w-full p-3 border border-gray-400 rounded-md bg-white hover:bg-gray-300 transition"
      >
        Tambah
      </button>
    </form>
  );
}

export default ContactInput;
