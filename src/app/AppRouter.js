import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { ContextAuth } from './feature/hoc/Context';
import MainHome from './feature/Home/pages/MainHome';
import MainStore from './feature/Home/pages/MainStore';
import { useContext } from 'react';

function AppRouter() {
  const { activateAuth, removeAuth, isAuth } = useContext(ContextAuth);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <MainHome activateAuth={activateAuth} removeAuth={removeAuth} />
        </Route>
        <Route path='/pizzerias'>
          <MainStore isAuth={isAuth} removeAuth={removeAuth} />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
