import Head from "next/head";
import styles from "../styles/Home.module.css";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Configure, connectHits } from "react-instantsearch-dom";
import Card from '../components/Card'

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

const Hits = (props) => {
  return props.hits.map((hits, i) => {
    return <Card key={i} {...hits} />;
  });
};
export default function Home() {

  const CustomHits = connectHits(Hits);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <InstantSearch indexName="bestbuy" searchClient={searchClient}>
          <Configure hitsPerPage={20} />
          <SearchBox />
          <div className={styles.hits_container_wrap}>
            <CustomHits />
          </div>
        </InstantSearch>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
