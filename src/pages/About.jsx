import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 px-6 py-10 lg:px-20">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Your trusted destination for quality products and exceptional service.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in <span className="font-medium">[2024]</span>, we started as a small team with a big dream: 
          to make shopping online effortless and enjoyable. Over the years, we’ve grown into a 
          leading e-commerce platform that offers a wide range of products to cater to every need.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          To provide a seamless shopping experience by delivering high-quality products 
          and excellent customer support, ensuring customer satisfaction at every step.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Core Values</h2>
        <ul className="list-disc pl-5 space-y-3 text-gray-600">
          <li><strong>Customer First:</strong> We prioritize the needs and happiness of our customers.</li>
          <li><strong>Quality:</strong> Delivering products that meet the highest standards.</li>
          <li><strong>Integrity:</strong> Building trust through honest practices.</li>
          <li><strong>Innovation:</strong> Embracing new ideas to enhance our services.</li>
        </ul>
      </section>

     







        <footer className="bg-gray-900 text-gray-300 py-8 ">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
            <p className="text-sm leading-relaxed">
              We are a trusted e-commerce platform offering a wide range of quality products to cater to your every need.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-gray-100">About</a></li>
              <li><a href="/" className="hover:text-gray-100">Shop</a></li>
              <li><a href="/contact" className="hover:text-gray-100">Contact</a></li>
           
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="text-sm space-y-2">
              <li>Email: sinhaswitu9670@gmail.com</li>
              <li>Phone: +91(123)456-7890</li>
              <li>Address: 123 E-Commerce Shopville</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} E-Commerce Inc. All rights reserved.</p>
      </div>
    </footer>
  


    </div>



  );
};

export default AboutPage;
