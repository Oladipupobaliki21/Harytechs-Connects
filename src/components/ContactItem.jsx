import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt } from "react-icons/fa";
function ContactItem ({lael, value, icon}){

    const icons = {
        phone: <FaPhoneAlt className="text-blue-600"/>,
        email: <FaEnvelope className="text-blue-600"/>,
        location: <FaMapMarkerAlt className="text-blue-600"/>

    }




    return(
        <div className="flex justify-center gap-4 mt-4">
            <div className="bg-gray-600 rounded-full p-3">
                {/* <FaPhoneAlt/> */}
            </div>
            <div className="bg-gray-600 rounded-full p-3">
                {/* <FaEnvelope/> */}
            </div>
            <div className="bg-gray-600 rounded-full p-3">
                {/* <FaMapMarkerAlt/> */}
            </div>

        </div>
    )
}
export default ContactItem;