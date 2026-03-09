import Header from "./Header"
import ContactList from "./ContactList"
import SocialLinks from "./SocialLinks"

function BusinessCard (){
    return(
        <div className="min-h-screen bg-gray-600 flex justify-center p-4 items-center">
            <div className="w-full   sm: bg-white  rounded-2xl shadow-lg overflow-hidden">
            <Header
            name ="Bilikis Oladipupo"
            title ="Frontend Developer"
            
            />

        <div className="mt-20 px-6">
         <p className="text-sm text-gray-600 text-center mb-6">
            Passionate Frontend Developer who enjoys building responsive
            and user-friendly web applications using React, JavaScript,
            HTML, CSS and Tailwind CSS.
          </p>

        <ContactList/>
            </div>
             <div className="mt-8">
        <h3 className="">Find me on</h3>
        <SocialLinks/>
            </div>
        </div>
        
       
        </div>
    )

}
export default BusinessCard