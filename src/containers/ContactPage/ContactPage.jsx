import PageContainer from "../../utils/PageContainer";
import Select from "../../components/Select/Select";
import "./ContactPage.scss";

const ContactPage = () => {
  const interestOptions = ["Collaboration", "Meet", "Work"];

  return (
    <PageContainer className="contact">
      <h1 className="contact__header is-title">
        Want To Contact Me? I'll really appreciate it!
      </h1>
      <form className="contact__form">
        <div className="contact__form__section">
          <label htmlFor="name" className="contact__form__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact__form__input"
            required
          />
        </div>
        <div className="contact__form__section">
          <label htmlFor="email" className="contact__form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact__form__input"
            required
          />
        </div>
        <div className="contact__form__section contact__form__select">
          <label htmlFor="interest" className="contact__form__label">
            Your Interest
          </label>
          <Select options={interestOptions} name="interest" id="interest" />
        </div>
        <div className="contact__form__section contact__form__text-area-section">
          <label
            htmlFor="details"
            id="details"
            name="details"
            className="contact__form__label"
          >
            Additional Details
          </label>
          <textarea
            name="details"
            id="details"
            className="contact__form__input contact__form__text-area-section__text-area"
          />
        </div>
        <button type="submit" className="contact__form__submit-btn">
          Submit
        </button>
      </form>
    </PageContainer>
  );
};

export default ContactPage;
