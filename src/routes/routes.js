import config from '~/config';

import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';
import LiveCategory from '~/pages/LiveCategory';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: '/:nickname', component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: `${config.routes.live}/category/:category`, component: LiveCategory },
    { path: config.routes.live, component: Live },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
