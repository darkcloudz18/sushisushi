'use client';

import Link from "next/link";

export default function Categories() {
    return (
          <div className="container py-5">
              <h2 className="section-title-salmon">Menu by category</h2>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-auto  justify-content-lg-center py-4">
                <div className="col text-center px-xl-4 py-3">
                    <Link
                        href="/our_menu"
                        className="plain-link"
                    >
                        <img src="/images/category-icons/HandRolls.png" className="img-fluid" alt="Handroll white rice category" />
                        <p className="lead pt-3">Hand rolls</p>
                    </Link>
                </div>
                <div className="col text-center px-xl-4 py-3">
                  <Link
                      href="/our_menu"
                      className="plain-link"
                  >
                    <img src="/images/category-icons/BrownRice.png" className="img-fluid" alt="Handroll brown rice category" />
                    <p className="lead pt-3">Brown rice</p>
                  </Link>
                </div>
                <div className="col text-center px-xl-4 py-3">
                    <Link
                        href="/our_menu"
                        className="plain-link"
                    >
                        <img src="/images/category-icons/Packs.png" className="img-fluid" alt="Packs category" />
                        <p className="lead pt-3">Packs</p>
                    </Link>
                </div>
                <div className="col text-center px-xl-4 py-3">
                    <Link
                        href="/our_menu"
                        className="plain-link"
                    >
                        <img src="/images/category-icons/Platters.png" className="img-fluid" alt="Platters category" />
                        <p className="lead pt-3">Platters</p>
                    </Link>
                </div>
                <div className="col text-center px-xl-4 py-3">
                    <Link
                        href="/our_menu"
                        className="plain-link"
                    >
                        <img src="/images/category-icons/Deluxe.png" className="img-fluid" alt="Deluxe category" />
                        <p className="lead pt-3">Deluxe</p>
                    </Link>
                </div>
                <div className="col text-center px-xl-4 py-3">
                    <Link
                        href="/our_menu"
                        className="plain-link"
                    >
                        <img src="/images/category-icons/Salads.png" className="img-fluid" alt="Salads category" />
                        <p className="lead pt-3">Salads</p>
                    </Link>
                </div>
                <div className="col text-center px-xl-4 py-3">
                    <Link
                        href="/our_menu"
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