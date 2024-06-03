const Contact = () => {
  return (
    <div>
      <div className="contactForm mainContent">
        <h3>Name:</h3>
        <input className="input" type="text" placeholder="Name"/>
        <h3>Email:</h3>
        <input className="input" type="email" placeholder="Email" />
        <h3>Message:</h3>
        <textarea className="input" placeholder="message"></textarea>
      </div>
    </div>
  );
};

export default Contact;
