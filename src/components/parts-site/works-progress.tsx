import Img_icon_tractor from '../../assets/img/tractor.svg';
import Img_icon_checked from '../../assets/img/check-icon.svg';
import Img_icon_working from '../../assets/img/working.png';

export default function worksProgress() {
  return (
    <div>
      <section id="works-progress" className="full_column_image text-center text-lg-start">
        <div className="row">
          <div className="col-12 col-lg-6 content">
              <div className="container">
                  <div className="row">
                      <div className="col-12 ">
                        <div className="content-title">
                          <h3 className="title-section">OBRAS EM ANDAMENTO</h3>
                          <div className="hr-line-title"></div>
                        </div>
                        <div className="content-text mt-4">
                          <div className="itens">
                            <img src={Img_icon_working.src} className="icon-check" />
                            <div className="desc">
                              <h2 className="subtitle">Rio Baquirivu Lote II</h2>
                              <span className="specialist-position">Construtora Consórcio Rio Baquirivu Lote II</span>
                            </div>
                          </div>
                          <div className="itens">
                            <img src={Img_icon_working.src} className="icon-check" />
                            <div className="desc">
                              <h2 className="subtitle">Rio Baquirivu Lote III</h2>
                              <span className="specialist-position">Construtora Consórcio Rio Baquirivu Lote III</span>
                            </div>
                          </div>
                          <div className="itens">
                            <img src={Img_icon_working.src} className="icon-check" />
                            <div className="desc">
                              <h2 className="subtitle">Consórcio DPJ Mooca</h2>
                              <span className="specialist-position">Reservatório Mooca</span>
                            </div>
                          </div>
                          <div className="itens">
                            <img src={Img_icon_working.src} className="icon-check" />
                            <div className="desc">
                              <h2 className="subtitle">Consórcio DL Córrego Lapenna</h2>
                              <span className="specialist-position">Reservatório Sabesp</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-12 col-lg-6 image worksBackground">
            {/* <div className="col-12 col-lg-6 image imgback"></div> */}
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
