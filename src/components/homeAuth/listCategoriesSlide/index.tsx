import styles from '../../../../styles/slideCategory.module.scss';
import SlideComponent from '@/components/common/slideComponent';
import PageSpinner from '@/components/spinner';
import categoriesService from '@/services/categoriesService';
import useSWR from 'swr';

interface props {
    categoryId: number;
    categoryName: string;
}

const ListCategoriesSlide = function ({ categoryId, categoryName }: props) {
    //creating the SWR use
    const { data, error } = useSWR(`/coursesList/${categoryId}`, () =>
        categoriesService.getCourses(categoryId)
    );

    if (error) return error;
    if (!data) {
        return <PageSpinner />;
    }
    return (
        <>
            <p className={styles.titleCategory}>{categoryName}</p>
            <SlideComponent course={data.data.courses} />
        </>
    );
};

export default ListCategoriesSlide;
