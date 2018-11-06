import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipeDashboard from '../components/RecipeDashboard';
import Recipe from '../components/Recipe';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import AddRecipe from '../components/AddRecipe';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={RecipeDashboard} exact={true} />
                <Route path="/add_recipe" component={AddRecipe} />
                <Route path="/view_recipe/:id" component={Recipe} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;