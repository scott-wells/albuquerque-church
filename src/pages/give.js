import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout';

const Give = () => {
    return (
        <Layout>
            <div class="give-hero d-flex px-1 px-sm-5" >
                <div class="container align-self-center px-4">
                <h1>Give</h1>
                </div>
            </div>
            <div class="give-main container px-0">
                <div class="give-main-text row row-cols-1 g-4 px-2 pb-5 mx-auto">
                    <h2 class="text-center">Donations & Offerings</h2>
                    <div class="col text-center">
                        <p>Donations may be given one-time or on a recurring basis, via ACH (bank transfer), debit card, or credit card.</p>
                        <br/>
                        <Link to="https://donorbox.org/abq-church-offerings" class="btn btn-dark btn-outline btn-lg" role="button">
                            Give now &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </Link>
                        <br/>
                        <br/>
                        <br/>
                        <p>Albuquerque Church is a 501(c)(3) charitable organization. All contributions are tax deductible. No goods or services will be provided in exchange for your contribution.</p>
                    </div>
                </div>
                <div class="give-main-bar container-fluid"></div>
                <div class="give-main-scripture container-fluid px-4">
                    <blockquote class="col mx-auto px-5 text-center">
                    "So let each one give as he purposes in his heart, not grudgingly or of necessity; for God loves a cheerful giver."  <br/><small>2 Corinthians 9:7</small>
                    </blockquote>
                </div>
            </div>
        </Layout>
    );
}

export default Give;