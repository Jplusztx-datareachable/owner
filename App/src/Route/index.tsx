/**
 * file: Project Router File
 * date: 2020-07-21
 * author: Frank
 * lastModify: Frank 2020-07-21
 */
import React, { ReactElement, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Row, Col } from 'antd';
import style from './style.scss';
import { ProvideAuth, useAuth } from './use-auth';
/* <------------------------------------ **** Lazy Loading all the pages START **** ------------------------------------ */

const HomePage = React.lazy(() => import(/* webpackChunkName: 'HomePage' */ '../Pages/HomePage'));

/* <------------------------------------ **** Lazy Loading all the pages END **** ------------------------------------ */

const RootRouter = (): JSX.Element => {
    /** private route */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const PrivateRoute = ({ children }) => {
        // get context params
        const auth = useAuth();
        return (
            <Route
                render={() =>
                    // if not login, redirect to login page
                    auth.loginStatus ? (
                        (children as ReactElement)
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login_redirect',
                            }}
                        />
                    )
                }
            />
        );
    };
    return (
        <ProvideAuth>
            <Suspense
                fallback={
                    /* <------------------------------------ **** Loading Animation START **** ------------------------------------ */
                    <div>
                        <div>
                            <Row className={style.loadingWrapper} align="middle">
                                <Col className={style.loadingFormCol}>
                                    <div className={style.loadingPageWrapper}>
                                        <div className={style.loadingPageTitle}>DataReachable</div>
                                        <div className={style.loadingAnimation}>
                                            <div className={style.cubeGrid}>
                                                <div className={style.loadingCube1} />
                                                <div className={style.loadingCube2} />
                                                <div className={style.loadingCube3} />
                                                <div className={style.loadingCube4} />
                                                <div className={style.loadingCube5} />
                                                <div className={style.loadingCube6} />
                                                <div className={style.loadingCube7} />
                                                <div className={style.loadingCube8} />
                                                <div className={style.loadingCube9} />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    /* <------------------------------------ **** Loading Animation END **** ------------------------------------ */
                }
            >
                <Router>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                    </Switch>
                </Router>
            </Suspense>
        </ProvideAuth>
    );
};

export default RootRouter;
