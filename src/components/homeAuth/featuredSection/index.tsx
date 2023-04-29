import styles from './styles.module.scss';
import useSWR from 'swr'; // the SWR is a facilitator to fetch the backend
import courseService, { CourseType } from '@/services/courseService';
import HeaderAuth from '@/components/common/headerAuth';
import { Button, Container } from 'reactstrap';
import Link from 'next/link';

const FeaturedSection = function(){
    //creating the SWR use
    const { data, error } = useSWR('/featured', courseService.getFeaturedCourses);

    if(error) return error;
    if(!data) return (<><p>Loading...</p></>)

    return (
        <>
            {/* Inside the SWR data, comes another data, that's why we chain it 2 times, then we map the 2nd data to select the featured courses */}
            {/* Remembering that on React we use () instead of {} so the component view can be displayed */}
            {
                data.data?.map((course: CourseType) => (
                    <div key={course.id}>
                        <HeaderAuth />
                        <Container>
                            <p className={styles.title}>{course.name}</p>
                            <p className={styles.description}>{course.synopsis}</p>
                            <Link href={`/courses/${course.id}`}>
                                <Button outline color='light'>
                                    ACCESS NOW
                                    <img src="/imgs/buttonPlay.svg" alt="buttonImage" className={styles.img} />
                                </Button>
                            </Link>
                        </Container>
                    </div>
                ))[0]
            }
        </>
    )
}

export default FeaturedSection;