// import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt,  } from "react-icons/fa";
// function ContactItem ({label, value, icon}){

//     const icons = {
//         phone: <FaPhoneAlt className="text-blue-600"/>,
//         email: <FaEnvelope className="text-blue-600"/>,
//         location:<FaMapMarkerAlt className="text-blue-600"/>,
        
//     }


//     return(
//         <div className=" bg-white rounded-lg flex  gap-4 mt-4 p-4 items-center ">
//            {icons [icon]}
//         <div>
//             <p className="text-sm text-gray-500">{label}</p>
//             <p className="font-medium ">{value}</p>
//         </div>
//         </div>
//     )
// }
// export default ContactItem;

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaBriefcase, FaGithub, FaLinkedin } from "react-icons/fa";

function ContactItem({ label, value, icon }) {

  const icons = {
    phone: <FaPhoneAlt className="text-blue-600" />,
    email: <FaEnvelope className="text-blue-600" />,
    location:<FaMapMarkerAlt className="text-blue-600" />,
    website: <FaGlobe className="text-blue-600" />,
    company: <FaBriefcase className="text-blue-600" />,
   
  };

  return (
    <div className="bg-white  rounded-lg flex gap-4 mt-4 p-4 items-center hover:shadow-md hover:bg-blue-100 transition cursor-pointer">

      {icons[icon]}

      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>

    </div>
  );
}

export default ContactItem;