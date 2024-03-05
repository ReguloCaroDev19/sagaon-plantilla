import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import "./mobil.css";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

export const Plantilla = () => {
  const [data, setData] = useState([]);
   const [info, setInfo] = useState();
   const [expanded, setExpanded] = useState(false);
   const handleChange = (panel) => (event, isExpanded) => {
     setExpanded(isExpanded ? panel : false);
   };
   const { id } = useParams();

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get(
           `https://sagaon-express.vercel.app/${id}`
         );
         setData(response.data);
         console.log(response.data[0].materiales[0]);
         setInfo(response.data[0].descripcion ? "descripcion" : "incluye");
       } catch (error) {
         console.error("Error fetching data: ", error);
       }
     };
     fetchData();
   }, []);
   const cambiarInfo = (value) => {
     setInfo(value);
   };
   return (
     <div className="App">
       <div className="content-box-container">
         <div className="content-box-buttons">
           {data.length > 0 && data[0].descripcion && (
             <button
               className={`${info === "descripcion" ? "clicked" : null}`}
               onClick={(event) => {
                 cambiarInfo(event.currentTarget.value);
               }}
               value={"descripcion"}
             >
               DESCRIPCION
             </button>
           )}
           <button
             className={`${info === "incluye" ? "clicked" : null}`}
             onClick={(event) => {
               cambiarInfo(event.currentTarget.value);
             }}
             value={"incluye"}
           >
             INCLUYE
           </button>
           {data.length > 0 && data[0].fichatecnica && (
             <button
               className={`${info === "ficha" ? "clicked" : null}`}
               onClick={(event) => {
                 cambiarInfo(event.currentTarget.value);
               }}
               value={"ficha"}
             >
               FICHA TECNICA
             </button>
           )}
           <button
             className={`${info === "servicio" ? "clicked" : null}`}
             onClick={(event) => {
               cambiarInfo(event.currentTarget.value);
             }}
             value={"servicio"}
           >
             SERVICIO TECNICO
           </button>

           <button
             className={`${info === "garantia" ? "clicked" : null}`}
             onClick={(event) => {
               cambiarInfo(event.currentTarget.value);
             }}
             value={"garantia"}
           >
             GARANTIA
           </button>
         </div>
         <div className="content-box-message">
           <div style={{ display: "flex" }}>
             {data.map((product) => (
               <div key={product.sku} className="product-info">
                 {info === "descripcion" && product.descripcion !== null && (
                   <p className="appear" style={{ margin: "0px" }}>
                     {product.descripcion}
                   </p>
                 )}
                 {info === "incluye" && (
                   <div className="appear" style={{ margin: "0px" }}>
                     <ul style={{}}>
                       {product.incluye.split("\n").map((item, index) => (
                         <li
                           style={{
                             paddingLeft: "10px",
                             textAlign: "left",
                           }}
                           key={index}
                         >
                           {item}
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}
                 {info === "servicio" && (
                   <p className="appear" style={{ margin: "0px" }}>
                     {product.serviciotecnico}
                   </p>
                 )}
                 {info === "garantia" && (
                   <p className="appear" style={{ margin: "0px" }}>
                     {product.garantia}
                   </p>
                 )}
                 {info === "ficha" && product.fichatecnica !== null && (
                   <div
                     className="appear"
                     style={{
                       margin: "0px",
                       columnCount: "3",
                       columnGap: "20px",
                     }}
                   >
                     <ul
                       style={{
                         listStyleType: "none",
                         paddingLeft: "0",
                         margin: "0",
                         padding: "0",
                       }}
                     >
                       {product.fichatecnica.split("\n").map((item, index) => (
                         <li
                           key={index}
                           style={{
                             paddingLeft: "15px",
                             textAlign: "left",
                             marginBottom: "2px",
                           }}
                         >
                           {item.startsWith("•") ? item : `• ${item}`}{" "}
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}
               </div>
             ))}
           </div>
         </div>
       </div>
       {data.map(
         (product) =>
        product.materiales &&
        product.materiales[0].map((material) =>
          material !== null ? (
            <>
              <h2 className="slider-header">¿QUE MATERIALES PUEDO USAR?</h2>
              <div className="slider-container" style={{ height: "400px" }}>
                <div
                  id="id"
                  className="slider-wrapper animation"
                  style={{ width: "-1673px" }}
                >
                  <div
                    className="slider-item"
                    key={Math.floor(Math.random() * (10000 - 1 + 1)) + 1}
                  >
                    <img alt="img1" src={material.url_image} />
                    <p>{material.name}</p>
                    <p>Graba: SI</p>
                    <p>Corta: 3mm</p>
                  </div>
                </div>
              </div>
            </>
          ) : null
        )
       )}
       {data.map(
         (product) =>
           product.imagenes_usuarios &&
           product.imagenes_usuarios.map((material) =>
             material !== null ? (
               <>
                 <h2 className="slider-header">PROYECTOS DE CLIENTES</h2>
                 <div className="slider-container" style={{ height: "400px" }}>
                   <div
                     className="slider-wrapper animation"
                     style={{ marginTop: "40px", width: "-2376px" }}
                   >
                     {material.split("\n").map((item, index) => (
                       <div className="slider-item" key={index + item}>
                         <img alt="img4" src={item} />
                       </div>
                     ))}
                   </div>
                 </div>
               </>
             ) : null
           )
       )}
       {data.map(
         (product) =>
           product.proyectos_sagaon &&
           product.proyectos_sagaon.map((material) =>
             material !== null ? (
               <>
                 <div style={{ position: "relative" }}>
                   <a
                     href="https://www.sagaon.tech/collections/vectores-corte-y-grabado-cnc-laser-y-router-gratis"
                     target="_top"
                     style={{
                       position: "absolute",
                       right: "0px",
                       bottom: "0px",
                       width: "100%",
                       zIndex: "1",
                     }}
                   >
                     <button className="simple-button">
                       DESCARGA TUS DISEÑOS
                     </button>
                   </a>
                   <h2 className="slider-header">PROYECTOS SAGAON</h2>
                   <div
                     className="slider-container"
                     style={{ height: "400px" }}
                   >
                     <div
                       className="slider-wrapper animation"
                       style={{ width: "-836.5px" }}
                     >
                       {material.split("\n").map((item, index) => (
                         <div className="slider-item" key={index + item}>
                           <img alt="img4" src={item} />
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
               </>
             ) : null
           )
       )}
       {data.map((product) =>
         product.urlvideo !== null ? (
           <div key={product.sku}>
             <div>
               <h2 className="slider-header">ADICIONAL</h2>
             </div>

             <div className="accordion-container">
               <div className="accordion-wrapper">
                 <iframe
                   title="youtube-video"
                   width="560px"
                   height="315px"
                   src={product.urlvideo}
                 ></iframe>
                 <div>
                   {product.preguntas &&
                     product.preguntas.map((pregunta, index) => (
                       <Accordion
                         key={index}
                         expanded={expanded === `panel${index}`}
                         onChange={handleChange(`panel${index}`)}
                       >
                         <AccordionSummary
                           style={{
                             backgroundColor: "#e5e4e4",
                             height: "53px",
                           }}
                           // expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                         >
                           <Typography className="accordion-subject">
                             {pregunta.pregunta}
                           </Typography>
                         </AccordionSummary>
                         <AccordionDetails>
                           <Typography
                             className="accordion-details"
                             style={{ textAlign: "left" }}
                           >
                             {pregunta.respuesta}
                           </Typography>
                         </AccordionDetails>
                       </Accordion>
                     ))}
                 </div>
               </div>
             </div>
           </div>
         ) : null
       )}

       {/*<div style={{ marginTop: "150px", position: "relative" }}>
        <img
          className="footer-img"
          alt="img-CNC3020"
          height="500px"
          width="100%"
          src="https://imgur.com/yOjg5AF.jpg"
        />
        <a
          target="_top"
          download=""
          href="/static/media/CNC3020.f93f8510d887c32e7041.pdf"
          style={{
            position: "absolute",
            top: "60%",
            zIndex: "1",
            left: "0px",
            width: "100%",
          }}
        >
          <button className="negative-simple-button">
            DESCARGA TU FICHA TECNICA
          </button>
        </a>
      </div>*/}
     </div>
   );
};
