'use client';

export default function Categories({filterNames, setFilter}) {

    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-light">
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {filterNames.map((name:string) => {
                    return (
                      <li className="nav-item" key={name}>
                        <button
                          className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                          onClick={() => setFilter(name)}
                        >
                          {name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
            </div>
        </nav>
    );
}