function SocialLink({ name, link }) {
  return (
    <a
      href={link}
      className="flex justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100"
    >
      {name}
      →
    </a>
  );
}

export default SocialLink;