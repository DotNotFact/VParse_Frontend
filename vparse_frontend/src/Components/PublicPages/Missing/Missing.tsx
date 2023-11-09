import { BeatLoader } from "react-spinners";
import "./Missing.css";

export const Missing = () => {
  return (
    <div className="missing-wrapper">
      <div className="missing-container">
        <div className="missing-box">
          <BeatLoader size={10} color="black" loading={true} />
        </div>
      </div>
    </div>
  );
};
