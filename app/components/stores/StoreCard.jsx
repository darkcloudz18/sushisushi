'use client';

export default function StoreCard({store}) {

    return (
        <div className="col-12 col-md-6 col-lg-4 my-3">
            <div className="store-card p-4 h-100">
                <h3 className="card-title">{store.title}</h3>
                <p className="card-text">
                    {store.address_line_01}, {store.address_line_02}<br/>
                    {store.suburb} {store.postcode} {store.state.toUpperCase()}
                </p>
                <a href={`tel:${store.phone}`} className="d-block mb-3"> {store.phone} </a>
                <a href={store.order_up_link} className="btn btn-sushi-primary">Order from this store</a>
            </div>
        </div>
    );
}