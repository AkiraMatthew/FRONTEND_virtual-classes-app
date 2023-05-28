import Head from 'next/head';
import styles from '../styles/search.module.scss';
import HeaderAuth from '@/components/common/headerAuth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import courseService, { CourseType } from '@/services/courseService';

const Search = function () {
    const router = useRouter();
    const searchName: any = router.query.name;
    const [searchResult, setSearchResult] = useState<CourseType[]>([]);

    const searchCourses = async function () {
        if (searchName === 'string') {
            const res = await courseService.getSearch(searchName);
            console.log('API response:', res.data); // Log the entire response object
            console.log('Search results:', res.data?.courses); // Log the search results
            setSearchResult(res.data?.courses);
        }
    };

    useEffect(() => {
        console.log('searchName:', searchName); // Log the searchName value
        searchCourses();
    }, [searchName]); //if the searchName changes, the useEffect will call the searchCourses function again

    return (
        <>
            <Head>
                <title>Platform - {searchName}</title>
                <link rel="icon" href="/imgs/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <HeaderAuth />
                {searchResult?.map((course) => (
                    <div key={course.id}>
                        <p>{course.name}</p>
                    </div>
                ))}
            </main>
        </>
    );
};

export default Search;
