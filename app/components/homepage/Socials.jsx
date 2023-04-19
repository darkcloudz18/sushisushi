'use client';

import InstagramFeed  from 'react-ig-feed'
import React, {useEffect, useState} from "react";
import InstaFeed from "../../api/homepage/InstaFeed";
import InstaPost from "./InstaPost";

export default function Socials() {
    const [instaPosts, setInstaPosts] = useState([]);

    useEffect(() => {
        InstaFeed().then( data => {
            setInstaPosts(data);
        })
    }, []);

    const posts = instaPosts.slice(1).map((post) => (
        <div key={post.id} className="col"><InstaPost post={post}></InstaPost></div>
    ));

    return(
        <div className="container pb-5">
            <h2 className="section-title-salmon mb-5">Latest on Social</h2>
            <div className="row">
                <div className="col-12 col-md-6 insta-row">
                    <InstaPost key={instaPosts[0]?.id} post={instaPosts[0]}></InstaPost>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row row-cols-2 insta-mini-row">
                        {posts}
                    </div>
                </div>
            </div>
            <div className="text-center fs-3 fw-bold">
                Click above to view, or follow us on social
                <a className="ms-2" href="https://www.facebook.com/SushiSushiAUS">
                    <img className="social-icon" src="/images/fb.png" />
                </a>
                <a className="ms-2" href="http://instagram.com/sushisushiaus">
                    <img className="social-icon" src="/images/insta.png" />
                </a>
                <a className="ms-2" href="https://au.linkedin.com/company/sushi-sushi">
                    <img className="social-icon" src="/images/linkedin.png" />
                </a>
            </div>
        </div>
    );
}