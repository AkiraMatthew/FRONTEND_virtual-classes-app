import Head from 'next/head';
import styles from '../styles/search.module.scss';
import HeaderAuth from '@/components/common/headerAuth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CourseType } from '@/services/courseService';

const Search = function () {
    const router = useRouter();
    const searchName = router.query.name;
    const [searchResult, setSearchResult] = useState<CourseType[]>([]);

    return (
        <>
            <Head>
                <title>Platform - {searchName}</title>
                <link rel="icon" href="/imgs/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <HeaderAuth />
            </main>
        </>
    );
};

export default Search;
