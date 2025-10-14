import Banner from "@/components/Banner/page";
import FAQQue from "@/components/FAQQue/page";
import StudyBanner from "@/components/StudyBanner/page";

export default function TravelPage() {
    return (
        <>
        <Banner/>
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {["People", "Communities", "Planet"].map((title, idx) => (
                        <div
                            key={title}
                            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
                        >
                            <div
                                className="h-48 bg-cover bg-center"
                                style={{ backgroundImage: `url(/img/desti-${idx + 1}.jpg)` }}
                            ></div>
                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                                <p className="text-gray-600 flex-1">
                                    {title === "People"
                                        ? "At the center of every EF experience is a person whose view of the world, and of themselves, is changed forever."
                                        : title === "Communities"
                                            ? "We seek to impact the communities where we live, work, and travel through our positive presence and community engagement."
                                            : "Our contribution to a more sustainable and peaceful planet is underscored by a deep commitment to make the world a better place."}
                                </p>
                                <a
                                    href="#"
                                    className="mt-4 inline-block text-blue-600 font-bold hover:underline"
                                >
                                    Learn more <span className="ml-1 text-lg">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-12 bg-black text-white px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="flex items-center justify-center mb-5">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Supporting the Community</h2>

                    </div>
                    <p className="text-gray-200 mb-1 text-lg leading-relaxed text-center lg:text-left">
                        People and communities are the heart of every destination, breathing unique life into a place. By taking time to understand a new culture and being thankful for its hospitality, you amplify the positive impacts of your adventure and forge deeper personal connections.
                    </p>

                    <div className="lg:flex lg:items-center lg:gap-12">
                        {/* Images / Visuals */}
                        <div className="lg:w-1/2 flex justify-center lg:block relative mb-10 lg:mb-0">
                            <div className="relative w-full max-w-md mx-auto">
                                <img
                                    src="/img/mobile-banner22.png"
                                    alt="Person in a hat"
                                    className="absolute top-0 left-0 w-2/3 rounded-lg shadow-lg"
                                />
                                <img
                                    src="/img/mobile-banner33.png"
                                    alt="Hands weaving fabric"
                                    className="absolute bottom-0 right-0 w-2/3 rounded-lg shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Text + FAQ */}
                        <div className="lg:w-1/2 text-center lg:text-left">
                            {/* FAQ Component */}
                            <FAQQue />
                        </div>
                    </div>
                </div>
            </section>
            <StudyBanner />
        </>
    );
}
