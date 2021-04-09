import home from '../home/home';
import info from '../info/info';
import infoRouter from '../info/Router';
import userRouter from '../user/Router';

export default function routes(app) {
 // app.use('/info', infoRouter);
  app.use('/user', userRouter);

  // app.get('/home', home);
  // app.get('/', home);
  //
  // app.get('/info', info);
}
