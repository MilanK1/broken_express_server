import home from '../home/home';

import infoRouter from '../info/Router';
import userRouter from '../user/Router';

export default function routes(app) {
  app.use('/info', infoRouter);
  app.use('/user', userRouter);

   app.use('/home', home);
  // app.get('/', home);
  //
  // app.get('/info', info);
}
