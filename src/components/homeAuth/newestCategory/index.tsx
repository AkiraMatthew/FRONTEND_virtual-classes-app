import SlideComponent from '@/components/common/slideComponent';
import courseService from '@/services/courseService';
import useSWR from 'swr';
import styles from '../../../../styles/slideCategory.module.scss';
import PageSpinner from '@/components/spinner';

const NewestCategory = function () {
    //creating the SWR use
    const { data, error } = useSWR('/newest', courseService.getNewestCourse);

    if (error) return error;
    if (!data){
        return <PageSpinner />;
    }

    return (
        <>
            <p className={styles.titleCategory}>LATEST RELEASES</p>
            <SlideComponent course={data.data} />
        </>
    );
};

export default NewestCategory;
