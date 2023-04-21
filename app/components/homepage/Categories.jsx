'use client';

import Link from "next/link";

export default function Categories() {
    return (
          <div className="container py-5">
              <h2 className="section-title-salmon">Menu by category</h2>
              <div className="row row-cols-auto d-flex justify-content-center py-4">
                <div className="col text-center mx-3">
                    <Link
                        href={{
                            pathname: '/our_menu',
                            query: { filter: 'HandRolls' },
                        }}
                        className="plain-link"
                    >
                        <img src="/images/category-icons/HandRolls.png" className="img-fluid" alt="Handroll white rice category" />
                        <p className="lead pt-3">Hand rolls</p>
                    </Link>
                </div>
                <div className="col text-center mx-3">
                  <Link
                      href={{
                        pathname: '/our_menu',
                        query: { filter: 'BrownRice' },
                      }}
                      className="plain-link"
                  >
                    <img src="/images/category-icons/BrownRice.png" className="img-fluid" alt="Handroll brown rice category" />
                    <p className="lead pt-3">Brown rice</p>
                  </Link>
                </div>
                <div className="col text-center mx-3">
                    <Link
                        href={{
                            pathname: '/our_menu',
                            query: { filter: 'Packs' },
                        }}
                        className="plain-link"
                    >
                        <img src="/images/category-icons/Packs.png" className="img-fluid" alt="Packs category" />
                        <p className="lead pt-3">Packs</p>
                    </Link>
                </div>
                <div className="col text-center mx-3">
                    <Link
                        href={{
                            pathname: '/our_menu',
                            query: { filter: 'Platters' },
                        }}
                        className="plain-link"
                    >
                        <img src="/images/category-icons/Platters.png" className="img-fluid" alt="Platters category" />
                        <p className="lead pt-3">Platters</p>
                    </Link>
                </div>
                <div className="col text-center mx-3">
                    <Link
                        href={{
                            pathname: '/our_menu',
                            query: { filter: 'Deluxe' },
                        }}
                        className="plain-link"
                    >
                        <img src="/images/category-icons/Deluxe.png" className="img-fluid" alt="Deluxe category" />
                        <p className="lead pt-3">Deluxe</p>
                    </Link>
                </div>
                <div className="col text-center mx-3">
                    <Link
                        href={{
                            pathname: '/our_menu',
                            query: { filter: 'Salads' },
                        }}
                        className="plain-link"
                    >
                        <img src="/images/category-icons/Salads.png" className="img-fluid" alt="Salads category" />
                        <p className="lead pt-3">Salads</p>
                    </Link>
                </div>
                <div className="col text-center mx-3">
                    <Link
                        href={{
                            pathname: '/our_menu',
                            query: { filter: 'HotFood' },
                        }}
                        className="plain-link"
                    >
                        <img src="/images/category-icons/HotFood.png" className="img-fluid" alt="Hot food category" />
                        <p className="lead pt-3">Hot Food</p>
                    </Link>
                </div>
              </div>
          </div>
    );
}