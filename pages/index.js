import Head from 'next/head'

const fetchProfileDetails = async () => {
  const response = {
    items: [
      {
        badge_counts: {
          bronze: 58,
          silver: 49,
          gold: 8
        },
        account_id: 2994917,
        is_employee: false,
        last_modified_date: 1659531900,
        last_access_date: 1665913046,
        reputation_change_year: 312,
        reputation_change_quarter: 20,
        reputation_change_month: 20,
        reputation_change_week: 0,
        reputation_change_day: 0,
        reputation: 7881,
        creation_date: 1372750725,
        user_type: "registered",
        user_id: 2541634,
        accept_rate: 75,
        location: "Mumbai, India",
        website_url: "http://akshaykhale.com/",
        link: "https://stackoverflow.com/users/2541634/akshay-khale",
        profile_image: "https://i.stack.imgur.com/oG6aD.jpg?s=256&g=1",
        display_name: "Akshay Khale"
      }
    ],
    has_more: false,
    quota_max: 10000,
    quota_remaining: 9997
  };
  return response;
}

export async function getServerSideProps(context) {
  const response = await fetchProfileDetails();
  const profileDetails = response.items[0];
  return {
    props: {
      profileDetails
    },
  }
}

export default function Home({ profileDetails }) {
  return (
    <div>
      <Head>
        <title>Stackoverflow Card Generator</title>
        <meta name="description" content="Stackoverflow Card Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex flex-col items-center justify-center my-10">
        <h1 className="my-10 font-semibold text-4xl">Stackoverflow Card generator</h1>
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
        <section className="my-10">
          Generate yours here: asdf
        </section>
      </main>
    </div>
  )
}
