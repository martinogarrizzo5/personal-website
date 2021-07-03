import { useState, ChangeEvent, FormEvent, FC } from "react";
import firebase from "../../firebase";

import ThanksLightImg from "./images/thanks-light.png";
import ThanksDarkImg from "./images/thanks-dark.svg";

import PageContainer from "../../utils/PageContainer";
import Select from "../../components/Select/Select";
import { Themes } from "../../utils/themeManagement";

import "./ContactPage.scss";

interface ContactPageProps {
  theme: Themes;
}

const ContactPage: FC<ContactPageProps> = props => {
  const contactMessagesDB = firebase.firestore().collection("messages");

  const [formValues, setFormValues] = useState({
    name: null,
    email: null,
    interest: null,
    details: null,
  });

  const interestOptions: string[] = [
    "Work together",
    "Just say hello!",
    "Drink a coffee together",
  ];

  const [isMessageSentSuccessfully, setMessageSentSuccessfully] =
    useState<boolean>(false);

  const handleFormValues = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newVal = e.target.value;
    const propName = e.target.name;

    setFormValues({
      ...formValues,
      [propName]: newVal,
    });
  };

  const storeMessage = async () => {
    let isRequestValid: boolean = true;
    try {
      const newDocument = {
        name: formValues.name,
        email: formValues.email,
        interest: formValues.interest,
        details: formValues.details,
      };
      await contactMessagesDB.add(newDocument);
    } catch {
      isRequestValid = false;
    }

    if (isRequestValid) setMessageSentSuccessfully(true);
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    storeMessage();
  };

  const notification = (
    <div className="contact__notification">
      <h3 className="contact__notification__title is-title">
        You Are The Best!
      </h3>
      <img
        src={props.theme === Themes.dark ? ThanksDarkImg : ThanksLightImg}
        alt="thanks-img"
        className={
          props.theme === Themes.dark
            ? "contact__notification__img--dark"
            : "contact__notification__img--light"
        }
      />
      <h5 className="contact__notification__sub-title">
        I've received your message and I'll answer to all your questions as soon
        as possible. Thanks!
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
