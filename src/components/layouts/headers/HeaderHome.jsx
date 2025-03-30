import React from 'react';
import { Link } from 'react-router-dom';

const HeaderHome = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="text-2xl font-bold text-blue-600">Demo</Link>
                </div>
                
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="text-gray-700 hover:text-blue-500">Trang chủ</Link>
                    <Link to="/features" className="text-gray-700 hover:text-blue-500">Tính năng</Link>
                    <Link to="/pricing" className="text-gray-700 hover:text-blue-500">Bảng giá</Link>
                    <Link to="/about" className="text-gray-700 hover:text-blue-500">Giới thiệu</Link>
                </nav>
                
                <div className="flex items-center space-x-3">
                    <Link to="/login" className="px-4 py-2 text-gray-700 hover:text-blue-500">Đăng nhập</Link>
                    <Link to="/register" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Đăng ký</Link>
                </div>
                
                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button className="text-gray-500 hover:text-blue-500 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default HeaderHome;