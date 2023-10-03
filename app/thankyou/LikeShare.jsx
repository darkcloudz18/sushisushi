'use client';
import React from 'react'

function likeShare() {
  return (
    <div className={"container d-flex align-items-center justify-content-center text-center my-5"}>
      <div className={"card w-75 battle-ring-container"}>
      <h3 className={"mb-5"}>Share and follow us on socials. <br></br>(you must be following to be in the competition)</h3>
      
      <p className={"lead mb-5"}>Thanks for helping crown Australia’s favourite hand roll. Catch you in store to celebrate on Saturday 28 October (remember, it’s our birthday!) where our top six hand rolls will be just $2.50. Will your fave be one of them??</p>
      <div className=" fw-bold text-center">
                <hr className={"d-lg-none mb-5"}/>
                <a className="" href="https://www.facebook.com/SushiSushiAUS">
                  <img className="" src="/images/fb.png" />
                </a>
                <a className="ms-2" href="http://instagram.com/sushisushiaus">
                  <img className="" src="/images/insta.png" />
                </a>
                <a className="ms-2" href="https://au.linkedin.com/company/sushi-sushi">
                  <img className="" src="/images/linkedin.png" />
                </a>
                <hr className={"d-lg-none mt-5"}/>
        </div>

    </div>
    </div>
  )
}

export default likeShare