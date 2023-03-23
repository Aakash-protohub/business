// Components import
import Star from "../Global/Star";
import Button from "../Global/Button";
//Assets import
import RightImage from "../..//assets/Home/whyRight.png";
import { Link } from "react-router-dom";

export default function WhyChooseUs({
  style,
  heading,
  description,
  trustedByText,
  stars,
  reviews,
  onClickEnroll,
}) {
  return (
    <div className="container mx-auto flex px-2 sm:px-5 md:flex-row flex-col items-center justify-between" style={style}>
      <div className="gap-20 flex flex-col items-start md:w-[508px]">
        <div className="gap-6 flex flex-col items-start">
          <p className="font-semibold text-left text-white m-0 md:w-[480px] text-[42px] sm:text-[52px] leading-[normal]">
            {heading}
          </p>
          <p className="text-lg font-normal text-left m-0 md:w-[508px] leading-[30px] text-[rgba(82,82,91,1)]">
            {description}
          </p>
          <Link to={`/proto-blog`}>
          <Button
            type="primary"
            text="ENROLL NOW"
            icon={true}
            style={{ color: "white", padding: "10px 90px" }}
            onClick={onClickEnroll}
            stylecustom="btnGlow"
          />
          </Link>
        </div>
        <div className="h-16 relative text-left font-medium w-[272px]">
          <Star />
          <p className="left-0 top-0 absolute text-lg text-white inline m-0 right-[26.47%] bottom-[53.13%] leading-[30px]">
            {trustedByText}
          </p>
          <p className="right-0 bottom-0 absolute text-base leading-6 inline m-0 left-[59.56%] top-[62.5%] text-[rgba(113,113,122,1)]">
            ({reviews} Reviews)
          </p>
          <p className="bottom-0 absolute text-base leading-6 text-white inline m-0 left-[43.38%] right-[42.28%] top-[62.5%]">
            {stars}/5
          </p>
        </div>
      </div>
      <img src={RightImage} alt="why-choose" className="h-2/3 md:h-[750px]" />
    </div>
  );
}
