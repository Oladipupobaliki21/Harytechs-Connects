import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";

function Header({ name, title }) {
  return (
    <div className="relative bg-gradient-to-r from-gray-600 to-gray-800 h-44 sm:h-52 flex flex-col justify-start items-center pt-6">

      {/* Profile image – centered, overlapping the bottom of the banner */}
      <img
        src={profileImage}
        alt="Profile"
        className="absolute -bottom-14 h-24 w-24 sm:h-28 sm:w-28 rounded-full border-4 border-white object-cover shadow-xl"
      />
    </div>
  );
}

export default Header;