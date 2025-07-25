import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Category from './Category';
import Category1 from './Category1';
import Habout from '../../layouts/Habout';
import Trending from './Trending';
import Condos from './Condos';
import Cta from './Cta';
import Bestselling from './Bestselling';
import Ourcategory from './Ourcategory';
import Handpick from './Handpick';
import Ourproducts from '../../layouts/Ourproducts';
import Saleproducts from './Saleproducts';
import Counter from './Counter';
import Onsale from './Onsale';
import Video from './Video';
import Latestproducts from '../../layouts/Latestproducts';
import Blog from './Blog';
import Handpicked from '../homethree/Handpicked';
class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <Category/>
                <Category1/>
                <Handpicked />
                <Cta />
                <Trending/>
                <Condos/>
                <Bestselling/>
                <Ourcategory/>
                <Handpick/>
                <Ourproducts/>
                {/* <Saleproducts/> */}
                <Counter/>
                <Onsale/>
                <Video/>
                <Latestproducts/>
                {/* <Habout /> */}
                <Blog/>
            </Fragment>
        );
    }
}

export default Content;