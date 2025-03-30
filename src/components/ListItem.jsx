import React from "react";

// Dữ liệu mẫu cho posts (tạo 30 item)
const items = Array(9).fill(0).map((_, index) => ({
    id: index.toString(),
    name: `Item ${index + 1}`,
    description: `This is the description for item ${index + 1}.`,
    price: `$${(Math.random() * 90 + 10).toFixed(2)}`, // Giá từ $10 đến $100
    image: `https://picsum.photos/500/500?random=${index}`, // Ảnh random
}));

const ItemList = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Item List</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
                            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                            <span className="block text-blue-500 font-bold mt-2">{item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ItemList;
