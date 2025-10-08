import ProgramsGrid from "@/components/ProgramsGrid/page";
import StudyBanner from "@/components/StudyBanner/page";
import Link from "next/link";


export default function AboutPage() {
    return (
        <div className=" bg-white py-10">
            <div className="max-w-7xl mx-auto px-4">

                <div className="flex items-center justify-center mb-5">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-black">
                        Who We Are</h1>

                </div>
                <div className="flex flex-col md:flex-row items-center mb-10">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <img
                            src="/img/mobile-banner33.png"
                            alt="Organization Overview"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-6 text-sm text-gray-600">
                        <p>
                            The leading provider in global experiences, we have been inspiring people since 1970. We’ve helped thousands explore new horizons through cultural engagement, skill-building programs, and personal growth, driven by the belief that connection improves the world.
                        </p>
                        <p className="mt-4">
                            At our international program, we collaborate with various institutions to enrich learning through diverse experiences. Founded decades ago, we remain an independent organization with a strong global presence.
                        </p>
                        <p>
                            Our programs are crafted to create lasting memories. By including opportunities for skill development in every activity, we ensure participants return with tools for success—in their studies, careers, and personal lives.
                        </p>
                        <p>
                            Our programs are crafted to create lasting memories. By including opportunities for skill development in every activity, we ensure participants return with tools for success—in their studies, careers, and personal lives.
                        </p>
                        <p>
                            Our programs are crafted to create lasting memories. By including opportunities for skill development in every activity, we ensure participants return with tools for success—in their studies, careers, and personal lives.
                        </p>
                    </div>
                </div>


            </div>
            <div className="grid bg-black p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 text-center">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <img style={{ width: '80px', padding: '10px' }}
                        src="/img/business.png"
                        alt="Countries Icon"
                        className="mx-auto mb-2 rounded-full"
                    />
                    <p className="text-2xl font-bold text-blue-600">50+</p>
                    <p className="text-sm text-gray-600">Countries with operations</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <img style={{ width: '80px', padding: '10px' }}
                        src="/img/partner.png"
                        alt="Partners Icon"
                        className="mx-auto mb-2 rounded-full"
                    />
                    <p className="text-2xl font-bold text-blue-600">200+</p>
                    <p className="text-sm text-gray-600">Global partners</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <img style={{ width: '80px', padding: '10px' }}
                        src="/img/office.png"
                        alt="Offices Icon"
                        className="mx-auto mb-2 rounded-full"
                    />
                    <p className="text-2xl font-bold text-blue-600">300+</p>
                    <p className="text-sm text-gray-600">Offices and centers</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <img style={{ width: '80px', padding: '10px' }}
                        src="/img/staff.png"
                        alt="Staff Icon"
                        className="mx-auto mb-2 rounded-full"
                    />
                    <p className="text-2xl font-bold text-blue-600">25,000</p>
                    <p className="text-sm text-gray-600">Staff and educators</p>
                </div>
            </div>

            <ProgramsGrid />
           
        </div>
    );
}