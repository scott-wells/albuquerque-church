import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/community/hero'
import CoffeeShopConnections from '../components/community/coffee-shop-connections'
import MountainBikeFellowship from '../components/community/mountain-bike-fellowship'
import OtherEvents from '../components/community/other-events';

const Community = () => {

return(
    <Layout>
        <Hero />
        <OtherEvents />
        <CoffeeShopConnections />
        <MountainBikeFellowship  />
    </Layout>
    )
}

export default Community;