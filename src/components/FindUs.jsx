import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold my-3"> Find Us On</h2>

      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn  join-item justify-start">
          <FaFacebook />
          Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter />
          Twitter
        </button>
        <button className="btn join-item justify-start">
          <RiInstagramFill />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
