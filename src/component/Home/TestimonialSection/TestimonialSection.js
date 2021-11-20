import React from 'react';
import userImg from '../../../images/testimonial_img2.jpg'
import testBanner from '../../../images/secoundbanner.jpg'
const TestimonialSection = () => {
    return (
        <div className="grid lg:grid-cols-2 border-b-8 border-green-200">
            <div className="bg-green-500 flex justify-center items-center">

                <div className="flex lg:flex-row flex-col gap-7 sm:h-80 h-96 p-10">
        <div>
        <img className="rounded-full w-24 h-24 object-none object-center  border-4 border-gray-50" src={userImg} alt="" />

        </div>
                    <div className="">
                        <p className="text-white  text-center lg:text-justify text-xl pb-5">"Majority have suffered alteration in aome from, by injected believable.into electronic typesetting, Lorem Ipsum is imply dummy text of the release of Letraset sheetpassage."</p>
                        <div className="flex items-end gap-1 justify-center lg:justify-start">
                            <h4 className="uppercase font-semibold text-xl">tony chester</h4>
                            <p><small>Creative design</small></p>
                        </div> 
                    </div>
                </div>
            </div>
            <div>
                <img className=" h-96" src={testBanner} alt="" />
            </div>
        </div>
    );
};

export default TestimonialSection;