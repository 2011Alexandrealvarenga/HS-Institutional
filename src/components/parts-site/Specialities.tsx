import Img_icon from '../../assets/img/tractor.svg';
import Img_icon_checked from '../../assets/img/check-icon.svg';

export default function Specialities() {
  return (
    <div>
      <section id="specialist">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="content-title-section">
                <h3 className="title-section">NOSSAS ESPECIALIDADES</h3>
                <div className="hr-line-title"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="three-itens">
                <div className="itens-card">
                  <div className="content-title">
                    <img src={Img_icon.src} className="img-item-icon"/>
                    <h2 className="title">Terraplanagem</h2>
                  </div>
                  <div className="content-itens">
                    <div className="itens">
                      <img src={Img_icon_checked.src} className="img-item-icon"/>
                      <span className="specialist-position">Escavações em solo e rocha.</span>
                    </div>
                    <div className="itens">
                      <img src={Img_icon_checked.src} className="img-item-icon"/>
                      <span className="specialist-position">Execução de camadas de reforço de camadas de reforço e subleito tratado.</span>
                    </div>
                    <div className="itens">
                      <img src={Img_icon_checked.src} className="img-item-icon"/>
                      <span className="specialist-position">Escavações em solo e rocha.</span>
                    </div>
                  </div>
                </div>
                <div className="itens-card">
                  <div className="content-title">
                    <img src={Img_icon.src} className="img-item-icon"/>
                    <h2 className="title">Terraplanagem</h2>
                  </div>
                  <div className="content-itens">
                    <div className="itens">
                      <img src={Img_icon_checked.src} className="img-item-icon"/>
                      <span className="specialist-position">Escavações em solo e rocha.</span>
                    </div>
                    <div className="itens">
                      <img src={Img_icon_checked.src} className="img-item-icon"/>
                      <span className="specialist-position">Execução de camadas de reforço de camadas de reforço e subleito tratado.</span>
                    </div>
                    <div className="itens">
                      <img src={Img_icon_checked.src} className="img-item-icon"/>
                      <span className="specialist-position">Escavações em solo e rocha.</span>
                    </div>
                  </div>
                </div>
                
                <div className="itens-card">
                  <div className="content-title">
                    <img src={Img_icon.src} className="img-item-icon"/>
                    <h2 className="title">Terraplanagem</h2>
                  </div>
                  <div className="content-itens">
                    <div className="itens">
                      <img src={Img_icon_checked.src} className="img-item-icon"/>
                      <span className="specialist-position">Escavações em solo e rocha.</span>
                    </div>
                    <div className="itens">
                      <img src={Img_icon_checked.src} className="img-item-icon"/>
                      <span className="specialist-position">Execução de camadas de reforço de camadas de reforço e subleito tratado.</span>
                    </div>
                    <div className="itens">
                      <img src={Img_icon_checked.src} className="img-item-icon"/>
                      <span className="specialist-position">Escavações em solo e rocha.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* teste */}
    </div>
  );
}
