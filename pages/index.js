import Head from 'next/head';
import React from 'react';
import CustomHead from '../components/CustomHead/CustomHead';
import Layout from '../components/Layout/Layout';
import Profile from '../components/Profile';

const fetchProfileDetails = async () => {
  const response = await fetch(
    'https://api.stackexchange.com/2.3/users/2541634?order=desc&sort=reputation&site=stackoverflow'
  );
  return response.json();
};

export async function getServerSideProps() {
  const response = await fetchProfileDetails();
  const profileDetails = response.items[0];
  return {
    props: {
      profileDetails,
    },
  };
}

export default function Home({ profileDetails }) {
  const [profileId, setProfileId] = React.useState(false);
  return (
    <>
      <CustomHead />
      <Layout title="Stackoverflow Card generator">
        <Profile profileDetails={profileDetails} />
        <section className="my-10">
          <div>
            <h1 className="mb-3 font-semibold text-xl text-center">
              Generate your&apos;s here:
            </h1>
            <label
              className="text-sm mt-1 text-gray-600"
              htmlFor="stackoverflow_id"
            >
              StackOverflow ID:{' '}
            </label>
            <input
              onChange={(e) => setProfileId(e.target.value)}
              value={profileId ? profileId : ''}
              id="stackoverflow_id"
              className="border-2 rounded-md px-2"
              type="text"
            />
            <div className="text-center my-3">
              <input
                onClick={() => (window.location.href = `/${profileId}`)}
                className="py-2 px-4 rounded-md bg-blue-500 text-white font-extrabold border-2 cursor-pointer"
                value="Generate"
                type="button"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
