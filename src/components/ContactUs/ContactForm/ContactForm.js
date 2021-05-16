import './ContactForm.scss';

const ContactForm = () => (
  <div className="contact-form">
    <h4 className="contact-form__title">Let's Connect</h4>
    <p className="contact-form__text">
      Your email addres will not be published. Required fields are marked *
    </p>
    <form onSubmit={(e) => e.preventDefault()} className="contact-form__form">
      <div className="contact-form__input d-flex justify-content-center align-items-center">
        <input
          className="contact-form__input-field"
          type="text"
          placeholder="your name"
        />
        <input
          className="contact-form__input-field"
          type="email"
          placeholder="your email"
        />
      </div>
      <div className=" mt-2">
        <textarea
          rows="10"
          className="contact-form__message"
          placeholder="your message"
        />
      </div>
      <button type="submit" className="contact-form__sumbit-btn">
        submit
      </button>
    </form>
  </div>
);

export default ContactForm;
