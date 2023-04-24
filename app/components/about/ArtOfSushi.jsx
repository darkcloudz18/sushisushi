'use client';


export default function ArtOfSushi() {
    return(
        <div className="container py-5">
            <h2 className="section-title-salmon">The Art of Sushi</h2>
            <p className="lead">We are delighted to welcome Bromley&Co in their new roles as Sushi Sushi’s Directors of Creative Innovation. The Art of Sushi is a partnership between two iconic Australian brands that will make art accessible to sushi-lovers across the country and evolve the Sushi Sushi brand with an artistic lens.</p>
            <p className="text-center">“We believe there is a deep connection between the two fields of Japanese food and art; both involve time, beauty and craft in order to create something people love.”<br/>
                David and Yuge Bromley</p>
            <img src="/images/bromleys.jpeg" alt="David and Yuge Bromley holding packaging and smiling" className="img-fluid" />
            <div className="row py-5  align-items-center">
                <div className="col-12 col-md-6">
                    <h3>Art you can take away</h3>
                    <p>Sushi Sushi’s new range of sustainable Bromley packaging is now available in all stores across the country. Each piece in the series has been specifically designed as a feast for the eyes, to be enjoyed while eating your beautiful sushi.</p>
                    <p>All made in Australia and fully recyclable … but we think you’ll want to keep the boxes to create your own art collection at home.</p>
                </div>
                <div className="col-12 col-md-6">
                    <img src="/images/The-Art-of-Sushi_Web_White-BG.jpg" alt="The Art of Sushi" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}