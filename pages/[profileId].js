import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'


const fetchProfileDetails = async (profileId) => {
  const response = await fetch(`https://api.stackexchange.com/2.3/users/${profileId}?order=desc&sort=reputation&site=stackoverflow`);
  return response.json();
}

export async function getServerSideProps(context) {
  const { profileId } = context.query
  const response = await fetchProfileDetails(profileId);
  const profileDetails = response.items[0];
  return {
    props: {
      profileDetails
    },
  }
}

export default function ProfileDetails({ profileDetails }) {
  const [profileId, setProfileId] = React.useState(false);
  return (
    <div>
      <Head>
        <title>Stackoverflow Card Generator</title>
        <meta name="description" content="Stackoverflow Card Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex flex-col items-center justify-center my-10">
        <h1 className="my-10 font-semibold text-4xl">Here is your stackoverflow card: {profileDetails.display_name}</h1>
        <section className="bg-gray-200 p-5 w-60 rounded-md text-center" >
          <img className="w-7" src="./stack-overflow.png" alt="StackOverflow" />
          <img src={profileDetails.profile_image} alt="User Profile" className="w-28 mx-auto rounded-full" />
          <div className="mt-4 font-bold text-xl">{profileDetails.display_name}</div>
          <div className="w-28 h-[1px] mt-2 bg-gray-300 mx-auto"></div>
          <div>
            <div className="text-3xl mt-2 text-yellow-600">{profileDetails.reputation}</div>
            <div className="text-xs mt-1 text-gray-600">StackOverflow Reputation</div>
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
      </main>
    </div>
  )
}
