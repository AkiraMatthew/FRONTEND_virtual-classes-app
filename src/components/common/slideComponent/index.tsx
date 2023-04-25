import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { CourseType } from '@/services/courseService';
import SlideCard from '../slideCard';

interface props {
    course: CourseType[];
}

const SlideComponent = function ({ course }: props) {
    let slideCount = 0;

    if (course.length > 4) {
        slideCount = 4;
    } else if (course.length < 4) {
        slideCount = course.length;
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center py-4">
                {/* The guide from the Splide slides */}
                <Splide
                    options={{
                        type: 'loop',
                        perPage: slideCount,
                        perMove: 1,
                        width: slideCount * 300, //if we have 1 slide, its width will be 300px
                        pagination: false,
                        //this arrows will automatically remove the option from moving sideways if we have more than 4 slides
                        arrows: course.length > 4 ? true : false,
                        //same work for dragging the slide
                        drag: course.length > 4 ? true : false,
                        //breakpoints are basically media queries from the Splide
                        breakpoints: {
                            1200: {
                                perPage: (slideCount >= 2) ? 2 : 1,
                                width: (slideCount >= 2) ? 600 : 300,
                                arrows: course.length > 2 ? true : false,
                                drag: course.length > 2 ? true : false,
                            },
                            600: {
                                perPage: 1,
                                width: 300,
                                arrows: course.length > 1 ? true : false,
                                drag: course.length > 1 ? true : false,
                            },
                            300: {
                                width: 250,
                            },
                        },
                    }}
                >
                    {/* When we're using react, we change the {} to () */}
                    {course?.map((course) => (
                        <SplideSlide key={course.id}>
                            <SlideCard course={course} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    );
};

export default SlideComponent;
