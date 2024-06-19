import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h5 className="text-lg font-bold mb-4">About Us</h5>
          <p>We are dedicated to providing the latest movie reviews and news. Stay tuned for updates!</p>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-4">Quick Links</h5>
          <ul>
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/reviews" className="hover:underline">Reviews</Link></li>
            <li><Link to="/watchguide" className="hover:underline">Watch Guide</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-4">Connect With Us</h5>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.736 0-1.325.588-1.325 1.325v21.351c0 .735.588 1.324 1.325 1.324h11.487v-9.294h-3.131v-3.622h3.131v-2.675c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.098 2.792.143v3.24l-1.915.001c-1.501 0-1.794.713-1.794 1.762v2.308h3.588l-.467 3.622h-3.121v9.293h6.116c.738 0 1.325-.588 1.325-1.324v-21.35c0-.737-.588-1.325-1.325-1.325z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.391-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.563-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.924 0 .386.043.762.128 1.124-4.092-.206-7.719-2.164-10.141-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.869 3.215 2.189 4.098-.807-.026-1.566-.248-2.228-.616v.062c0 2.386 1.696 4.376 3.946 4.827-.413.112-.849.172-1.296.172-.317 0-.626-.031-.928-.089.627 1.956 2.445 3.379 4.604 3.421-1.684 1.32-3.809 2.107-6.115 2.107-.397 0-.789-.023-1.175-.069 2.179 1.398 4.765 2.215 7.548 2.215 9.055 0 14.01-7.502 14.01-14.01 0-.213-.005-.425-.014-.637.961-.694 1.796-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.315 3.608 1.29.975.975 1.228 2.242 1.29 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.315 2.633-1.29 3.608-.975.975-2.242 1.228-3.608 1.29-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.315-3.608-1.29-.975-.975-1.228-2.242-1.29-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.315-2.633 1.29-3.608.975-.975 2.242-1.228 3.608-1.29 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.261 0-3.667.013-4.947.072-1.557.07-2.965.36-4.084 1.479-1.119 1.119-1.409 2.527-1.479 4.084-.059 1.28-.072 1.686-.072 4.947s.013 3.667.072 4.947c.07 1.557.36 2.965 1.479 4.084 1.119 1.119 2.527 1.409 4.084 1.479 1.28.059 1.686.072 4.947.072s3.667-.013 4.947-.072c1.557-.07 2.965-.36 4.084-1.479 1.119-1.119 1.409-2.527 1.479-4.084.059-1.28.072-1.686.072-4.947s-.013-3.667-.072-4.947c-.07-1.557-.36-2.965-1.479-4.084-1.119-1.119-2.527-1.409-4.084-1.479-1.28-.059-1.686-.072-4.947-.072zm0 5.838c-3.41 0-6.19 2.78-6.19 6.19s2.78 6.19 6.19 6.19 6.19-2.78 6.19-6.19-2.78-6.19-6.19-6.19zm0 10.19c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.406-11.845c-.796 0-1.44.645-1.44 1.44s.644 1.44 1.44 1.44 1.44-.645 1.44-1.44-.644-1.44-1.44-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} MovieReview. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
