import { useState } from "react";
import firebase from "../../firebase";

import ThanksImg from "./thanks-2.png";
import PageContainer from "../../utils/PageContainer";
import Select from "../../components/Select/Select";

import "./ContactPage.scss";

const ContactPage = () => {
  const contactMessagesDB = firebase.firestore().collection("messages");

  const [formValues, setFormValues] = useState({
    name: null,
    email: null,
    interest: null,
    details: null,
  });

  const [isMessageSentSuccessfully, setMessageSentSuccessfully] =
    useState(false);

  const handleFormValues = e => {
    const newVal = e.target.value;
    const propName = e.target.name;

    setFormValues({
      ...formValues,
      [propName]: newVal,
    });
  };

  const storeMessage = async () => {
    let isRequestValid = true;
    try {
      await contactMessagesDB.add({
        name: formValues.name,
        email: formValues.email,
        interest: formValues.interest,
        details: formValues.details,
      });
    } catch {
      isRequestValid = false;
    }

    if (isRequestValid) setMessageSentSuccessfully(true);
  };

  const submitForm = e => {
    e.preventDefault();
    storeMessage();
  };

  const interestOptions = [
    "Work together",
    "Just say hello!",
    "Drink a coffee together",
  ];

  const notification = (
    <div className="contact__notification">
      <h3 className="contact__notification__title is-title">
        You Are The Best!
      </h3>

      <img
        src={ThanksImg}
        alt="thanks-img"
        className="contact__notification__img"
      />
      <h5 className="contact__notification__sub-title">
        I received your message and I'll answer to all your questions as soon as
        possible. Thanks!
      </h5>
    </div>
  );

  const form = (
    <>
      <h1 className="contact__header is-title">
        Want To Contact Me? I'll really appreciate it!
      </h1>
      <form className="contact__form" onSubmit={submitForm}>
        <div className="contact__form__section">
          <label htmlFor="name" className="contact__form__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact__form__input"
            onChange={handleFormValues}
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
            onChange={handleFormValues}
            required
          />
        </div>
        <div className="contact__form__section contact__form__select">
          <label htmlFor="interest" className="contact__form__label">
            Your Interest
          </label>
          <Select
            options={interestOptions}
            name="interest"
            id="interest"
            onChange={handleFormValues}
          />
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
            onChange={handleFormValues}
          />
        </div>
        <button type="submit" className="contact__form__submit-btn">
          Submit
        </button>
      </form>
    </>
  );

  return (
    <PageContainer className="contact">
      {isMessageSentSuccessfully ? notification : form}
    </PageContainer>
  );
};

export default ContactPage;
