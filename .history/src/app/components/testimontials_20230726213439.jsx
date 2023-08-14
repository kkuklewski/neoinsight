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
                </div>
            </div>
        </section>

    )
}