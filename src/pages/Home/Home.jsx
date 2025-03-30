import React from "react";
import HeaderHome from "../../components/layouts/headers/HeaderHome";
import FooterHome from "../../components/layouts/footers/FooterHome";
import { FaShieldAlt, FaUserCheck, FaHeadset } from "react-icons/fa";
import ItemList from "../../components/ListItem";

const features = [
    { id: 1, title: "Fast & Secure", description: "Experience the best security and speed.", icon: <FaShieldAlt className="text-blue-500 text-4xl" /> },
    { id: 2, title: "User Friendly", description: "Easy to use interface for everyone.", icon: <FaUserCheck className="text-green-500 text-4xl" /> },
    { id: 3, title: "24/7 Support", description: "We are always here to help you.", icon: <FaHeadset className="text-red-500 text-4xl" /> },
];

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* header */}
            <HeaderHome />

            {/* hero section */}
            <section className="flex flex-col items-center justify-center bg-gray-100 text-center py-16 px-6">
                <h1 className="text-5xl font-bold text-gray-800">Welcome to Our Website</h1>
                <p className="text-gray-600 mt-4 text-lg max-w-2xl">
                    Discover amazing features and services that help you achieve more.
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition duration-300">
                    Get Started
                </button>
            </section>

            {/* feature section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div key={feature.id} className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600 mt-2">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* list item */}
            <ItemList/>

            {/* footer */}
            <FooterHome />
        </div>
    );
};

export default Home;
