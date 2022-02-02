import React from "react"

// images
import bible from "../../images/bible-open-psalms.jpeg"
// doc
import application from "../../docs/abq-church-lead-pastor-application.pdf"


const JobPost = ({ children }) => {
    return (
        <>
            <div class="about-job-post row d-flex mx-auto my-4 my-md-5 px-5">
                <div class="col-md-7 align-self-center pb-5 pe-md-5">
                    <h2>We are a New Church Plant Seeking a Lead Pastor</h2>
                    <br/>
                    <a href={application} target="_blank" rel='noreferrer' class="btn btn-dark btn-outline btn-sm" role="button">
                        Learn more &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
                    </a>
                </div>
                <div class="card col-md-5">
                    <img className="img-fluid" src={bible} alt="open bible resting on a stone"  />
                </div>
            </div>
        </>
    )
  }
  
  export default JobPost
