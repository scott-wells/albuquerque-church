# Albuquerque Church Install

1. Clone project from Github - https://github.com/scott-wells/albuquerque-church.git

2. Install node_modules - `npm install`
    - make sure *mitt* and *bootstrap-icons* packages are installed in your dependencies

3. Look at these **[docs](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/tutorials/index.md)** for more detail on setting up the `gatsby-wordpress-starter`. Or check out the `README.md`.

4. Search for and install these two plugins on the client's Wordpress instance: **WPGatsby**, **WPGraphQL**.

5. Now that it's installed, go to the GraphQL section of Wordpress. Copy the *endpoint url* (it should look something like - http://albuquerquechurch.local/graphql). 

6. Open the project in your preferred IDE and go to `gatsby-config.js`. **WPGraphQL** just needs the endpoint url in order to connect to Gatsby. Near *line 33*, replace the url under `gatsby-source-wordpress` with the url you copied from Wordpress.

7. In the Terminal, run `gatsby develop`. The build takes a minute, but should open a connection to [localhost:8000](localhost:8000). 

8. Once the client's Wordpress is connected, we will have to see what data is pulled in, and what data we still need to connect to Gatsby.


#### Helpful links:
- Download [Local](https://localwp.com/) to host a WP instance on your local machine