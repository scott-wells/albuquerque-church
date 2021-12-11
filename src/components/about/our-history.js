import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"



const OurHistory = ({ children }) => {
  
    return (
        <div class="about-our-history container-fluid">
            <div class="about-our-history-text row row-cols-1 g-4 px-2 mx-auto">
                <h2 class="text-center">Our History</h2>
                <div class="col text-center">
                    <p>Albuquerque Church was founded by a small group of families, on the back patio of a home, in September 2019, who answered God’s call to plant a new church in the northeast heights of Albuquerque, New Mexico. We teach verse by verse through the entire Bible, as His absolute truth, despite the shifting culture. Coupled with truth, our heart is one for discipleship and investing in the lives of one another and those in our community. As a new church plant, our congregation is currently small, but is multigenerational. We enjoy a wide variety of opportunities to grow together with our weekly service of worship, teaching, prayer, fellowship, and celebrating communion together regularly.  Our children, ABQ KIDS, ages infants to 5th grade, enjoy learning about Jesus using The Gospel Project Curriculum by Lifeway Ministries.</p>
                    <p className="mb-5">We are organized as a hybrid congregational/elder lead church. The congregation calls the pastor and retains authority over encumbrance of the church. The elders lead the day to day operation of the church. We are incorporated as a nonprofit with the state of New Mexico and are recognized as a 501-C3 under the rules of the US Internal Revenue Department.</p>
                    <h3>As a church, our core values are:</h3>
                    <ul className="text-start mb-5">
                        <li><span>•</span><p>To know Jesus and Him crucified as outlined in 1 Corinthians 2.</p></li>
                        <li><span>•</span><p>To preach Jesus Christ and make Him known by the power of the Holy Spirit promised to us by Jesus in John 16:13-15 both in and out of the pulpit.</p></li>
                        <li><span>•</span><p>Making disciples, beginning with evangelism as commanded by Jesus in Matthew 28.</p></li>
                        <li><span>•</span><p>We believe the Gospel is for salvation and also speaks to the deepest needs of people in any and every situation and encourage a Gospel focus from the pulpit.</p></li>
                    </ul>
                    <p>We are currently searching for a lead pastor. Our goal is to add to our leadership structure to better realize the leadership gifting model outlined in Ephesians 4:11-16 to effectively grow His church. We believe the Lord has a Christ centered pastor with the calling to plant a church who can help us to move forward in this work. We look forward to supporting a pastor in his calling and being a part of the exciting work of what the Lord is doing in Albuquerque and beyond!</p>
                </div>
            </div>
        </div>
    )
  }
  
  export default OurHistory
