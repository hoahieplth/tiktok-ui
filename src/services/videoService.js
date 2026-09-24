import { pixabayRequest } from '~/utils/httpRequest';
const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
export const getVideos = async (q = 'gaming') => {
    try {
        const res = await pixabayRequest.get('videos/', {
            params: {
                key: API_KEY,
                q: q,
                per_page: 10,
            },
        });
        return res.data.hits;
    } catch (error) {
        console.log('STATUS:', error.response?.status);
        console.log('PIXABAY ERROR:', error.response?.data);
    }
};
