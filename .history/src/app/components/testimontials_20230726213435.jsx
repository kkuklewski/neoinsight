"use client"

// Import Swiper React components
import React from "react";
// Import Swiper React components
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'

// // Import Swiper styles
// import "swiper/css";
import "swiper/css/pagination";
import { getTestimontials } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react'
import { Pagination } from "swiper";

export default async function Testimontials() {
    const testimonials = await getTestimontials();

    return (
        <section id="testimontial">
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/*  */}
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={true}
                        autoplay={true}
                        modules={[Pagination]}
                        scrollbar={{ draggable: true }}
                        className="flex justify-center"
                    >
                        {testimonials.map((testimontial) => (
                            <SwiperSlide key={testimontial._id} className="testimontial-slider">
                                <div className="mb-6 border border-blue-400 max-w-lg basis-1/4">
                                    <h4 className="text-lg">{testimontial.user}</h4>
                                    <p className="text-green-600">{testimontial.jobtitle}</p>
                                </div>
                                <div className="border border-blue-900 mb-12 max-w-lg basis-1/4">
                                    <h3 className="mb-6 text-md font-bold font-heading">
                                        <PortableText value={testimontial.content} />
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>

    )
}