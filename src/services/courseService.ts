import api from './api';

export type EpisodeType = {
    id: number;
    name: string;
    synopsis: string;
    order: number;
    videoUrl: string;
    secondsLong: number;
};

export type CourseType = {
    id: number;
    name: string;
    thumbnailUrl: string;
    synopsis: string;
    episodes?: EpisodeType;
    featured: true;
};

const courseService = {
    getNewestCourse: async () => {
        const res = await api.get('/courses/newest').catch((error) => {
            return error.response;
        });

        return res;
    },
    getFeaturedCourses: async () => {
        //The backend route is protected from now on, so we always will need the session token
        const token = sessionStorage.getItem('platform-token');

        const res = await api
            .get('/courses/featured', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .catch((error) => {
                return error.response;
            });

        return res;
    },
    //protection the favorite route
    addToFav: async (courseId: number | string) => {
        const token = sessionStorage.getItem('platform-token');

        const res = await api
            .post(
                '/favorites',
                { courseId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .catch((error) => {
                return error.response;
            });

        return res;
    },
    removeFav: async (courseId: number | string) => {
        const token = sessionStorage.getItem('platform-token');

        const res = await api
            .delete('/favorites', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: { courseId },
            })
            .catch((error) => {
                return error.response;
            });

        return res;
    },
    getFavCourses: async () => {
        const token = sessionStorage.getItem('platform-token');

        const res = await api
            .get('/favorites', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .catch((error) => {
                return error.response;
            });

        return res;
    },
    getSearch: async (name: string) => {
        const token = sessionStorage.getItem('platform-token');

        const res = await api
            .get(`/courses/search?name=${name}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .catch((error) => {
                console.log(error.response.data.message);

                return error.response;
            });

        console.log(`service: ${res}`);

        return res;
    },
};

export default courseService;
