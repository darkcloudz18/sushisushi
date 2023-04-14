'use client';

import humanizeString from "humanize-string";

export default function MenuItem({item}) {

    return (
        <>
            <div className="col-12 col-md-6 col-lg-3 mb-3">
                <div className="card h-100">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuy3Jsy4JZ41gHN0aEkLYbuyhkC9UqhK4gkFCixPDHo-Tu53S_jIrj7QXZaWPbYkypa4&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="row row-cols-1 d-flex h-100">
                            <div className="col"><h3 className="card-title">{item.name}</h3></div>
                            <div className="col align-self-end">
                                <button type="button" className="btn btn-sushi-secondary w-100" data-bs-toggle="modal" data-bs-target={`#item${item.id}Modal`}>
                                    Find out more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id={`item${item.id}Modal`} tabIndex={-1} aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header item-modal-header">
                            <h3 className="modal-title fs-5" id="exampleModalLabel">{humanizeString(item.category)}</h3>
                            <button type="button" className="btn-close invert-colour" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body item-modal-body">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}