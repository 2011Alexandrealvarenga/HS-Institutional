import Img_icon_tractor from '../../assets/img/tractor.svg';
import Img_icon_checked from '../../assets/img/check-icon.svg';
import Img_icon_working from '../../assets/img/working.png';

export default function jobsConcluded() {
  return (
    <div>
      <hr className="split-section"></hr>
      <section id="jobs-concluded">
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
            <div className="col-md-6">
              {/*item */}
              <div className="itens">
                <img src={Img_icon_working.src} className="icon-check"/>
                <div className="desc">
                  <h2 className="subtitle">Obra Piscinão Guamiranga - São Paulo</h2>
                  <span className="specialist-position">Escavações em solo e rocha.</span>
                </div>
              </div>
              <div className="itens">
                <img src={Img_icon_working.src} className="icon-check"/>
                <span className="specialist-position">Execução de camadas de reforço de camadas de reforço e subleito tratado.</span>
              </div>
              <div className="itens">
                <img src={Img_icon_working.src} className="icon-check"/>
                <span className="specialist-position">Escavações em solo e rocha.</span>
              </div>            
            </div>
                    <div className="col-md-6">
              {/*item */}
              <div className="itens">
                <img src={Img_icon_working.src} className="icon-check"/>
                <div className="desc">
                  <h2 className="subtitle">Obra Piscinão Guamiranga - São Paulo</h2>
                  <span className="specialist-position">Escavações em solo e rocha.</span>
                </div>
              </div>
              <div className="itens">
                <img src={Img_icon_working.src} className="icon-check"/>
                <span className="specialist-position">Execução de camadas de reforço de camadas de reforço e subleito tratado.</span>
              </div>
              <div className="itens">
                <img src={Img_icon_working.src} className="icon-check"/>
                <span className="specialist-position">Escavações em solo e rocha.</span>
              </div>            
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
