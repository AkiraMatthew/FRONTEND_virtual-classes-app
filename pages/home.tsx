import HeaderAuth from '@/components/common/headerAuth';
import FavoriteCategory from '@/components/homeAuth/favoriteCategory';
import FeaturedCategory from '@/components/homeAuth/featuredCategory';
import FeaturedSection from '@/components/homeAuth/featuredSection';
import ListCategories from '@/components/homeAuth/listCategories';
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
                <FavoriteCategory />
                <FeaturedCategory />
                <ListCategories />
            </main>
        </>
    );
};

export default HomeAuth;
