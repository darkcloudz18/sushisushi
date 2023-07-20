'use client';

import humanizeString from "humanize-string";
import Image from "next/image";

export default function MenuItem({item, category}) {

    return (
        <>
            <div className="col-6 col-lg-3 mb-3">
                <div className="card h-100">
                    <img
                        src={`/images/products/${category}/${item.name}.jpg`}
                        className="card-img-top"
                        alt={item.name}
                    />
                    <div className="card-body">
                        <div className="row row-cols-1 d-flex h-100">
                            <div className="col py-3"><h3 className="card-title">{item.name}</h3></div>
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
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header item-modal-header">
                            <h3 className="modal-title fs-5" id="exampleModalLabel">{humanizeString(item.category)}</h3>
                            <button type="button" className="btn-close invert-colour" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body item-modal-body">
                            <div className={"row px-3"}>
                                <div
                                    className={"col-12 col-lg-7 order-lg-last item-modal-img"}
                                    style={{
                                        backgroundImage: `url("/images/products/${category}/${item.name}.jpg")`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover"
                                    }}
                                >
                                </div>
                                <div className={"col-12 col-lg-5 p-5"}>
                                    <h2>{item.name}</h2>
                                    <h3>{item.kJs}</h3>
                                    <p>{item.description}</p>
                                    <div className={"row justify-content-start mb-4"}>
                                        {item.allergens?.filter(allergen => allergen !== "Gluten").map((name:string) => {
                                            return (
                                                <div className={"col-auto"} key={name}><Image src={`/images/allergens/${name}_icon.png`} alt={`${name} allergen present`} width={50} height={49} className={"mb-2"}></Image></div>
                                            );
                                        })}
                                    </div>
                                    <a href="https://sushisushi.orderup.com.au/" className="btn btn-sushi-primary w-100">Start my order</a>
                                    <p className={"mt-3 disclaimer"}>Please note: some products may not be stocked at all Sushi Sushi locations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}