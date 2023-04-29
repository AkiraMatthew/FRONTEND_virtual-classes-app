import HeaderAuth from '@/components/common/headerAuth';
import FeaturedSection from '@/components/homeAuth/featuredSection';
import Head from 'next/head';

const HomeAuth = function () {
    return (
        <>
            <Head>
                <title>Platform - Home</title>
                <link rel="icon" href="/imgs/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                {/* <HeaderAuth /> */}
                <FeaturedSection/>
            </main>
        </>
    );
};

export default HomeAuth;
