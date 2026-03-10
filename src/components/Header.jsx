

import{ FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

import profileImage from "../assets/profile.jpg";

function Header({ name, title }) {
  return (
    <div className="bg-linear-to-r from-gray-500 to-gray-700 h-56 flex flex-col relative justify-center items-center">

      <img
        src={profileImage}
        alt="Profile"
        className="h-28 w-28 rounded-full border-4 border-white object-cover -bottom-14"
      />

      <div className="flexx flex-col gap-30 -bottom-24 text-center">
        <h1 className="text-xl font-bold text-black">{name}</h1>
        <p className="text-gray-500">{title}</p>
      </div>
        <div className="flex justify-center gap-4 mt-64 absolute" >
          <div className="p-4 bg-white rounded-full">
            <FaPhoneAlt className="text-black" />
          </div>
          <div className="">
            <FaEnvelope className="text-blue-600" />
          </div>
          <div>
            <FaMapMarkerAlt className="text-blue-600" />
          </div>
        </div>
    </div>
  );
}

export default Header;