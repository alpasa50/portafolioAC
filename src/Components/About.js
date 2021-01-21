import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>Sistemas numericos</h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Sistemas Numéricos que maneja una computadora.</h3>
                <li>Decimal</li>
                <li>Binario</li>
                <li>Octal</li>
                <li>Hexadecimal</li>
                <li>Duodecimal</li>
                <li>Alfanumérico</li>
                <h3>Mi sistema numérico</h3>
                <img src="images/sn2.png" alt="Logo" />
                <h3>Tipos de codigos</h3>
                <li>BCD</li>
                <li>Exceso 3</li>
                <li>Gray</li>
                <li>Alfanumérico o ASCII Extendido</li>
                <img src="images/sn1.png" alt="Logo" />
                <h3>Letra é</h3>
                <h1>
                  ¿Por qué la letra “e” acentuada, tiene un código secuencial
                  alejado de los demás? Por diferencia de Idioma
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>Circuitos lógicos
            </h1>
          </div>
          <div className="nine columns main-col">trabajo</div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>Circuitos lógicos
            </h1>
          </div>
          <div className="nine columns main-col">trabajo</div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>Circuitos lógicos
            </h1>
          </div>
          <div className="nine columns main-col">trabajo</div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>Circuitos lógicos
            </h1>
          </div>
          <div className="nine columns main-col">trabajo</div>
        </div><div className="row work">
        <div className="three columns header-col">
          <h1>Circuitos lógicos
          </h1>
        </div>
        <div className="nine columns main-col">trabajo</div>
      </div>
      </section>
    );
  }
}

export default About;
