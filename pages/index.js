import client from "../apolloClient";
import Head from "next/head";
import LandingPage from "./landing-page";

import { GET_HIDDEN_GEMS, GET_MOST_POPULAR_CARDS } from "../graphql/queries";

export default function Home({ mostPopulars, hiddenGems }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
      </Head>

      <LandingPage mostPopulars={mostPopulars} hiddenGems={hiddenGems} />
    </>
  );
}

export async function getStaticProps() {
  const mostPopulars = await client.query({
    query: GET_MOST_POPULAR_CARDS,
  });

  const hiddenGems = await client.query({
    query: GET_HIDDEN_GEMS,
  });

  const [firstResponse, secondResponse] = await Promise.all([
    mostPopulars,
    hiddenGems,
  ]);

  return {
    props: {
      mostPopulars: firstResponse.data.mostPopulars,
      hiddenGems: secondResponse.data.hiddenGems,
    },
  };
}
