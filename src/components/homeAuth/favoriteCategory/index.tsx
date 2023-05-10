import useSWR from 'swr';
import styles from '../../../../styles/slideCategory.module.scss';
import courseService from '@/services/courseService';
import SlideComponent from '@/components/common/slideComponent';
import PageSpinner from '@/components/spinner';

const FavoriteCategory = function () {
    //creating the SWR use
    const { data, error } = useSWR('/favorites', courseService.getFavCourses);

    if (error) return error;
    if (!data){
        return <PageSpinner />;
    }

    return (
        <>
            <p className={styles.titleCategory}>MY LIST</p>
            {/* there is 2 states on the course favorites, if a favorite exists or if it does not exist */}
            {data.data.courses.length >= 1 ? (
                <SlideComponent course={data.data.courses} />
            ) : (
                <p className="text-center pt-3 h5">
                    <strong>You still have no courses on the list</strong>
                </p>
            )}
        </>
    );
};

export default FavoriteCategory;
