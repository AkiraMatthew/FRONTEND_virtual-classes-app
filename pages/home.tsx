import HeaderAuth from '@/components/common/headerAuth';
import FeaturedSection from '@/components/homeAuth/featuredSection';
import NewestCategory from '@/components/homeAuth/newestCategory';
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
                <FeaturedSection />
                <NewestCategory />
            </main>
        </>
    );
};

export default HomeAuth;
