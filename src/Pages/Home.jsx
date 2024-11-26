import React from 'react';
import { Menu, Phone, Clock, MapPin } from 'lucide-react';
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50">

      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Savor the Perfect Bite</h2>
          <p className="text-xl text-white mb-8">Handcrafted burgers made with premium ingredients</p>
          <Link to={'/Products'}><button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300">
            Order Now
          </button></Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Menu className="mx-auto mb-4 text-orange-500 h-12 w-12" />
          <h3 className="text-xl font-semibold mb-2">Diverse Menu</h3>
          <p className="text-gray-600">From classic beef to exotic varieties, explore our extensive burger selection</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Clock className="mx-auto mb-4 text-orange-500 h-12 w-12" />
          <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
          <p className="text-gray-600">Quick preparation without compromising on quality</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <MapPin className="mx-auto mb-4 text-orange-500 h-12 w-12" />
          <h3 className="text-xl font-semibold mb-2">Multiple Locations</h3>
          <p className="text-gray-600">Find us in your neighborhood</p>
        </div>
      </div>

      {/* Popular Items Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Burgers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">Classic Cheese</h3>
                <p className="text-gray-600 mb-4">Juicy beef patty with melted cheddar</p>
                <span className="text-orange-500 font-bold">$8.99</span>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">BBQ Bacon</h3>
                <p className="text-gray-600 mb-4">Smoky bacon with BBQ sauce</p>
                <span className="text-orange-500 font-bold">$10.99</span>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">Mushroom Swiss</h3>
                <p className="text-gray-600 mb-4">Sautéed mushrooms and Swiss cheese</p>
                <span className="text-orange-500 font-bold">$9.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
