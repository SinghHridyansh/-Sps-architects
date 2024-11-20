import React from "react";

const MapComponent = () => {
  return (
    <div className="w-full h-60 md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.9106861251153!2d80.99679713633232!3d26.862669293241314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c81e388927%3A0x9d6f45978bf75f4c!2sD34%2C%20Vibhuti%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1731655250765!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default MapComponent;
