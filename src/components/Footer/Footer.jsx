import React, { useState } from 'react';
import styles from './Footer.module.css'; // Importa el archivo CSS con los estilos

const Footer = () => {
    const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);

    const handleEmailClick = () => {
        setShowAdditionalInputs(!showAdditionalInputs);
    };

    return (
        <footer className={`text-black py-4 ${styles.bgDarkTransparent}`}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 mb-4 mb-md-0">
                        <h5 className="mb-3">Productos</h5>
                        <p><a href="macAll" className="text-black">Computadores</a></p>
                        <p><a href="ipadAll" className="text-black">Celulares</a></p>
                        <p><a href="iphoneAll" className="text-black">Tablets</a></p>
                        <p><a href="AccesoriosAll" className="text-black">Smartwatch</a></p>
                        <p><a href="AppleWatchAll" className="text-black">Sonido</a></p>
                        <p><a href="SonidoAll" className="text-black">Cámaras</a></p>
                        <p><a href="AppleTVyHogar" className="text-black">Casa Inteligente</a></p>
                        <p><a href="AccesoriosAll" className="text-black">Accesorios</a></p>
                        <p><a href="AccesoriosAll" className="text-black">Impresoras</a></p>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-4 mb-md-0">
                        <h5 className="mb-3">Servicios</h5>
                        <p><a href="#" className="text-black">Financiamiento</a></p>
                        <p><a href="#" className="text-black">Sistecrédito</a></p>
                       {/*  <p><a href="#" className="text-black">iPhone for Life</a></p> */}
                    </div>
                    <div className="col-sm-6 col-md-3 mb-4 mb-md-0">
                        <h5 className="mb-3">Tienda PC</h5>
                        <p><a href="/QuienesSomos" className="text-black">¿Quienes somos?</a></p>
                        <p><a href="/PQRS" className="text-black">PQRS - Contacto</a></p>
                        <p><a href="/Ubicacion" className="text-black">Encuentra tu tienda</a></p>
                        <p><a href="warranty" className="text-black">Garantía Apple</a></p>
                        {/*  <p><a href="#" className="text-black">Beneficios</a></p> */}
                        <p><a href="faq" className="text-black">Preguntas Frecuentes</a></p>
                        <p><a href="/terms-and-conditions" className="text-black">Términos y condiciones</a></p>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <h5 className="mb-3">Información</h5>
                        <p><a href="/soporte-tecnico-client" className="text-black">Servicio Técnico</a></p>
                        {/* <p><a href="#" className="text-black">Corporativo</a></p> */}
                        <p><a href="#" className="text-black">Mi cuenta</a></p>
                        <h5 className="mt-4 mb-3">Síguenos en:</h5>
                        <div className="d-flex flex-wrap">
                              <a href="https://web.facebook.com/tiendamacdecolombia/?locale=es_LA&_rdc=1&_rdr">
                                <img src="https://res.cloudinary.com/dn6k2fnhj/image/upload/v1717265046/TiendaMac/kjnl34vrdvcs6gpscoja.png" alt="Facebook" style={{ width: '30px', marginRight: '10px' }} />
                            </a>
                            <a href="https://www.instagram.com/tiendamac.co/">
                                <img src="https://res.cloudinary.com/dn6k2fnhj/image/upload/v1717265046/TiendaMac/kminotyxqfmmlltrexbd.png" alt="Instagram" style={{ width: '30px', marginRight: '10px' }} />
                            </a>
                            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fi%2Fflow%2Flogin">
                                <img src="https://res.cloudinary.com/dn6k2fnhj/image/upload/v1717265046/TiendaMac/nvgipm06kfzgoma0ejdh.png" alt="Twitter" style={{ width: '30px', marginRight: '10px' }} />
                            </a>
                        </div>
                    </div>
                </div>
                {/*  <div className="row mt-4">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="mb-2">ENTÉRATE PRIMERO DE NUESTRAS OFERTAS Y PRODUCTOS EXCLUSIVOS</h5>
                        <form>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Correo electrónico" onClick={handleEmailClick} />
                            </div>
                            {showAdditionalInputs && (
                                <>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Nombre" />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Celular" />
                                        </div>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="terms" />
                                        <label className="form-check-label" htmlFor="terms">Acepto los términos y condiciones</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">SUSCRÍBETE</button>
                                </>
                            )}
                        </form>
                    </div>
                </div> */}
                <div className="row mt-4">
                    <div className="col">
                        <p className="text-center">&copy; 2024 Tienda PC. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
