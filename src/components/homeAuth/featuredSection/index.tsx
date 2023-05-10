/* eslint-disable @next/next/no-img-element */
import courseService, { CourseType } from '@/services/courseService';
import styles from './styles.module.scss';
import useSWR from 'swr'; // the SWR is a facilitator to fetch the backend
import HeaderAuth from '@/components/common/headerAuth';
import { Button, Container } from 'reactstrap';
import Link from 'next/link';
import PageSpinner from '@/components/spinner';

const FeaturedSection = function () {
    //creating the SWR use
    const { data, error } = useSWR('/featured', courseService.getFeaturedCourses);

    if (error) return error;
    if (!data){
        return <PageSpinner />;
}

    return (
        <>
            {/* Inside the SWR data, comes another data, that's why we chain it 2 times, then we map the 2nd data to select the featured courses */}
            {/* Remembering that on React we use () instead of {} so the component view can be displayed */}
            {
                data.data?.map((course: CourseType) => (
                    <div
                        style={{
                            backgroundImage: `linear-gradient(to-bottom, #6666661a, #151515), 
                            url(${process.env.NEXT_PUBLIC_BASEURL}/thumbnails/${course.thumbnailUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '480px',
                        }}
                        key={course.id}
                    >
                        <HeaderAuth />
                        <Container className="pt-5">
                            <p className={styles.title}>{course.name}</p>
                            <p className={styles.description}>{course.synopsis}</p>
                            <Link href={`/courses/${course.id}`}>
                                <Button outline color="light" className={styles.button}>
                                    <p className="linkUnderline">ACCESS NOW</p>
                                    <img
                                        src="/imgs/buttonPlay.svg"
                                        alt="buttonImage"
                                        className={styles.buttonImg}
                                    />
                                </Button>
                            </Link>
                        </Container>
                    </div>
                ))[0]
            }
        </>
    );
};

export default FeaturedSection;
