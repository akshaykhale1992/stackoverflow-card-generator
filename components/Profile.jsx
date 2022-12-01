import React from "react";
import * as htmlToImage from 'html-to-image';

const Profile = ({ profileDetails }) => {
  return (
    <>
      <section id="ProfileSection" className="bg-gray-200 p-5 w-60 rounded-md text-center">
        <a
          className="text-xs mt-1 text-gray-600 underline"
          target="_blank"
          rel="noreferrer"
          href={profileDetails.link}
        >
          <img className="w-7" src="./stack-overflow.png" alt="StackOverflow" />
        </a>
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
      <input
        onClick={() => {
          htmlToImage.toPng(document.getElementById('ProfileSection'))
            .then(function (dataUrl) {
              const link = document.createElement('a')
              link.download = 'stackoverflow-profile.png'
              link.href = dataUrl
              link.click()
            });
        }}
        className="py-2 px-4 mt-3 rounded-md bg-blue-500 text-white font-extrabold border-2 cursor-pointer"
        value="Generate"
        type="button"
      />
    </>
  );
};

export default Profile;
