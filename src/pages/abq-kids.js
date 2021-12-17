import React from 'react';
import Layout from '../components/layout';
import AbqKidsHero from '../components/abq-kids/AbqKidsHero'

const WhatWeBelieve = () => {
    return(
    <Layout>
    <AbqKidsHero />
        <div className='abq-kids-container'>
            <p>ABQ KIDS  welcomes children from infants through 5 th grade.</p>

            <br></br>

            <p>Our littlest ABQ KIDS, infants through age 3, can play or rest in our nursery area, where they are well
cared for, in a safe environment, by nurturing adults and mature teens. Soft music, age-appropriate toys, Christ- centered books and puzzles
will occupy your youngest children, while parents are free to worship and hear the Word of God taught. </p>

            <br></br>

            <p>ABQ KIDS, ages 4 through 5 th graders, will be taught through the entire Bible using the exciting curriculum,
The Gospel Project from Lifeway, which offers gospel centered teaching, where Jesus is the Hero of every story in the
Bible! Our teachers enthusiastically combine engaging biblical teaching with interactive games
and projects that will enhance their understanding of who Jesus is, what He does, and how
much He loves them!  After the service, when kids are back with their parents, they are welcome to enjoy our great playground through the rear doors of the sanctuary. We think your kids will love coming to church!</p>


            <br />
        </div>
    </Layout>
    )
}

export default WhatWeBelieve;