// import Header from "./Header"
// import ContactList from "./ContactList"
// import SocialLinks from "./SocialLinks"

// function BusinessCard (){
//     return(
//         <div className="min-h-screen bg-gray-600 flex justify-center p-4 items-center">
//             <div className="w-full   sm: bg-white  rounded-2xl shadow-lg overflow-hidden">
//             <Header
//             name ="Bilikis Oladipupo"
//             title ="Frontend Developer"
            
//             />

//         <div className="mt-20 px-6">
//          <p className="text-sm text-gray-600 text-center mb-6">
//             Passionate Frontend Developer who enjoys building responsive
//             and user-friendly web applications using React, JavaScript,
//             HTML, CSS and Tailwind CSS.
//           </p>

//         <ContactList/>
//             </div>
//              <div className="mt-8">
//         <h3 className="">Find me on</h3>
//         <SocialLinks/>
//             </div>
//         </div>
        
       
//         </div>
//     )

// }
// export default BusinessCard

// import Header from "./Header";
// import ContactList from "./ContactList";
// import SocialLinks from "./SocialLinks";

// function BusinessCard() {
//   return (
//     <div className="min-h-screen bg-gray-600 flex justify-center items-center p-4">

//       <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden">

//         <Header
//           name="Bilikis Oladipupo"
//           title="Frontend Developer"
//         />

//         <div className="mt-28 px-6">

//           <p className="text-sm md:text-base text-gray-600 text-center mb-6">
//             Passionate Frontend Developer who enjoys building responsive
//             and user-friendly web applications using React, JavaScript,
//             HTML, CSS and Tailwind CSS.
//           </p>

//           <ContactList />

//           <div className="mt-8 text-center">
//             <h3 className="font-semibold mb-3">Find me on</h3>
//             <SocialLinks />
//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default BusinessCard;


import Header from "./Header";
import ContactList from "./ContactList";
import SocialLinks from "./SocialLinks";

function BusinessCard() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-700 to-gray-900 flex justify-center items-center p-6">

      <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden">

        <Header
          name="Bilikis Oladipupo"
          title="Frontend Developer"
        />

        <div className="mt-28 px-6">

          <p className="text-sm md:text-base text-gray-600 text-center mb-6 leading-relaxed ">
            Passionate Frontend Developer who enjoys building responsive
            and user-friendly web applications using React, JavaScript,
            HTML, CSS and Tailwind CSS.
          </p>
            <div className="flex items-center justify-center "> 
           <ContactList />
            </div>
        

          <div className="mt-8  ">
            <h3 className="font-semibold text-lg mb-3">Find me on</h3>
            <SocialLinks />
          </div>

        </div>

      </div>

    </div>
  );
}

export default BusinessCard;