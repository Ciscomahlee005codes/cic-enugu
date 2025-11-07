import React from "react";

const Map: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31717.76969069971!2d7.452606910839839!3d6.429849900000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a17a3440a113%3A0xe41df114906ac636!2sCollege%20of%20the%20Immaculate%20Conception!5e0!3m2!1sen!2sng!4v1762439285592!5m2!1sen!2sng"
        height="450"
        style={{ border: 0, width:"100%" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
