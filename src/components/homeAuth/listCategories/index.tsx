import styles from '../../../../styles/slideCategory.module.scss'
import categoriesService, { CategoryType } from "@/services/categoriesService";
import useSWR from "swr";

const ListCategories = function () {
    //creating the SWR use
    const { data, error } = useSWR('/listCategories', categoriesService.getCategories);

    if (error) return error;
    if (!data)
        return (
            <>
                <p>Loading...</p>
            </>
        );

    return (
        <>
            { data.data.categories?.map((category: CategoryType) => (
                <div key={category.id}>
                    <p className={styles.titleCategory}>{category.name}</p>
                </div>
            )) }
        </>
    );
};

export default ListCategories;