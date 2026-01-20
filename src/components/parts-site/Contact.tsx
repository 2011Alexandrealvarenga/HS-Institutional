import whatapp from '../../assets/img/whatsapp.svg';
import address from '../../assets/img/address.svg';
import mail from '../../assets/img/mail.svg';


export default function Contact() {
  return (
    <div>
      <section id="contact" className="full_column_image text-center text-lg-start">
        <div className="row">
          <div className="col-12 col-lg-6 content order-1-contact">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                        <div className="content-title-section">
                          <h3 className="title-section">CONTATO</h3>
                          <div className="hr-line-title"></div>
                          <h5 className="subtitle">Entre em contato e faça um orçamento conosco.</h5>
                        </div>
                        <div className="btn-content">
                          <a href="https://api.whatsapp.com/send?phone=5511979573056&amp;text=Olá Visitei o seu site e gostaria de saber mais sobre a empresa." className="whatsapp-link">
                            <div className="itens">
                              <img src={whatapp.src}  className="phone-icon" />
                              <div className="desc">
                                <p className="phone"> (11) 98883-6382</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="content-text">
                            <a href="mailto:construtora@hsjunior.com.br?subject=Assunto do email&body=Conteúdo do email que será preenchido automaticamente" className="itens">                        
                              <img src={mail.src} className="icon-check"/>
                              <div className="desc">
                                <p className="subtitle">construtora@hsjunior.com.br</p>
                              </div>
                            </a>
                          <div className="itens">
                            <img src={address.src} className="icon-check"/>
                            <div className="desc">
                              <p className="subtitle">Av. Dr. Assis Ribeiro, 5.140 - Ermelino Matarazzo - São Paulo</p>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-12 col-lg-6 iframe-section order-2-contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.5639935700087!2d-46.50894391986426!3d-23.492394367355047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce606fc49eb207%3A0xa48ba1c25a3d79f2!2sCondom%C3%ADnio%20Residencial%20S%C3%A3o%20Paulo%20-%20Bloco%20III%20-%20Av.%20Dr.%20Assis%20Ribeiro%2C%205140%20-%20Vila%20Silvia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003827-000!5e1!3m2!1spt-BR!2sbr!4v1768785513980!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy" ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
