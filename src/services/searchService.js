import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
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
