import Head from "next/head";
import Heading from "../components/Heading";
import Image from 'next/image'
import mountains from "../public/mountains.jpg"
import styles from "../styles/Home.module.scss";

const Home = () => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Next.js Application" />
   
    <Image
      alt="Mountains"
      src={mountains}
      placeholder="blur"
      width={700}
      height={475}
    />
    
  </div>
);

export default Home;