'use client';

export default function MenuItem({item}) {

    return (
      <div className="col-6 col-lg-3">
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuy3Jsy4JZ41gHN0aEkLYbuyhkC9UqhK4gkFCixPDHo-Tu53S_jIrj7QXZaWPbYkypa4&usqp=CAU" className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-text">{item.description}</p>
            <a href="#" className="btn btn-primary">Yum</a>
          </div>
        </div>
      </div>
    );
}