import Img_icon_tractor from '../../assets/img/tractor.svg';
import Img_icon_checked from '../../assets/img/check-icon.svg';
import Img_icon_working from '../../assets/img/working.png';

export default function jobsConcluded() {
  return (
    <div>
      <section id="jobs-concluded">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-12 text-center">
                <div className="content-title-section">
                  <h3 className="title-section">OBRAS CONCLUÍDAS</h3>
                  <div className="hr-line-title"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 pad-resp-col">          
                <div className="itens">
                  <img src={Img_icon_working.src} className="icon-check" />
                  <div className="desc">
                    <h2 className="subtitle">Obra Piscinão Guamiranga - São Paulo</h2>
                    <span className="specialist-position">Escavações em solo e rocha.</span>
                  </div>
                </div>
                
                <div className="itens">
                  <img src={Img_icon_working.src} className="icon-check" />
                  <div className="desc">
                    <h2 className="subtitle">Obra Piscinão Guamiranga – São Paulo</h2>
                    <span className="specialist-position">Construtora DP Barros</span>
                  </div>
                </div>
                
                <div className="itens">
                  <img src={Img_icon_working.src} className="icon-check" />
                  <div className="desc">
                    <h2 className="subtitle">Obra Aterro Sanitário – Santana de Parnaíba</h2>
                    <span className="specialist-position">Construtora Tecipar</span>
                  </div>
                </div>
                
                <div className="itens">
                  <img src={Img_icon_working.src} className="icon-check" />
                  <div className="desc">
                    <h2 className="subtitle">Obra Piscinão R1 – São João da Boa Vista</h2>
                    <span className="specialist-position">Construtora DP Barros</span>
                  </div>
                </div>
                
                <div className="itens">
                  <img src={Img_icon_working.src} className="icon-check" />
                  <div className="desc">
                    <h2 className="subtitle">Obra Piscinão Guamiranga – São Paulo</h2>
                    <span className="specialist-position">Programa Água Limpa – Cerqueira Cesar</span>
                  </div>
                </div>
                
                <div className="itens">
                  <img src={Img_icon_working.src} className="icon-check" />
                  <div className="desc">
                    <h2 className="subtitle">Obra de melhorias na Infraestrututa do Córrego fetá – Louveira - SP</h2>
                    <span className="specialist-position">Construtora DP Barros</span>
                  </div>
                </div>
                
                <div className="itens">
                  <img src={Img_icon_working.src} className="icon-check" />
                  <div className="desc">
                    <h2 className="subtitle">Obra DAEE – Operações de Reservatório – São Paulo</h2>
                    <span className="specialist-position">Construtora DP Barros</span>
                  </div>
                </div>
                  
              </div>
              <div className="col-md-6  pad-resp-col">
                
                <div className="itens">
                  <img src={Img_icon_working.src} className="icon-check" />
                  <div className="desc">
                    <h2 className="subtitle">Obra Coposa Rodoanel</h2>
                    <span className="specialist-position">Construtora Construcap</span>
                  </div>
                </div>
                
                <div className="itens">
                  <img src={Img_icon_working.src} className="icon-check" />
                  <div className="desc">
                    <h2 className="subtitle">Obra Polder do Itaim</h2>
                    <span className="specialist-position">Construtora DP Barros</span>
                  </div>
                </div>
                
                <div className="itens">
                  <img src={Img_icon_working.src} className="icon-check" />
                  <div className="desc">
                    <h2 className="subtitle">Obra LOTE 4 - Rio Tietê</h2>
                    <span className="specialist-position">Construtora DP Barros</span>
                  </div>
                </div>
                
                <div className="itens">
                  <img src={Img_icon_working.src} className="icon-check" />
                  <div className="desc">
                    <h2 className="subtitle">Obra Córrego Paciência – São Paulo</h2>
                    <span className="specialist-position">Construtora FBS Construção Civil</span>
                  </div>
                </div>
                
                <div className="itens">
                  <img src={Img_icon_working.src} className="icon-check" />
                  <div className="desc">
                    <h2 className="subtitle">Obra Córrego Paciência – São Paulo</h2>
                    <span className="specialist-position">Construtora FBS Construção Civil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
