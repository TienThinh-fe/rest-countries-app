import { useParams } from "react-router-dom";
import { Header, DetailContent } from "./components";

import RightArrowIcon from "./assets/right-arrow.webp";

function Detail() {
  const { slug } = useParams();

  return (
    <div className="detail">
      <Header />
      <div className="detail__back">
        <span className="detail__back--content">
          <img src={RightArrowIcon} alt="Right Arrow" />
          <span>Back</span>
        </span>
      </div>
      <DetailContent />
    </div>
  );
}

export default Detail;
