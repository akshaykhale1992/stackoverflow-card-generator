import Head from "next/head";
import React from "react";
import Profile from "../components/Profile";

const fetchProfileDetails = async (profileId) => {
  const response = await fetch(
    `https://api.stackexchange.com/2.3/users/${profileId}?order=desc&sort=reputation&site=stackoverflow`
  );
  return response.json();
};

export async function getServerSideProps(context) {
  const { profileId } = context.query;
  const response = await fetchProfileDetails(profileId);
  const profileDetails = response.items[0];
  return {
    props: {
      profileDetails,
    },
  };
}

export default function ProfileDetails({ profileDetails }) {
  const [profileId, setProfileId] = React.useState(false);
  return (
    <div>
      <Head>
        <title>Stackoverflow Card Generator</title>
        <meta name="description" content="Stackoverflow Card Generator" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex flex-col items-center justify-center my-10">
        <h1 className="my-10 font-semibold text-4xl">
          Here is your stackoverflow card: {profileDetails.display_name}
        </h1>
        <Profile profileDetails={profileDetails} />
      </main>
    </div>
  );
}
