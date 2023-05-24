'use client';

export default function FavesCard({product}) {

  return(
    <div className="card h-100">
      <div className="row h-100">
        <div
            className={"col-5 col-md-6 faves-img"}
            style={{
              backgroundImage: `url("/images/faves/${product?.name}.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
        >
        </div>
        <div className="col-7 col-md-6">
          <div className="card-body">
            <h5 className="card-title fw-bold">{product?.name}</h5>
            <p className="card-text">{product?.description}</p>
            <a href="https://sushisushi.orderup.com.au/" className="btn btn-sushi-secondary">Start my order</a>
          </div>
        </div>
      </div>
    </div>
  );

}