import { React, useRef } from "react";
import Share from "./Share";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

const Profile = ({ profileDetails }) => {
  const cardRef = useRef(null);
  const imgQualityMultiplier = 3.0;

  const filter = (node) => {
    // console.log(node.id);
    return node.id != "hide-in-card";
  }

  const onDownloadClick = () => {
    htmlToImage.toPng(cardRef.current, { filter: filter, canvasHeight: imgQualityMultiplier * cardRef.current.clientHeight, canvasWidth: imgQualityMultiplier * cardRef.current.clientWidth, cacheBust: true })
      .then(function (dataUrl) {
        const link = document.createElement('a')
        link.download = `${profileDetails.display_name}.png`
        link.href = dataUrl
        link.click();
      })
      .catch(function (err) {
        console.error("Oops! an error occurred while downloading", err);
      });
  }

  return (
    <section className="bg-gray-200 p-5 w-60 rounded-md text-center relative" ref={cardRef}>
      <div className="flex flex-row mb-4 justify-between">
        <a
          className="text-xs text-gray-600 underline inline-block"
          target="_blank"
          rel="noreferrer"
          href={profileDetails.link}
        >
          <img className="w-7" src="./stack-overflow.png" alt="StackOverflow" crossOrigin="anonymous" />
        </a>
        <Share onDownloadPng={onDownloadClick} />
      </div>

      <img
        src={profileDetails.profile_image}
        alt="User Profile"
        className="w-28 mx-auto rounded-full"
      />
      <div className="mt-4 font-bold text-xl">
        {profileDetails.display_name}
      </div>
      <a
        className="text-xs mt-1 text-gray-600 underline"
        target="_blank"
        rel="noreferrer"
        href={profileDetails.website_url}
      >
        {profileDetails.website_url}
      </a>
      <div className="w-28 h-[1px] mt-2 bg-gray-300 mx-auto"></div>
      <div>
        <div className="text-3xl mt-2 text-yellow-600">
          {profileDetails.reputation}
        </div>
        <div className="text-xs mt-1 text-gray-600">
          StackOverflow Reputation
        </div>
      </div>
      <div className="w-28 mt-2 h-[1px] bg-gray-300 mx-auto"></div>
      <div>
        <div className="text-xs mt-2 text-gray-600">Badges</div>
        <div className="flex justify-center gap-5 mt-3">
          <div>
            <div className="w-3 h-3 mx-auto rounded-full bg-yellow-500 mb-1" />
            <div>{profileDetails.badge_counts.gold}</div>
          </div>
          <div>
            <div className="w-3 h-3 mx-auto rounded-full bg-gray-500 mb-1" />
            <div>{profileDetails.badge_counts.silver}</div>
          </div>
          <div>
            <div className="w-3 h-3 mx-auto rounded-full bg-yellow-700 mb-1" />
            <div>{profileDetails.badge_counts.bronze}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
