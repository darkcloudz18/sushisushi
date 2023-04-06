'use client';

export default function FavesCard() {

  return(
    <div className="card shadow-sm mb-3">
      <div className="row g-0">
        <div className="col-5 col-md-6 faves-img">
        </div>
        <div className="col-7 col-md-6">
          <div className="card-body">
            <h5 className="card-title fw-bold">Tempura Vegetable Pancake</h5>
            <p className="card-text">I am the man with no name, Zapp Brannigan! Oh, you're a dollar naughtier than most.</p>
            <button type="button" className="btn btn-sushi-secondary mt-3">Find out more</button>
          </div>
        </div>
      </div>
    </div>
  );

}