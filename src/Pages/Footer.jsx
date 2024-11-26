import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Hours</h4>
          <p>Mon-Thu: 11am - 10pm</p>
          <p>Fri-Sat: 11am - 11pm</p>
          <p>Sunday: 12pm - 9pm</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@burgerbite.com</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-500">Instagram</a>
            <a href="#" className="hover:text-orange-500">Facebook</a>
            <a href="#" className="hover:text-orange-500">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
