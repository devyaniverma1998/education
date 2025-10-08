import FeaturedPrograms from "@/components/FeaturedPrograms/page";

export default function ProgramsPage() {
    return (
        <div className="min-h-screen bg-white py-10">
            <div className="max-w-7xl mx-auto px-4">
                {/* Hero Section */}
                <div className="mb-12 text-center">

                    <div className="flex items-center justify-center mb-5">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-black">
                            Educational Approach</h1>

                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="md:w-1/2">
                            <img
                                src="/img/desktop-banner22.png"
                                alt="Educational Innovation"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                        <div className="md:w-1/2 text-sm text-gray-600">
                            <p className="mb-4">
                                A forward-thinking approach to global learning, we have spent over five decades inspiring students to explore, learn, and grow through hands-on education and deep engagement. Today, we’re shaping the future of international programs.
                            </p>
                            <p>
                                Our modern offerings connect current student needs with the skills required for tomorrow’s leaders in a dynamic world. By enhancing traditional experiences with opportunities for skill development, our programs build confidence, perspective, and resilience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Sections */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-8 mb-12">
                    {/* Learning Outcomes */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 md:text-2xl">
                            Learning Outcomes That Last
                        </h2>
                        <p className="text-sm text-gray-600">
                            Student growth is at the heart of our programs, with each experience designed around specific, meaningful learning goals. This method ensures participants don’t just visit the world—they interact with it, learn from it, and create their own path forward.
                        </p>
                    </div>

                    {/* Academic Standards */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 md:text-2xl">
                            Held to High Academic Standards
                        </h2>
                        <p className="text-sm text-gray-600">
                            We collaborate with a leading university to maintain top academic quality across our programs. Participants can earn an official transcript with transferable credits for their completed work.
                        </p>
                    </div>

                    {/* Industry Experts */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 md:text-2xl">
                            Designed with Industry Experts
                        </h2>
                        <p className="text-sm text-gray-600">
                            Our expert partner, with over two decades of global education experience, helps shape our programs. They’ve co-created and instruct the coursework for our flagship scholarship initiative and designed the core curriculum.
                        </p>
                    </div>

                    {/* Renowned Institutions */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 md:text-2xl">
                            Created with Renowned Institutions
                        </h2>
                        <p className="text-sm text-gray-600">
                            We partner with a prestigious global organization to develop innovative student experiences, including a global citizen certificate and a scholarship program for future leaders.
                        </p>
                    </div>
                </div>


            </div>
            {/* Academic Partners */}
            <div className="py-10 bg-black text-white">
                <div className="px-5">

                    <div className="flex items-center justify-center  mb-5">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Academic Partners Worldwide</h2>

                    </div>
                    <p className="text-sm text-gray-100 mb-4 text-center">
                        Joining our program connects you to a global academic network. Our partners include top universities and institutions from various regions, such as:
                    </p>
                    <img
                        src="/img/desktop-banner11.png"
                        alt="Educational Innovation"
                        className="mx-auto w-full h-auto rounded-lg shadow-md "
                    />
                </div>
            </div>
            <FeaturedPrograms />
        </div>
    );
}