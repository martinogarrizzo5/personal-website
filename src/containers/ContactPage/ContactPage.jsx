import PageContainer from "../../utils/PageContainer";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <PageContainer className="contact">
      <h1 className="contact__header is-title">
        Want To Contact Me? I'll really appreciate it!
      </h1>
      <form className="contact__form">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div>
          <label for="interest">Your Interest</label>
          <input type="select" id="interest" name="interest" />
        </div>
        <div>
          <label for="details" id="details" name="details">
            Additional Details
          </label>
          <textarea name="details" id="details" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </PageContainer>
  );
};

export default ContactPage;
