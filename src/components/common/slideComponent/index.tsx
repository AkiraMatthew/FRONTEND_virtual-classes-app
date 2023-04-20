import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { CourseType } from '@/services/courseService';
import SlideCard from '../slideCard';

interface props {
    course: CourseType[];
}

const SlideComponent = function ({ course }: props) {
    return (
        <>
            {/* The guide from the Splide slides */}
            <Splide
                options={{
                    type: 'loop',
                    perPage: 4,
                    perMove: 1,
                    pagination: false,
                }}
            >
                {/* When we're using react, we change the {} to () */}
                {course?.map((course) => (
                    <SplideSlide key={course.id}>
                        <SlideCard course={course} />
                    </SplideSlide>
                ))}
            </Splide>
        </>
    );
};

export default SlideComponent;
