import profileImage from "../assets/profile.jpg";

function Header ({name, title,}){
    return( 
        <div className="bg-linear-to-r from-gray-500 to-gray-700 h-40 relative flex flex-col justify-center items-center">
            
            <img src= {profileImage} alt="Profile" className=" h-24 w-24 rounded-full border-6 border-white object-cover bottom-4" />
           <div className="absolute -bottom-[-17.5] text-center">
            <h1 className="text-xl font-bold text-black ">{name}</h1>
            <p className="text-gray-500">{title}</p>
           </div>
        </div>
    );
}
export default Header;