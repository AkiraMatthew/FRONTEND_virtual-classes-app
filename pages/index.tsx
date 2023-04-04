import Head from "next/head";
import styles from '../styles/HomeNoAuth.module.scss';

const HomeNoAuth = () => {
    return (
        <>
            <Head>
                <title>OneBitFlix</title>
                <link rel="icon" href="/imgs/favicon.svg" type="image/x-icon" />
                <meta property="og:title" content="OneBitFlix" key="title" />
                <meta 
                    name="description"
                    content="Have access to the best content for your developer journey"
                />
            </Head>
            <main></main>
        </>
    );
};

export default HomeNoAuth