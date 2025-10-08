import ContactForm from "@/components/ContactForm/page";
import StudyBanner from "@/components/StudyBanner/page";
import TeamPage from "@/components/TeamPage/page";

export default function PeoplePage() {
    return (<>
    
    <TeamPage/>
       <section className="py-16 bg-black text-white">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="w-full sm:w-80 lg:w-96 bg-gray-700 rounded-md overflow-hidden flex-1 min-w-[300px]">
                            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url(/img/book-1.png)" }}></div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-3">Supporting the community</h2>
                                <p className="text-gray-300 mb-5">
                                    Thoughtful travel is rooted in respectful connections. Please be kind and open-minded to everything—and everyone—you interact with along the way.
                                </p>
                                <a href="#" className="inline-block text-white font-bold hover:underline">
                                    Learn more <span className="ml-1 text-lg">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <div className="w-full sm:w-80 lg:w-96 bg-gray-700 rounded-md overflow-hidden flex-1 min-w-[300px]">
                            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url(/img/book-4.png)" }}></div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-3">Protecting the environment</h2>
                                <p className="text-gray-300 mb-5">
                                    As we explore the world, we have a duty to maintain and support its environment. We can all do our part through intentional, earth-friendly actions.
                                </p>
                                <a href="#" className="inline-block text-white font-bold hover:underline">
                                    Learn more <span className="ml-1 text-lg">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <div className="w-full sm:w-80 lg:w-96 bg-gray-700 rounded-md overflow-hidden flex-1 min-w-[300px]">
                            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url(/img/book-3.png)" }}></div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-3">Respecting wildlife</h2>
                                <p className="text-gray-300 mb-5">
                                    We strive to promote animal welfare everywhere we go. By respecting local wildlife, you protect the happiness and safety of any animals you encounter.
                                </p>
                                <a href="#" className="inline-block text-white font-bold hover:underline">
                                    Learn more <span className="ml-1 text-lg">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    <StudyBanner/>
    </>

    );
}