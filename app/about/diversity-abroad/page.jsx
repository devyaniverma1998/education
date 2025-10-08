import ContactForm from "@/components/ContactForm/page";
import DestinationSlider from "@/components/DestinationSlider/page";
import StudyBanner from "@/components/StudyBanner/page";
import TeamPage from "@/components/TeamPage/page";

export default function AbroadPage() {
    return (
        <>
            <div className="min-h-screen bg-white py-10">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="flex items-center justify-center mb-5">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-black">
                            Diversity Abroad</h1>

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
                                The leading provider in global experiences, we have been inspiring people since 1970. We’ve helped thousands explore new horizons through cultural engagement, skill-building programs, and personal growth, driven by the belief that connection improves the world.
                                The leading provider in global experiences, we have been inspiring people since 1970. We’ve helped thousands explore new horizons through cultural engagement, skill-building programs, and personal growth, driven by the belief that connection improves the world.
                               
                            </p>
                            <p className="mt-4">
                                At our international program, we collaborate with various institutions to enrich learning through diverse experiences. Founded decades ago, we remain an independent organization with a strong global presence.
                                 The leading provider in global experiences, we have been inspiring people since 1970. We’ve helped thousands explore new horizons through cultural engagement, skill-building programs, and personal growth, driven by the belief that connection improves the world.
                            </p>
                        </div>
                    </div>
                </div>
                <DestinationSlider/>
                <StudyBanner/>
            </div>
        </>

    );
}