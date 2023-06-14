'use client';

export default function StoreCard({store}) {

    return (
        <div className="col-12 col-md-6 col-lg-4 my-3">
            <div className="store-card p-4 h-100">
                <div className="row row-cols-1 d-flex h-100">
                    <div className="col">
                        <h3 className="card-title">{store.title}</h3>
                        <p className="lead">{store.subtitle}</p>
                        <p className="card-text">
                            {store.address_line_01}, {store.address_line_02}<br/>
                            {store.suburb} {store.postcode} {store.state.toUpperCase()}<br/>
                        </p>
                        <p className={"fw-bold"}>Distance from you: {store.distance}km</p>
                        <a href={`tel:${store.phone}`} className="d-block mb-3"> {store.phone} </a>
                    </div>
                    <div className="col align-self-end">
                        {store.order_up_link?.length > 0 &&
                            <a href={store.order_up_link} className="btn btn-sushi-primary">Order from this store</a>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}