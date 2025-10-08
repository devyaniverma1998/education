import StudyBanner from "@/components/StudyBanner/page";

export default function HealthPage() {
    return (



        <>
            <section className="bg-gray-800 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-light text-white mb-6">How can we help you travel responsibly?</h1>

                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="search"
                            placeholder="Search for community guidelines, sustainability, or animal welfare..."
                            className="w-full py-4 pl-12 pr-4 text-gray-700 rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>

                    <p className="text-white text-sm mt-4">
                        You can also browse articles below by category.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-normal mb-10 text-center">Browse by Category</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <a href="#" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-600 block">
                        <div className="text-center">
                            <svg className="w-10 h-10 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2c0-.656-.126-1.283-.356-1.857M17 20H7m0 0v-2c0-.656.126-1.283.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <h3 className="text-xl font-semibold mb-3">Supporting the Community</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                Guidelines on culture, mindful spending, local interaction, and personal impact.
                            </p>
                            <ul className="text-left text-sm text-blue-600 space-y-1">
                                <li>• How to pay respect to local culture</li>
                                <li>• Tipping & thoughtful spending guidelines</li>
                                <li>• Making a positive local impact</li>
                                <li className="font-bold pt-2">View all 12 articles &rarr;</li>
                            </ul>
                        </div>
                    </a>

                    <a href="#" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-green-600 block">
                        <div className="text-center">
                            <svg className="w-10 h-10 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9c1.657 0 3 4.03 3 9s-1.343 9-3 9z"></path></svg>
                            <h3 className="text-xl font-semibold mb-3">Protecting the Environment</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                Information on sustainability, carbon footprint, waste reduction, and conservation.
                            </p>
                            <ul className="text-left text-sm text-green-600 space-y-1">
                                <li>• Tips for going green on tour</li>
                                <li>• Understanding our carbon footprint</li>
                                <li>• Avoiding single-use plastics</li>
                                <li className="font-bold pt-2">View all 9 articles &rarr;</li>
                            </ul>
                        </div>
                    </a>

                    <a href="#" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-yellow-600 block">
                        <div className="text-center">
                            <svg className="w-10 h-10 text-yellow-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            <h3 className="text-xl font-semibold mb-3">Respecting Wildlife</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                Animal welfare policies, ethical encounters, and avoiding exploitative practices.
                            </p>
                            <ul className="text-left text-sm text-yellow-600 space-y-1">
                                <li>• EF's Animal Welfare Policy</li>
                                <li>• Identifying ethical animal sanctuaries</li>
                                <li>• What to do when you see wild animals</li>
                                <li className="font-bold pt-2">View all 7 articles &rarr;</li>
                            </ul>
                        </div>
                    </a>

                </div>
            </section>

            <section className="bg-black  py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-normal mb-8 text-center text-white">Popular Questions</h2>

                    <div className="space-y-4">

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <button className="w-full text-left p-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100">
                                <span className="text-lg font-medium">What is the appropriate clothing for visiting religious sites?</span>
                                <span className="text-2xl text-blue-600 transform rotate-90">&gt;</span>
                            </button>
                            <div className="p-5 text-gray-600 hidden">
                                <p>Detailed answer regarding covering shoulders and knees, and following your Tour Director's guidance.</p>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <button className="w-full text-left p-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100">
                                <span className="text-lg font-medium">How can I ensure my spending supports local businesses?</span>
                                <span className="text-2xl text-blue-600 transform rotate-90">&gt;</span>
                            </button>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <button className="w-full text-left p-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100">
                                <span className="text-lg font-medium">Should I bring a reusable water bottle, and is the water safe?</span>
                                <span className="text-2xl text-blue-600 transform rotate-90">&gt;</span>
                            </button>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <button className="w-full text-left p-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100">
                                <span className="text-lg font-medium">What animal activities should I avoid on tour?</span>
                                <span className="text-2xl text-blue-600 transform rotate-90">&gt;</span>
                            </button>
                        </div>

                    </div>

                    <div className="text-center mt-8">
                        <a href="#" className="text-blue-600 font-semibold hover:underline">See all articles</a>
                    </div>

                </div>
            </section>
 <StudyBanner/>
          
</>

    );
}