import React from 'react'
import {
    Switch, Route, Redirect
} from "react-router-dom";

import { Navbar } from '../components/ui/NavBar';
import { MarvelPage } from '../components/marvel/MarvelPage';
import { HeroePage } from '../components/heroes/HeroePage';
import { DcPage } from '../components/dc/DcPage';
import { SearchPage } from '../components/search/SearchPage';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelPage} />
                    <Route exact path="/hero/:heroId" component={HeroePage} />
                    <Route exact path="/dc" component={DcPage} />
                    <Route exact path="/search" component={SearchPage} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
