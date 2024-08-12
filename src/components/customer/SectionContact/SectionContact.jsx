const SectionContact = () => {
  return (
    <div>
      <section id="campaign-banner" className="campaign-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-4 mt-5">
              <h2>Contact From US !!!</h2>
              <p>
                Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan
                atau permintaan khusus.
              </p>
            </div>
            <div id="promoCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li
                  data-target="#promoCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#promoCarousel" data-slide-to="1"></li>
                <li data-target="#promoCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div
                    className="campaign-banner-content d-flex flex-column flex-md-row align-items-center"
                    style={{
                      backgroundColor: "rgba(252, 138, 49, 255)",
                      padding: "20px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    <img
                      src="https://via.placeholder.com/300x150"
                      className="img-fluid"
                      alt="Promo 1"
                      style={{ borderRadius: "10px", marginRight: "20px" }}
                    />
                    <div className="text-left">
                      <h4>Diskon 10% untuk Pembelian Tunai</h4>
                      <p>
                        Berlaku hingga akhir bulan ini. Cicilan 0% hingga 24
                        Bulan untuk properti tertentu. Dapatkan hadiah langsung
                        tanpa diundi!
                      </p>
                      <button className="btn btn-warning">Lihat Detail</button>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    className="campaign-banner-content d-flex flex-column flex-md-row align-items-center"
                    style={{
                      backgroundColor: "rgba(252, 138, 49, 255)",
                      padding: "20px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    <img
                      src="https://via.placeholder.com/300x150"
                      alt="Promo 2"
                      className="img-fluid"
                      style={{ borderRadius: "10px", marginRight: "20px" }}
                    />
                    <div className="text-left">
                      <h4>Gratis Biaya Notaris</h4>
                      <p>
                        Untuk setiap pembelian properti selama bulan ini, gratis
                        biaya notaris dan biaya administrasi! GRAAATTISSSSS!!!!
                      </p>
                      <button className="btn btn-warning">Lihat Detail</button>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    className="campaign-banner-content d-flex flex-column flex-md-row align-items-center"
                    style={{
                      backgroundColor: "rgba(252, 138, 49, 255)",
                      padding: "20px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    <img
                      src="https://via.placeholder.com/300x150"
                      alt="Promo 3"
                      className="img-fluid"
                      style={{ borderRadius: "10px", marginRight: "20px" }}
                    />
                    <div className="text-left">
                      <h4>Voucher Belanja Rp 5.000.000</h4>
                      <p>
                        Bagi pembelian properti tertentu, dapatkan voucher
                        belanja senilai Rp 5.000.000! WOWWWW HEBAT BANGETTTT
                      </p>
                      <button className="btn btn-warning">Lihat Detail</button>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#promoCarousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#promoCarousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-7 text-center mb-4 mt-5">
              <div className="card border-0 shadow-sm rounded">
                <div className="card-body">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.4878845067!2d106.6894283352192!3d-6.229728025238589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1594508000901!5m2!1sid!2sid"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card border-0 shadow-sm rounded">
                <div className="card-body">
                  <h3>Kontak kami</h3>
                  <p>
                    <i className="fa fa-map-marker" aria-hidden="true"></i> Jl.
                    Jendral Sudirman No.83, Daerah Khusus Ibukota Jakarta,
                    Indonesia
                    <i className="fas fa-phone"></i> +6282332224930
                    <i className="fas fa-envelope"></i> makelarku@punyahafizh.sch.id
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionContact;
