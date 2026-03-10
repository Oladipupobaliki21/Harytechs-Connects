import { FaArrowRight } from "react-icons/fa6";

function SocialLink({ name, link, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-4 bg-gray-50 rounded-xl p-4
                 border border-transparent hover:border-blue-200 hover:bg-blue-50
                 hover:shadow-md active:scale-[0.98] transition-all duration-200 group"
    >
  
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white group-hover:bg-blue-100 rounded-lg shadow-sm transition-colors">
          {icon}
        </div>
        <span className="text-sm font-semibold text-gray-700">{name}</span>
      </div>

   
      <FaArrowRight
        className="text-gray-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0"
        size={13}
      />
    </a>
  );
}

export default SocialLink;