import React from "react";

const Navbar = () => {
    return ( 
        <div className="navbar text-white ">
            <div>
                <h2 className="text-2xl">Home</h2>
                <h2 className="text-2xl">Profile</h2>
            </div>

            <div>
                <h1 className="font-serif text-teal-100 text-4xl">Carental</h1>  
            </div>
            
            <div>  
                <h2 className="text-2xl" >Settings</h2>
            </div>
            
            
        </div>
     );
}
 
export default Navbar;