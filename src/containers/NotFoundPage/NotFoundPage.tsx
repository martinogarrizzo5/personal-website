import { FC } from "react";
import PageContainer from "../../utils/PageContainer";

import NotFounImg from "./not-found-img.svg";
import "./NotFoundPage.scss";

const NotFoundPage: FC = () => {
  return (
    <PageContainer className="not-found">
      <img src={NotFounImg} alt="not-found-img" className="not-found__img" />
      <h1 className="not-found__title">Oh No!</h1>
      <p className="not-found__sub-title">
        It seems you are trying to access a page that doesn't exist... or maybe
        it's only trying to hide from you...
      </p>
    </PageContainer>
  );
};

export default NotFoundPage;
