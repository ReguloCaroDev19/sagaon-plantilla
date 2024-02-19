import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import './mobil.css';
import { useParams } from 'react-router-dom';

export const Plantilla = () => {
  const [data, setData] = useState<any>([]);
  const [info, setInfo] = useState<any>('descripcion');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sagaon-express.vercel.app/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  const cambiarInfo = (value: any) => {
    setInfo(value);
  };
  return (
    <div className="App">
      <div className="content-box-container">
        <div className="content-box-buttons">
          <button
            className={`${info === "descripcion" ? "clicked" : null}`}
            onClick={(event) => {
              cambiarInfo(event.currentTarget.value);
            }}
            value={"descripcion"}
          >
            DESCRIPCION
          </button>
          <button
            className={`${info === "incluye" ? "clicked" : null}`}
            onClick={(event) => {
              cambiarInfo(event.currentTarget.value);
            }}
            value={"incluye"}
          >
            INCLUYE
          </button>
          <button
            className={`${info === "ficha" ? "clicked" : null}`}
            onClick={(event) => {
              cambiarInfo(event.currentTarget.value);
            }}
            value={"ficha"}
          >
            FICHA TECNICA
          </button>
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
            {data.map((product: any) => (
              <div key={product.sku} className="product-info">
                {info === "descripcion" && (
                  <p className="appear" style={{ margin: "0px" }}>
                    {product.descripcion}
                  </p>
                )}
                {info === "incluye" && (
                  <div className="appear" style={{ margin: "0px" }}>
                    <ul style={{}}>
                      {product.incluye
                        .split("\n")
                        .map((item: any, index: any) => (
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
                {info === "ficha" && (
                  <div className="appear" style={{ margin: "0px" }}>
                    <ul style={{}}>
                      {product.fichatecnica
                        .split("\n")
                        .map((item: any, index: any) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className="slider-header">¿QUE MATERIALES PUEDO USAR?</h2>
      <div className="slider-container" style={{ height: "400px" }}>
        <div
          id="id"
          className="slider-wrapper animation"
          style={{ width: "-1673px" }}
        >
          {data.map((product: any) =>
            product.materiales.map((material: any, index: number) => (
              <div
                className="slider-item"
                key={Math.floor(Math.random() * (10000 - 1 + 1)) + 1}
              >
                <img alt="img1" src={material.urlimage} />
                <p>{material.name}</p>
                <p>Graba: SI</p>
                <p>Corta: 3mm</p>
              </div>
            ))
          )}
        </div>
      </div>
      <h2 className="slider-header">PROYECTOS DE CLIENTES</h2>
      <div className="slider-container" style={{ height: "400px" }}>
        <div
          className="slider-wrapper animation"
          style={{ marginTop: "40px", width: "-2376px" }}
        >
          {data.map((product: any) =>
            product.imagenesusuarios
              .split("\n")
              .map((item: any, index: any) => (
                <div className="slider-item" key={index + item}>
                  <img alt="img4" src={item} />
                </div>
              ))
          )}
        </div>
      </div>
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
          <button className="simple-button">DESCARGA TUS DISEÑOS</button>
        </a>
        <h2 className="slider-header">PROYECTOS SAGAON</h2>
        <div className="slider-container" style={{ height: "400px" }}>
          <div
            className="slider-wrapper animation"
            style={{ width: "-836.5px" }}
          >
            {data.map((product: any) =>
              product.proyectossagaon
                .split("\n")
                .map((item: any, index: any) => (
                  <div className="slider-item" key={index + item}>
                    <img alt="img4" src={item} />
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
      <div>
        <h2 className="slider-header">PREGUNTAS FRECUENTES</h2>
      </div>
      {data.map((product: any) => (
        <div className="accordion-container" key={product.sku}>
          <div className="accordion-wrapper">
            <iframe
              title="youtube-video"
              width="560px"
              height="315px"
              src={
                product.urlvideo !== null
                  ? product.urlvideo
                  : "https://www.youtube.com/embed/ZorCIyg1uMI"
              }
            ></iframe>
          </div>
        </div>
      ))}

      <div style={{ marginTop: "150px", position: "relative" }}>
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
      </div>
    </div>
  );
};
