import React from 'react';

const Testimonials = ({user}) => {
    
    return (
        <>
            
            
                    <div className="w-64 flex justify-center">
                        <img className="rounded-full w-full   border-4 border-gray-50" src={user.userImg} alt="" />

                    </div>
                    <div className="">
                        <p className="text-white  text-center lg:text-justify text-xl pb-5">{user.userText}</p>
                        <div className="flex items-end gap-1 justify-center lg:justify-start">
                            <h4 className="uppercase font-semibold text-xl">{user.userName}</h4>
                            <p><small>{user.userTitle}</small></p>
                        </div>
                    </div>
             
        </>
    );
};

export default Testimonials;