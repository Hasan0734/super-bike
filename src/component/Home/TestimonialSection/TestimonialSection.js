import React from 'react';
import testBanner from '../../../images/secoundbanner.jpg'
import Testimonials from './Testimonials';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const testimonials = [
    {
        userImg: 'https://i.ibb.co/8s2z5H5/download.jpg',
        userText: '"Majority have suffered alteration in aome from, by injected believable.into electronic typesetting, Lorem Ipsum is imply dummy text of the release of Letraset sheetpassage."',
        userName: 'tony chester',
        userTitle: 'Creative design'
    },
    {
        userImg: 'https://i.ibb.co/8s2z5H5/download.jpg',
        userText: '"Majority have suffered alteration in aome from, by injected believable.into electronic typesetting, Lorem Ipsum is imply dummy text of the release of Letraset sheetpassage."',
        userName: 'tony chester',
        userTitle: 'Creative design'
    },
    {
        userImg: 'https://i.ibb.co/8s2z5H5/download.jpg',
        userText: '"Majority have suffered alteration in aome from, by injected believable.into electronic typesetting, Lorem Ipsum is imply dummy text of the release of Letraset sheetpassage."',
        userName: 'tony chester',
        userTitle: 'Creative design'
    },

]

const TestimonialSection = () => {

    return (
        <div className="w-full">

            <div className="grid lg:grid-cols-2 border-b-8 border-green-200">

                <div className="bg-green-500 py-20 h-96 px-4 flex items-center">



                    <div className="flex  justify-center ">
                        <div className="lg:flex gap-4 justify-center items-center md:w-3/4" >

                            <div className="flex justify-center"  >
                                <img className="rounded-full w-64 border-4 border-gray-100" src="https://i.ibb.co/8s2z5H5/download.jpg" alt="" />

                            </div>
                            <div className="text-center lg:text-left">
                                <p className="text-white brightness-90 text-lg">"Majority have suffered alteration in aome from, by injected believable.into electronic typesetting, Lorem Ipsum is imply dummy text of the release of Letraset sheetpassage."</p>
                                <p ><span className="uppercase text-lg font-semibold text-gray-700">tony chester</span> <span>Creative Design</span></p>
                            </div>
                        </div>

                        {/* {testimonials.map(user =>  <Testimonials user={user} />)} */}

                    </div>

                </div>

                <div>
                    <img className=" h-96 " src={testBanner} alt="" />
                </div>
            </div>
        </div>

    );
};

export default TestimonialSection;