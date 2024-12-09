import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import History from '../views/pages/history';

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/history': History,
};

export default routes;
