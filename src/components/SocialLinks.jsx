import SocialLink from "./SocialLink";
import { socialData } from "../data";

function SocialLinks() {
  return (
    <div className="space-y-3">

      {socialData.map((social, index) => (
        <SocialLink
          key={index}
          name={social.name}
          link={social.link}
        />
      ))}

    </div>
  );
}

export default SocialLinks;