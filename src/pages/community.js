import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/community/hero'
import CoffeeShopConnections from '../components/community/coffee-shop-connections'
import MountainBikeFellowship from '../components/community/mountain-bike-fellowship'

const Community = () => {

return(
    <Layout>
        <Hero />
        <CoffeeShopConnections />
        <MountainBikeFellowship  />
    </Layout>
    )
}

export default Community;