'use client';

export default function StoreCard({store}) {

    return (
        <div className="col-6 col-lg-3">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{store.title}</h3>
                    <p className="card-text">{store.address_line_01}</p>
                </div>
            </div>
        </div>
    );
}