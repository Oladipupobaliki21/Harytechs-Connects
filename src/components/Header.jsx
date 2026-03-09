import profileImage from "../assets/profile.jpg";

function Header (){
    return(
        <div className="bg-linear-to-r from-gray-500 to-gray-700 h-32 relative flex justify-center">
            <img src= {profileImage} alt="Profile" className=" h-24 w-24 rounded-full border-6 border-white absolute bottom-4" />
            {/* <h2>Bilikis Oladipupo</h2> */}
        </div>
    );
}
export default Header;