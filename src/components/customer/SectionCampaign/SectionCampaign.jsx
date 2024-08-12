const SectionCampaign = () => {
  return (
    <div>
      <section id="campaign-banner" className="campaign-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-4 mt-5">
              <h2>Promo Spesial</h2>
              <p>Jangan lewatkan promo spesial dari kami</p>
              <div
                className="campaign-banner-content d-flex align-items-center"
                style={{
                  backgroundColor: "rgba(252, 138, 49, 255)",
                  padding: "20px",
                  borderRadius: "10px",
                  color: "white",
                }}
              >
                <img
                  src="https://via.placeholder.com/150x150"
                  alt="Promo"
                  style={{ borderRadius: "10px", marginRight: "20px" }}
                />
                <div className="text-left">
                  <h4>Diskon 10% untuk Pembelian Tunai</h4>
                  <p>
                    Berlaku hingga akhir bulan ini. Cicilan 0% hingga 24 Bulan
                    untuk properti tertentu. Dapatkan hadiah langsung tanpa
                    diundi!
                  </p>
                  <button className="btn btn-warning">Lihat Detail</button>
                </div>
              </div>
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
