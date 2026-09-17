import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            param: {
                q,
                type,
            },
        });
        return res.users;
    } catch (error) {
        console.log(error);
    }
};
