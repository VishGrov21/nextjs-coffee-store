import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import styles from "../styles/Home.module.css";
import coffeeStores from "../data/coffee-stores.json";

export const getStaticProps = async (context) => {
  return {
    props: {
      coffeeStores,
    }, // will be passed to the page component as props
  };
};

export default function Home(props) {
  const onBannerButtonClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connosieur</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Coffee Connosieur</h1>
        <Banner buttonText='View stores nearby' handleOnClick={onBannerButtonClick} />
        <div className={styles.heroImage}>
          <Image src='/static/hero-image.png' width={700} height={400} />
        </div>
        <div className={styles.cardLayout}>
          {props.coffeeStores.map((store, index) => (
            <Card
              className={styles.card}
              name={store.name}
              imgUrl={store.imgUrl}
              href={`/coffee-store/${store.id}`}
              key={store.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
