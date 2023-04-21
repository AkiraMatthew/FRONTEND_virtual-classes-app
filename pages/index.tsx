import Head from 'next/head';
import styles from '../styles/HomeNoAuth.module.scss';
import HeaderNoAuth from '@/components/homeNoAuth/headerNoAuth';
import PresentationSection from '@/components/homeNoAuth/presentationSection';
import CardsSection from '@/components/homeNoAuth/cardsSection';
import SlideSection from '@/components/homeNoAuth/slideSection';
import { GetStaticProps } from 'next';
import courseService, { CourseType } from '@/services/courseService';
import { ReactNode } from 'react';

interface IndexPageProps {
    children: ReactNode;
    course: CourseType[];
}

const HomeNoAuth = ({ course }: IndexPageProps) => {
    return (
        <>
            <Head>
                <title>OneBitFlix</title>
                <link rel="icon" href="/imgs/favicon.svg" type="image/x-icon" />
                <meta property="og:title" content="OneBitFlix" key="title" />
                <meta name="description" content="Have access to the best content for your developer journey" />
            </Head>
            <main>
                <div className={styles.sectionBackground}>
                    <HeaderNoAuth />
                    <PresentationSection />
                </div>
                <CardsSection />
                <SlideSection newestCourses={course} />
            </main>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await courseService.getNewestCourse();
    return {
        props: {
            course: res.data,
        },
        //To update the courses in a 1 day interval, we use the ISR(incremental stat regeneration)
        revalidate: 3600 * 24, //each day, it will verify in a 1 day interval the course update
    };
};

export default HomeNoAuth;
