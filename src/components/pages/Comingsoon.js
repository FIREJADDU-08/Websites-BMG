import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Content from '../sections/comingsoon/Content';

class Comingsoon extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Laramiss | Coming Soon</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Content/>
            </Fragment>
        );
    }
}

export default Comingsoon;