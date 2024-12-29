import { FaChevronRight, FaPhone, FaMailBulk, FaMapPin } from "react-icons/fa";
import Image from 'next/image'

const index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">T.MINING</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500">About</a>
            <a href="#" className="hover:text-orange-500">Services</a>
            <a href="#" className="hover:text-orange-500">Projects</a>
            <a href="#" className="hover:text-orange-500">Contact</a>
          </div>
          <button className="bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px] bg-black">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="/api/placeholder/1200/600"
          alt="Mining site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 container mx-auto flex items-center">
          <div className="text-white max-w-2xl px-4">
            <h1 className="text-5xl font-bold mb-6">Your Home For Unsurpassed Opportunities</h1>
            <p className="text-lg mb-8">Discover excellence in mining operations with our innovative solutions and expert team.</p>
            <button className="bg-orange-500 px-6 py-3 rounded-md hover:bg-orange-600 flex items-center">
              Discover More
              <FaChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

       {/* Features Section */}
       <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Finding Success From Earth's Depths</h2>
            <p className="text-gray-600 mb-8">
              We combine decades of experience with cutting-edge technology to deliver exceptional mining services that meet the highest industry standards.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
              Learn More
            </button>
          </div>
          <div className="relative h-80">
            <img 
              src="/api/placeholder/600/400"
              alt="Mining operations"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <img 
                src="/api/placeholder/400/300"
                alt="Mining equipment"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">From Earth to Riches: Unveiling Our Mining Excellence</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-orange-500">150K+</p>
                  <p className="text-gray-600">Tons Extracted</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-500">4.8/5</p>
                  <p className="text-gray-600">Client Rating</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Tailored Mining Services For Every Project</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-orange-500 text-white p-3 rounded-full mr-4">
                        {index}
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Mining Service {index}</h4>
                        <p className="text-gray-600">Comprehensive mining solutions tailored to your specific needs and requirements.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-orange-500 w-8 h-8" />
            <div>
              <p className="font-bold">Phone Number</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaMailBulk className="text-orange-500 w-8 h-8" />
            <div>
              <p className="font-bold">Email Address</p>
              <p className="text-gray-600">contact@tmining.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapPin className="text-orange-500 w-8 h-8" />
            <div>
              <p className="font-bold">Location</p>
              <p className="text-gray-600">123 Mining Ave, Earth City</p>
            </div>
          </div>
        </div>
      </section>

       {/* Footer */}
       <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">T.MINING</h4>
              <p className="text-gray-400">Your trusted partner in mining excellence.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Projects</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Mining Operations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Consulting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Equipment Rental</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Safety Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
export default index