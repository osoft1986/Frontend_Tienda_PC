// WhatsAppButton.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importa el icono de WhatsApp desde react-icons

const WhatsAppButton = () => {
  const handleClick = () => {
    // Enlace de WhatsApp para la empresa
 const whatsappLink =
  "https://api.whatsapp.com/send?phone=573233129207&text=Hola%20Tienda%20PC%F0%9F%91%8B.%20Me%20gustar%C3%ADa%20cotizar%20uno%20de%20los%20productos%20que%20vi%20en%20su%20P%C3%A1gina%20Web!";
window.open(whatsappLink, "_blank");
};

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px", // Ajusta la distancia desde el fondo
        right: "20px", // Ajusta la distancia desde la derecha
        zIndex: "1000",
        backgroundColor: "#25D366", // Color de fondo de WhatsApp
        color: "white", // Color del texto
        border: "none",
        borderRadius: "50%",
        width: "60px", // Ancho del botón
        height: "60px", // Altura del botón
        fontSize: "24px", // Tamaño del texto
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaWhatsapp size={30} /> {/* Icono de WhatsApp con tamaño ajustado */}
    </button>
  );
};

export default WhatsAppButton;
