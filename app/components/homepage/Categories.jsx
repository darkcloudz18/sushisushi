'use client';

export default function Categories() {
    return (
          <div className="container py-5">
              <h2 className="section-title">Shop by category</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-auto d-flex justify-content-center py-4">
                <div className="col text-center mx-3">
                  <img src="/images/category-icons/hrw.png" className="img-fluid" alt="Handroll white rice category" />
                  <p className="lead pt-3">Hand rolls</p>
                </div>
                <div className="col text-center mx-3">
                  <img src="/images/category-icons/hrb.png" className="img-fluid" alt="Handroll brown rice category" />
                  <p className="lead pt-3">Brown rice</p>
                </div>
                <div className="col text-center mx-3">
                  <img src="/images/category-icons/packs.png" className="img-fluid" alt="Packs category" />
                  <p className="lead pt-3">Packs</p>
                </div>
                <div className="col text-center mx-3">
                  <img src="/images/category-icons/platters.png" className="img-fluid" alt="Platters category" />
                  <p className="lead pt-3">Platters</p>
                </div>
                <div className="col text-center mx-3">
                  <img src="/images/category-icons/deluxe.png" className="img-fluid" alt="Deluxe category" />
                  <p className="lead pt-3">Deluxe</p>
                </div>
                <div className="col text-center mx-3">
                  <img src="/images/category-icons/salads.png" className="img-fluid" alt="Salads category" />
                  <p className="lead pt-3">Salads</p>
                </div>
                <div className="col text-center mx-3">
                  <img src="/images/category-icons/hotfood.png" className="img-fluid" alt="Hot food category" />
                  <p className="lead pt-3">Hot Food</p>
                </div>
              </div>
          </div>
    );
}