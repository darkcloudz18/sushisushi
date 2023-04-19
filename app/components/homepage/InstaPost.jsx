'use client';

import React from "react";

export default function InstaPost({post}) {

    const postStyle = {
        backgroundImage:`url(${post?.media_type === 'VIDEO' ? post?.thumbnail_url : post?.media_url})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"
    };

    return(
        <>
            <a href="#" data-bs-toggle="modal" data-bs-target={`#postModal${post?.id}`}>
                <div className="h-100" style={postStyle}>
                </div>
            </a>

            <div className="modal fade" id={`postModal${post?.id}`} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close invert-colour" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body off-white-bg">
                            <div className="row">
                                <div className="col-12 col-md-8">
                                    { post?.media_type === 'VIDEO' ? <video
                                        controls
                                        src={post?.media_url}
                                        className="object-fit-contain w-100 h-100"
                                    >
                                    </video> : <img className="img-fluid" src={post?.media_url}/>}
                                </div>
                                <div className="col-12 col-md-4 py-3">
                                    <p>{post?.caption}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}