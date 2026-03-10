import SocialLink from "./SocialLink";
import { socialData } from "../data";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const icons = {
  github: <FaGithub className="text-gray-800" size={18} />,
  linkedln: <FaLinkedin className="text-blue-600" size={18} />,
};

function SocialLinks() {
  return (
    <div className="w-full space-y-3 rounded-xl overflow-hidden">
      {socialData.map((social, index) => (
        <SocialLink
          key={index}
          name={social.name}
          link={social.link}
          icon={icons[social.icon]}
        />
      ))}
    </div>
  );
}

export default SocialLinks;