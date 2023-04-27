import Head from 'next/head';

const HomeAuth = function () {
    return (
        <>
            <Head>
                <title>Platform - Home</title>
                <link rel="icon" href="/imgs/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <p>You&#39;re logged in</p>
            </main>
        </>
    );
};

export default HomeAuth;
