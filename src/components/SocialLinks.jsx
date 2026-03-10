import SocialLink from "./SocialLink";
import { socialData } from "../data";
import {FaGithub, FaLinkedin} from "react-icons/fa";

function SocialLinks() {
  const icons={
         github: <FaGithub className="text-black"/>,
        linkedln: <FaLinkedin className="text-black"/>,
  };
  return (
    <div className="space-y-3 shadow-md rounded-lg p-4 mx-auto w-2/4">
       {/* {icons[icon]} */}
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