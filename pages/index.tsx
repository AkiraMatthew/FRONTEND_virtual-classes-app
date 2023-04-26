import Head from 'next/head';
import styles from '../styles/HomeNoAuth.module.scss';
import HeaderNoAuth from '@/components/homeNoAuth/headerNoAuth';
import PresentationSection from '@/components/homeNoAuth/presentationSection';
import CardsSection from '@/components/homeNoAuth/cardsSection';
import SlideSection from '@/components/homeNoAuth/slideSection';
import { GetStaticProps } from 'next';
import courseService, { CourseType } from '@/services/courseService';
import { ReactNode, useEffect } from 'react';
import Footer from '@/components/common/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IndexPageProps {
    children: ReactNode;
    course: CourseType[];
}

const HomeNoAuth = ({ course }: IndexPageProps) => {
    useEffect(() => {
        AOS.init();
    }, []);

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
            <main>
                <div
                    className={styles.sectionBackground}
                    data-aos="fade-zoom-in"
                    data-aos-duration="1600"
                >
                    <HeaderNoAuth />
                    <PresentationSection />
                </div>
                <div data-aos="fade-right" data-aos-duration="1200">
                    <CardsSection />
                </div>
                <div data-aos="fade-up" data-aos-duration="1350">
                    <SlideSection newestCourses={course} />
                </div>
                <Footer />
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
