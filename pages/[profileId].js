import React from 'react';
import CustomHead from '../components/CustomHead/CustomHead';
import Layout from '../components/Layout/Layout';
import Profile from '../components/Profile';

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
    <>
      <CustomHead />
      <Layout
        title={`Here is your stackoverflow card: ${profileDetails.display_name}`}
      >
        <Profile profileDetails={profileDetails} />
      </Layout>
    </>
  );
}
