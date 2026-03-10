function SocialLink({ name, link , icon}) {
  return (
    <a
      href={link}
      className="flex justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 " 
    >
      <div className="flex flex-row gap-10 items-center ">
      {icon}
      {name}
     {/* <p>Follow me</p> */}
      </div>
      
      →
    </a>
  );
}

export default SocialLink;