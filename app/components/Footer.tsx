import React from 'react';

const Footer = () => {
  return (
<footer className="bg-[#2D2928] py-8 mx-0 px-0 mt-20">
  
  <div className="container mx-auto px-6 lg:px-10">
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
        <h6 className="text-white text-lg font-semibold mb-4">About</h6>
        <p className="text-gray-300">I am a driven individual who has embraced challenges from a young age, serving in leadership roles and participating in cooperative education programs. My academic excellence and extensive extra-curricular work have earned me scholarships and recognition, fueling my passion for becoming an exceptional professional in software development.</p>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/6 mb-8">
        <h6 className="text-white text-lg font-semibold mb-4">Categories</h6>
        <ul className="text-gray-300">
          <li><a href="#">C</a></li>
          <li><a href="#">UI Design</a></li>
          <li><a href="#">PHP</a></li>
          <li><a href="#">Java</a></li>
          <li><a href="#">Android</a></li>
          <li><a href="#">Templates</a></li>
        </ul>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/6 mb-8">
        <h6 className="text-white text-lg font-semibold mb-4">Quick Links</h6>
        <ul className="text-gray-300">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Contribute</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
    </div>
    <hr className="border-gray-700 my-6" />
    <div className="flex justify-between items-center">
      <p className="text-gray-400">&copy; {new Date().getFullYear()} All Rights Reserved by <a href="#" className="text-white">Carlos Guzman</a>.</p>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a></li>
        <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-dribbble"></i></a></li>
        <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a></li>
      </ul>
    </div>
  </div>
</footer>

  );
};

export default Footer;
