import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/team/Content';

class Team extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Laramiss | Team</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Team'}}/>
                <Content/>
                <Instafeeds/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Team;