'use client';

export default function Faves() {
    return (
        <div className="faves-container py-5">
            <div className="container">
                <h2 className="section-title text-center py-5">Our Favourites</h2>
                <div className="scroll-row">
                    <div className="scroll-col px-4">
                        <img src="/images/menu-items/MenuTile_Jan2023_Deluxe-Salmon-Avocado-Loaded-Pancake.jpeg" className="img-fluid" alt="Deluxe Salmon Avocado Loaded Pancake" />    
                    </div>
                    <div className="scroll-col px-4">
                        <img src="/images/menu-items/MenuTile_Jan2023_Packs-Sushi-Sashimi-Deluxe-Pack.jpeg" className="img-fluid" alt="Sashimi Deluxe Pack" />    
                    </div>
                    <div className="scroll-col px-4">
                        <img src="/images/menu-items/MenuTile_Jan2023_Platters-3-Vegetarian-Uramaki.jpeg" className="img-fluid" alt="Vegetarian Uramaki Platter" />    
                    </div>
                </div>
            </div>
        </div>
    );
}