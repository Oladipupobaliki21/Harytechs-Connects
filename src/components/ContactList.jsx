import ContactItem from "./ContactItem";
import { contactData } from "../data";

function ContactList() {
  return (
    <div className=" w-2/4 shadow-md rounded-lg mx-auto">

      {contactData.map((contact, index) => (
        <ContactItem
          key={index}
          label={contact.label}
          value={contact.value}
          icon={contact.icon}
        />
      ))}

    </div>
  );
}

export default ContactList;