import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaBriefcase } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const icons = {
  phone: <FaPhoneAlt className="text-blue-600 shrink-0" size={16} />,
  email: <FaEnvelope className="text-blue-600 shrink-0" size={16} />,
  location: <FaMapMarkerAlt className="text-blue-600 shrink-0" size={16} />,
  website: <FaGlobe className="text-blue-600 shrink-0" size={16} />,
  company: <FaBriefcase className="text-blue-600 shrink-0" size={16} />,
};

function ContactItem({ label, value, icon, href }) {
  return (
    <a
      href={href}
      target={href && !href.startsWith("mailto") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-4 bg-white rounded-xl mt-3 p-4
                 border border-transparent hover:border-blue-200 hover:bg-blue-50
                 hover:shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer group"
    >
      {/* Icon + text */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="p-2 bg-blue-50 group-hover:bg-blue-100 rounded-lg transition-colors">
          {icons[icon]}
        </div>
        <div className="min-w-0">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
          <p className="text-sm font-semibold text-gray-700 truncate">{value}</p>
        </div>
      </div>

      {/* Arrow */}
      <FaArrowRight
        className="text-gray-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0"
        size={13}
      />
    </a>
  );
}

export default ContactItem;