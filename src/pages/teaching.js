import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout';

const Teaching = () => {
    const [teachings, setTeachings] = useState(null);

    useEffect(() => {
        axios.get(`https://albuquerque-church.herokuapp.com/wp-json/wp/v2/posts`)
        .then(res => {
            console.log(res.data);
            const teachings = res.data.filter(posts => {
               return posts.slug.includes('teaching');
            })
            console.log(teachings);
            setTeachings(teachings);
        })
    },[])

    return(
        <Layout>
            <h1>TEACHINGS</h1>
            {teachings &&
                teachings.map(teaching => {
                    return(
                        <div key={teaching.id}>
                            <h1>{teaching.title.rendered}</h1>
                            <div dangerouslySetInnerHTML={{__html: teaching.content.rendered}} />
                        </div>
                        )
                })
            }

            {!teachings &&
                <h1>LOADING</h1>
            }
        </Layout>
    )
}

export default Teaching;