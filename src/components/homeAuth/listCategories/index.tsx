import categoriesService, { CategoryType } from '@/services/categoriesService';
import useSWR from 'swr';
import ListCategoriesSlide from '../listCategoriesSlide';
import PageSpinner from '@/components/spinner';

const ListCategories = function () {
    //creating the SWR use
    const { data, error } = useSWR('/categoriesList', categoriesService.getCategories);

    if (error) return error;
    if (!data) {
        return <PageSpinner />;
    }

    return (
        <>
            {data.data.categories?.map((category: CategoryType) => (
                <ListCategoriesSlide
                    key={category.id}
                    categoryId={category.id}
                    categoryName={category.name}
                />
            ))}
        </>
    );
};

export default ListCategories;
