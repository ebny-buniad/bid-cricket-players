import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#06081A] text-white">

            {/* Footer Content */}
            <div className="py-16 px-4 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* About Us */}
                <div>
                    <h3 className="font-semibold mb-2">About Us</h3>
                    <p className="text-gray-400">
                        We are a passionate team dedicated to providing the best services to our customers.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="text-gray-400 space-y-1">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Logo */}
                <div className="flex flex-col items-center">
                    <img src="/logo.png" alt="Cricket Logo" className="w-20 mb-2" />
                    <p className="font-bold tracking-wide">CRICKET</p>
                </div>

                {/* Bottom Subscribe */}
                <div>
                    <h3 className="font-semibold mb-2">Subscribe</h3>
                    <p className="text-gray-400 mb-2">Subscribe to our newsletter for the latest updates.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 w-48 rounded-md border focus:outline-none"
                        />
                        <button className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-yellow-300 to-pink-400 hover:opacity-90">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-gray-500 py-4 border-t border-gray-700">
                @2024 Your Company All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
