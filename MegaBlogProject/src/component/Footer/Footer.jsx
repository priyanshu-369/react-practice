import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.jsx';
import { Container } from '../index.js'; // Assuming Container is imported from your components

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-zinc-700 border-t border-t-zinc-700 text-gray-300">
        <Container>
            <div className="-m-6 flex flex-wrap">
                <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                    <div className="flex h-full flex-col justify-between">
                        <div className="mb-6 inline-flex items-center">
                            <Logo width="100px" className="filter brightness-125" /> {/* Consistent brightening */}
                            <span className="ml-3 text-xl font-bold text-white">BlogSphere</span> {/* Adjusted size for footer */}
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Explore, create, and share your stories with the world. Join our vibrant community.
                            </p>
                            <p className="text-xs text-gray-500 mt-4">
                                &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full">
                        <h3 className="tracking-px mb-6 text-sm font-semibold uppercase text-blue-400"> {/* Subtle blue for headings */}
                            Company
                        </h3>
                        <ul>
                            <li className="mb-3">
                                <Link
                                    className="text-base font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                                    to="/"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link
                                    className="text-base font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                                    to="/"
                                >
                                    Features
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link
                                    className="text-base font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                                    to="/"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-base font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                                    to="/"
                                >
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full">
                        <h3 className="tracking-px mb-6 text-sm font-semibold uppercase text-blue-400">
                            Support
                        </h3>
                        <ul>
                            <li className="mb-3">
                                <Link
                                    className="text-base font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                                    to="/"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link
                                    className="text-base font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                                    to="/"
                                >
                                    Support Docs
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link
                                    className="text-base font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                                    to="/"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-base font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                                    to="/"
                                >
                                    Status
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                    <div className="h-full">
                        <h3 className="tracking-px mb-6 text-sm font-semibold uppercase text-blue-400">
                            Legal
                        </h3>
                        <ul>
                            <li className="mb-3">
                                <Link
                                    className="text-base font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                                    to="/"
                                >
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link
                                    className="text-base font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                                    to="/"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-base font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                                    to="/"
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  );
}

export default Footer;