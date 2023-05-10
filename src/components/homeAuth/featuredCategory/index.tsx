import useSWR from 'swr';
import styles from '../../../../styles/slideCategory.module.scss';
import courseService from '@/services/courseService';
import SlideComponent from '@/components/common/slideComponent';
import PageSpinner from '@/components/spinner';

const FeaturedCategory = function () {
    //creating the SWR use
    const { data, error } = useSWR('/featured', courseService.getFeaturedCourses);

    if (error) return error;
    if (!data) {
        return <PageSpinner />;
    }

    return (
        <>
            <p className={styles.titleCategory}>FEATURED</p>
            <SlideComponent course={data.data} />
        </>
    );
};

export default FeaturedCategory;
