import { Route, Switch,BrowserRouter} from 'react-router-dom';
import Login from '../pages/login';
import HomePage from "../pages/dashboard/homePage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/dashboard'>
                    <HomePage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;