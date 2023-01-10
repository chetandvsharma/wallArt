import React from 'react';
// import HomeCover from '../Images/HomeBackground.jpeg';
// style={{
//   backgroundImage: `url(${HomeCover})`,
//   width: '100%',
//   height: '100%',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
// }}

export default function ContactUs() {
  return (
    <div>
      <h1>Contact us</h1>
      <p>
        Have questions? Use the list on the left to easily find answers or get
        in touch with our Customer Support Team directly. We are here to help!
      </p>
      <br />
      <br />
      <h5>Chat With Us</h5>
      <h6>
        {' '}
        <a href="https://api.whatsapp.com/send?phone=917089421620">
          Send Whatsapp Message
        </a>
      </h6>
      <h5>Email Us</h5>
      <h6>
        Send a note to &nbsp;
        <a href="mailto:chetan.zeeweesoft@gmail.com">
          Chetan.zeeweesoft@gmail.com
        </a>
        &nbsp; and we&apos;ll get back to you as quickly as possible. To make
        sure you receive our response, be sure to add us to your contact list.
      </h6>
      <h5>Call Us</h5>
      <h6>
        Make call at&ensp;
        <a href="tel:9876543210">9876543210 </a>
      </h6>
      <h6>
        Follow me on&ensp;
        <a href="https://instagram.com/kunaldhaketa09?igshid=Yzg5MTU1MDY=">
          Instagram
        </a>
      </h6>
    </div>
  );
}
