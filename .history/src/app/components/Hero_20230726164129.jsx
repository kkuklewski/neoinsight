import ButtonUI from "@/app/components/button";

export default function Hero() {
    return (
        <section
            className="relative bg-white overflow-hidden"
            style={{
                backgroundImage: 'url("static/elements/pattern-white.svg")',
                backgroundPosition: "center"
            }}
        >
            <div className="py-20 md:py-28">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap xl:items-center -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                            <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                                A small business is only as good as its tools.
                            </h1>
                            <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                                We’re different. Flex is the only saas business platform that lets
                                you run your business on one platform, seamlessly across all digital
                                channels.
                            </p>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                                    <ButtonUI style="dark" href="/" buttonName="Home" />
                                </div>
                                <div className="w-full md:w-auto py-1 md:py-0">
                                    <ButtonUI href="/page1" buttonName="Page" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="relative mx-auto md:mr-0 max-w-max">
                                <img
                                    className="absolute z-10 -left-14 -top-12 w-28 md:w-auto"
                                    src="/static/elements/circle3-yellow.svg"
                                    alt=""
                                />
                                <img
                                    className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto"
                                    src="/static/elements/dots3-blue.svg"
                                    alt=""
                                />
                                <img
                                    className="relative rounded-7xl"
                                    src="/static/images/headers/header.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}