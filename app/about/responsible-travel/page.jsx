import StudyBanner from "@/components/StudyBanner/page";

export default function TravelPage() {
    return (
        <>    <section className="py-12 bg-gray-50 text-center">
            <div className="max-w-6xl mx-auto px-5">
                <h1 className="text-4xl font-light mb-5">A world of impact</h1>
                <p className="max-w-4xl mx-auto text-gray-600 mb-10">
                    At EF, everything we do ripples outwards, transforming people, communities, and ultimately, the planet. Our impact defines who we are as a company and how we contribute to a better world; one tour, one initiative, one story at a time.
                </p>
                <a href="#" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-md mb-12 hover:bg-blue-700 transition-colors">Visit our impact site</a>

                <div className="flex flex-wrap justify-center gap-8">
                    <div className="w-full sm:w-80 lg:w-96 bg-white shadow-lg rounded-lg overflow-hidden flex-1 min-w-[280px]">
                        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url(/img/desti-1.jpg)" }}></div>
                        <div className="p-6 text-left">
                            <h2 className="text-xl font-semibold mb-3">People</h2>
                            <p className="text-gray-600">
                                At the center of every EF experience is a person whose view of the world, and of themselves, is changed forever.
                            </p>
                            <a href="#" className="inline-block mt-4 text-blue-600 font-bold hover:underline">
                                Learn more <span className="ml-1 text-lg">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    <div className="w-full sm:w-80 lg:w-96 bg-white shadow-lg rounded-lg overflow-hidden flex-1 min-w-[280px]">
                        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url(/img/desti-2.jpg)" }}></div>
                        <div className="p-6 text-left">
                            <h2 className="text-xl font-semibold mb-3">Communities</h2>
                            <p className="text-gray-600">
                                We seek to impact the communities where we live, work, and travel through our positive presence and community engagement.
                            </p>
                            <a href="#" className="inline-block mt-4 text-blue-600 font-bold hover:underline">
                                Learn more <span className="ml-1 text-lg">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    <div className="w-full sm:w-80 lg:w-96 bg-white shadow-lg rounded-lg overflow-hidden flex-1 min-w-[280px]">
                        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url(/img/desti-3.jpg)" }}></div>
                        <div className="p-6 text-left">
                            <h2 className="text-xl font-semibold mb-3">Planet</h2>
                            <p className="text-gray-600">
                                Our contribution to a more sustainable and peaceful planet is underscored by a deep commitment to make the world a better place.
                            </p>
                            <a href="#" className="inline-block mt-4 text-blue-600 font-bold hover:underline">
                                Learn more <span className="ml-1 text-lg">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>



            <section className="py-20 bg-black text-white">
                <div className="max-w-6xl mx-auto px-5 lg:flex lg:gap-12 items-start">

                    <div className="lg:w-1/2 relative py-5 flex justify-center lg:block">
                        <div className="circle-group">
                            <img src="/img/mobile-banner22.png" alt="Person in a hat" className="circle-img top-left" />
                            <img src="/img/mobile-banner33.png" alt="Hands weaving fabric" className="circle-img bottom-right" />
                        </div>
                    </div>

                    <div className="lg:w-1/2 mt-16 lg:mt-0 text-center lg:text-left">
                        <h2 className="text-3xl font-light mb-6">Supporting the community</h2>
                        <p className="text-gray-100 mb-10">
                            People and communities are the heart of every destination, breathing unique life into a place. By taking time to understand a new culture and being thankful for its hospitality, you amplify the positive impacts of your adventure and forge deeper personal connections.
                        </p>

                        <div className="space-y-0">
                            <div className="border-b border-gray-300 py-4 cursor-pointer">
                                <h3 className="text-lg font-normal text-gray-200 flex justify-between items-center hover:text-blue-600">
                                    Paying respect to local culture
                                    <span className="dropdown-arrow text-blue-600 text-2xl font-semibold">&gt;</span>
                                </h3>
                            </div>
                            <div className="border-b border-gray-300 py-4 cursor-pointer">
                                <h3 className="text-lg font-normal text-gray-200 flex justify-between items-center hover:text-blue-600">
                                    Spending money thoughtfully
                                    <span className="dropdown-arrow text-blue-600 text-2xl font-semibold">&gt;</span>
                                </h3>
                            </div>
                            <div className="border-b border-gray-300 py-4 cursor-pointer">
                                <h3 className="text-lg font-normal text-gray-200 flex justify-between items-center hover:text-blue-600">
                                    Interacting with local communities
                                    <span className="dropdown-arrow text-blue-600 text-2xl font-semibold">&gt;</span>
                                </h3>
                            </div>
                            <div className="border-b border-gray-300 py-4 cursor-pointer">
                                <h3 className="text-lg font-normal text-gray-200 flex justify-between items-center hover:text-blue-600">
                                    Reflecting when you return home
                                    <span className="dropdown-arrow text-blue-600 text-2xl font-semibold">&gt;</span>
                                </h3>
                            </div>
                            <div className="border-b border-gray-300 py-4 cursor-pointer">
                                <h3 className="text-lg font-normal text-gray-200 flex justify-between items-center hover:text-blue-600">
                                    Reflecting when you return home
                                    <span className="dropdown-arrow text-blue-600 text-2xl font-semibold">&gt;</span>
                                </h3>
                            </div>
                            <div className="border-b border-gray-300 py-4 cursor-pointer">
                                <h3 className="text-lg font-normal text-gray-200 flex justify-between items-center hover:text-blue-600">
                                    Reflecting when you return home
                                    <span className="dropdown-arrow text-blue-600 text-2xl font-semibold">&gt;</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <StudyBanner />
        </>
    );
}