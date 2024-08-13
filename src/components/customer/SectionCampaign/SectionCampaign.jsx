const SectionCampaign = () => {
  return (
    <div>
     <section id="campaign-banner" className="campaign-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-4 mt-5">
              <h2>Promo Rumah!!!</h2>
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
      <section id="campaign-banner" className="campaign-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-4 mt-5">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="card property-card">
                      <img
                        src="https://via.placeholder.com/350x200"
                        className="card-img-top"
                        alt="Properti"
                      />
                      <div className="card-body text-center">
                        <h5 className="property-card-title">Rumah Modern</h5>
                        <div className="property-details text-left">
                          <p>
                            <i className="fa fa-bed"></i> 3 Kamar Tidur
                          </p>
                          <p>
                            <i className="fa fa-bath"></i> 2 Kamar Mandi
                          </p>
                          <p>
                            <i className="fa fa-expand"></i> 150 m²
                          </p>
                          <p>
                            <i className="fa fa-dollar-sign"></i> Rp. 850.000.000
                          </p>
                        </div>
                        <button href="#" className="detail btn btn-primary">
                          Lihat Detail
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card property-card">
                      <img
                        src="https://via.placeholder.com/350x200"
                        className="card-img-top"
                        alt="Properti"
                      />
                      <div className="card-body text-center">
                        <h5 className="property-card-title">Rumah Modern</h5>
                        <div className="property-details text-left">
                          <p>
                            <i className="fa fa-bed"></i> 3 Kamar Tidur
                          </p>
                          <p>
                            <i className="fa fa-bath"></i> 2 Kamar Mandi
                          </p>
                          <p>
                            <i className="fa fa-expand"></i> 150 m²
                          </p>
                          <p>
                            <i className="fa fa-dollar-sign"></i> Rp. 850.000.000
                          </p>
                        </div>
                        <button href="#" className="btn btn-primary">
                          Lihat Detail
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card property-card">
                      <img
                        src="https://via.placeholder.com/350x200"
                        className="card-img-top"
                        alt="Properti"
                      />
                      <div className="card-body text-center">
                        <h5 className="property-card-title">Rumah Modern</h5>
                        <div className="property-details text-left">
                          <p>
                            <i className="fa fa-bed"></i> 3 Kamar Tidur
                          </p>
                          <p>
                            <i className="fa fa-bath"></i> 2 Kamar Mandi
                          </p>
                          <p>
                            <i className="fa fa-expand"></i> 150 m²
                          </p>
                          <p>
                            <i className="fa fa-dollar-sign"></i> Rp. 850.000.000
                          </p>
                        </div>
                        <button href="#" className="btn btn-primary">
                          Lihat Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionCampaign;
