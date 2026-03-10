import ContactItem from "./ContactItem";
import { contactData } from "../data";

function ContactList() {
  return (
    <div className="w-full space-y-1 rounded-xl overflow-hidden">
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