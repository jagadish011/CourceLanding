import React from 'react';

const CoachProfile = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 font-sans mt-14">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">
                    Meet Your <span className="text-orange-500">Coach</span>
                </h1>
                <div className="flex justify-center items-center my-2">
                    <div className="h-1 w-16 bg-emerald-400"></div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 bg-gray-50 rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <img
                            src="https://d502jbuhuh9wk.cloudfront.net/orgData/62e610080cf27ef69bbb0ede/pages/assets/images/37ydPpassport.jpg"
                            alt="Coach Puja Puneet"
                            className="w-full rounded-md"
                        />
                        <div className="text-center mt-4">
                            <h2 className="text-2xl font-bold text-orange-500">Mahesh Masal</h2>
                            <p className="text-gray-700">Human Mindset Coach</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-2/3 space-y-4">
                    <p className="text-lg">Hi, I'm Mahesh.</p>

                    <p className="text-gray-800">
                        Mahesh, guided by his spiritual Guru, believes every connection is divine and purposeful. On a mission to inspire 10 million lives through his retreats, workshops, courses, and power talks, he empowers professionals and institutions to enhance productivity, performance, and profitability.
                    </p>

                    <p className="text-gray-800">
                        His dynamic approach has made him a key influencer in the corporate world, helping leaders and teams unlock their full potential.
                    </p>

                    <p className="text-gray-800">
                        Mahesh also helps youth, teachers, students, and parents manifest their inner potential.
                    </p>
                </div>
            </div>

            <div className="mt-10">
                <div className="bg-purple-600 text-white text-center py-4 px-6 rounded-full max-w-md mx-auto">
                    <p className="font-bold text-lg">REGISTER @ ₹99/-</p>
                </div>
                <p className="text-center mt-4">
                    Enrollment closes on <span className="text-orange-500 font-bold">10 March</span>
                </p>
            </div>
        </div>
    );
};

export default CoachProfile;