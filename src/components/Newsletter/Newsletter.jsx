import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <div className="my-10 bg-gradient-to-r from-[#c6f1fb] to-[#fce2a6] text-center p-20 rounded-xl max-w-5xl mx-auto -mt-10 shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
                <p className="text-gray-600 mb-4">Get the latest updates and news right in your inbox!</p>
                <div className="flex justify-center gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 w-64 rounded-md border focus:outline-none"
                    />
                    <button className="px-6 py-2 rounded-md text-white bg-gradient-to-r from-pink-300 to-yellow-400 hover:opacity-90">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;