import React, { useState } from 'react';

export function Certificates() {
    const [selectedCert, setSelectedCert] = useState(null);

    const certs = [
        {
            title: "Winner - Smart India Hackathon 2025",
            issuer: "Ministry of Education, AICTE, MoE's Innovation Cell",
            date: "Dec 2025",
            img: "/images/certs/sih-2025-winner.jpg",
            description: "Won the Grand Finale of Smart India Hackathon (SIH) 2025, Software Edition, held at Nagarjuna College of Engineering and Technology, Bengaluru. Recognized for developing an innovative solution for challenges posed by the Ministry of Defence."
        },
        {
            title: "Participation - Smart India Hackathon 2025",
            issuer: "Ministry of Education, AICTE, MoE's Innovation Cell",
            date: "Dec 2025",
            img: "/images/certs/sih-2025-participation.jpg",
            description: "Participated in the Grand Finale of Smart India Hackathon (SIH) 2025, Software Edition. Focused on building impactful software solutions for national-level problem statements."
        },
        {
            title: "Participation - Hack with UttarPradesh 2025",
            issuer: "Chandigarh University, Technology Business Incubator",
            date: "Nov 2025",
            img: "/images/certs/hack-with-up-2025.jpg",
            description: "Actively participated in Hack with UttarPradesh 2025, contributing to the event's goals of innovation, collaboration, and problem-solving. Supported by HACK WITH INDIA and powered by BLACKBOX AI."
        },
        {
            title: "1st Position - TechNova (SaMeRa 2.0)",
            issuer: "BNCET, Lucknow",
            date: "2024",
            img: "/images/certs/samera-2.0.jpg",
            description: "Secured the 1st position in TechNova / Maidan-e-Jung / Sanskriti Utsav / Sahitya Garima held during SaMeRa 2.0, the annual fest of BNCET, Lucknow. Demonstrated exceptional talent and competitive spirit."
        },
        {
            title: "Delta (Full Stack Web Development)",
            issuer: "Apna College",
            date: "2024",
            img: "/images/certs/delta-fullstack.png",
            description: "Successfully completed the 'Delta' Full Stack Web Development course by Apna College, covering front-end and back-end technologies including HTML, CSS, JavaScript, Node.js, and more."
        },
        {
            title: "Data Science Training",
            issuer: "Internshala Trainings",
            date: "2024",
            img: "/images/certs/internshala-datascience.jpg",
            description: "Completed a comprehensive training program in Data Science from Internshala Trainings, certified by IITM Pravartak Technologies Foundation."
        },
        {
            title: "GDGC Organizer (Social Media)",
            issuer: "GDGC BNCET",
            date: "2024-25",
            img: "/images/certs/gdgc-bncet.jpg",
            description: "Served as a Social Media Department Organizer for Google Developer Groups on Campus (GDGC) at BNCET, Lucknow. Responsible for managing social media presence, creating engaging content, and promoting community events."
        },
        {
            title: "Participation - GenAI Hackathon",
            issuer: "Community, Lucknow",
            date: "Nov 2025",
            img: "/images/certs/genai-hackathon.jpg",
            description: "Recognized for dedication and collaborative spirit demonstrated during the GenAI Hackathon held in Lucknow on November 6, 2025."
        },
        {
            title: "Web Technologies Training",
            issuer: "Softpro India",
            date: "2024",
            img: "/images/certs/web-technologies-training.jpg",
            description: "Participated in an 'Employability Skills Enhancement Training Program' on Web Technologies organized by Dr. A.P.J. Abdul Kalam Technical University (AKTU) in association with Softpro India."
        },
        {
            title: "Data Science with Python Bootcamp",
            issuer: "LetsUpgrade",
            date: "2024",
            img: "/images/certs/data-science-bootcamp.jpg",
            description: "Successfully completed a 5-day intensive bootcamp on Data Science with Python in collaboration with NSDC and ITM Edutech Training. Gained practical experience in Python libraries for data analysis."
        },
        {
            title: "IDEATHON 2024 Participation",
            issuer: "IEEE BNCET",
            date: "2024",
            img: "/images/certs/ideathon-2024.jpg",
            description: "Actively participated in IDEATHON 2024, an inter-college idea generation competition organized by IEEE BNCET Student Branch and Department of Computer Science and Engineering."
        },
    ];

    return (
        <div className="h-full w-full bg-ub-cool-grey p-4 overflow-y-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedCert(cert)}
                        className="bg-gray-800 bg-opacity-40 border border-gray-700 rounded-lg overflow-hidden hover:border-ub-orange transition-all duration-300 flex flex-col cursor-pointer group"
                    >
                        <div className="h-64 overflow-hidden bg-black flex items-center justify-center p-2">
                            <img
                                src={cert.img}
                                alt={cert.title}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-4 border-t border-gray-700">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col w-2/3">
                                    <span className="font-bold text-base text-white line-clamp-1">{cert.title}</span>
                                    <span className="text-sm text-gray-400 mt-1">{cert.issuer}</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] font-bold text-ub-orange uppercase tracking-wider">Date</span>
                                    <span className="text-sm font-bold text-white whitespace-nowrap">{cert.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Detailed View Modal */}
            {selectedCert && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 animate-fadeIn">
                    <div className="bg-ub-cool-grey w-full max-w-4xl max-h-[90vh] rounded-xl border border-gray-600 shadow-2xl overflow-hidden flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="w-full md:w-2/3 bg-black flex items-center justify-center p-4">
                            <img
                                src={selectedCert.img}
                                alt={selectedCert.title}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>

                        {/* Details Section */}
                        <div className="w-full md:w-1/3 p-6 flex flex-col h-full bg-gray-900 border-l border-gray-700">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold text-white">{selectedCert.title}</h2>
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="space-y-4 flex-grow overflow-y-auto">
                                <div className="flex flex-col">
                                    <span className="text-ub-orange font-semibold text-sm uppercase tracking-wider">Issued By</span>
                                    <span className="text-gray-200">{selectedCert.issuer}</span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-ub-orange font-semibold text-sm uppercase tracking-wider">Date</span>
                                    <span className="text-gray-200">{selectedCert.date}</span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-ub-orange font-semibold text-sm uppercase tracking-wider">Achievement Details</span>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {selectedCert.description}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedCert(null)}
                                className="mt-6 w-full py-2 bg-ub-orange text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
                            >
                                Close Preview
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-8 text-center text-gray-500 text-xs italic">
                * Click on a certificate to view details and high-resolution image.
            </div>
        </div>
    );
}

export const displayCertificates = () => {
    return <Certificates />;
}
