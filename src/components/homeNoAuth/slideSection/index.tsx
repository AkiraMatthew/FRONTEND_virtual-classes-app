import { CourseType } from '@/services/courseService';
import styles from './style.module.scss';
import { Button, Container } from 'reactstrap';
import SlideComponent from '@/components/common/slideComponent';
import Link from 'next/link';

interface props {
    newestCourses: CourseType[];
}

const SlideSection = function ({ newestCourses }: props) {
    return (
        //now we're going to use the react static, since we're building a static page that does not require too much updates
        <>
            <Container className="d-flex flex-column align-items-center py-5">
                <p className={styles.sectionTitle}>AVAILABLE CLASSES</p>
                <SlideComponent course={newestCourses} />
                <Link href="register">
                    <Button outline color="light" className={styles.slideSectionBtn}>
                        Want to access? Sign In
                    </Button>
                </Link>
            </Container>
        </>
    );
};

export default SlideSection;
