import Head from 'next/head'
import styles from '../styles/Home.module.css'
import beerService from '../services/beerService'
import BeerList from '../components/BeerList';

export default function Home({ beerData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BeerList beerData={beerData}/>
        
      </main>

      <footer className={styles.footer}>
        <p>beer5-app</p>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  // get data
  const beerData = await beerService.getBeers();

	return {
		props: {
			beerData
		}
	}
}