import ContactItem from "./ContactItem";
import { contactData } from "../data";

function ContactList() {
  return (
    <div className=" ">

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