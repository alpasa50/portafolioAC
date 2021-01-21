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
            <h1>Organizacion interna de una computadora</h1>
          </div>
          <div className="nine columns main-col">
            <ol>
              <li>CPU (Central Process Unit)</li>
              <ul>
                <li type="square">Placa base</li>
                <li type="square">Disco duro</li>
                <li type="square">Tarjetas</li>
                <li type="square">Lector de CD/DVD</li>
                <li type="square">Fuente de alimentación</li>
                <li type="square">Cables</li>
              </ul>
              <li>Periféricos</li>
              <ol>
                <li type="square">Entrada de datos</li>
                <ol>
                  <li type="circle">Teclado</li>
                  <li type="circle">Ratón</li>
                  <li type="circle">Escáner</li>
                  <li type="circle">Cámara</li>
                  <li type="circle">Router</li>
                </ol>
                <li type="square">Salida de datos</li>
                <ol>
                  <li type="circle">Pantalla</li>
                  <li type="circle">Altavoces</li>
                  <li type="circle">Impresora</li>
                  <li type="circle">Router</li>
                </ol>
              </ol>
            </ol>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>Componentes del computador</h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Sistemas Numéricos que maneja una computadora.</h3>
                <table class="default">
                  <tr>
                    <th>Setup</th>
                    <th>CMOS</th>
                    <th>BIOS</th>
                  </tr>

                  <tr>
                    <td style={{ padding: 5 }}>
                      Este término tiende confundirse con los demás, pero no es
                      más que la configuración que tienen cada uno de ambos,
                      podemos realizar un SETUP tanto al CMOS como al BIOS
                    </td>

                    <td style={{ padding: 15 }}>
                      Es la encargada de mantener la información configurada y
                      siempre esta cargando cuando la computadora esta encendida
                    </td>

                    <td style={{ padding: 25 }}>
                      La BIOS de la placa madre contiene las instrucciones de
                      inicio de la computadora y solo se puede modificar con
                      actualizaciones directamente para la BIOS. El BIOS puede
                      modificar el CMOS.
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>ASM</h1>
          </div>

          <div className="nine columns main-col">
            <h3>Control de lectura AI</h3>
            <h6>
              Hasta hace un tiempo las computadoras eran solamente dispositivos
              que recibían instrucciones de los dispositivos de entrada y
              salida, pasado un tiempo los científicos y profesionales en el
              área se han enfocado en descubrir como pueden duplicar el cerebro
              humano en una máquina, la cuestión en si es, como pueden crear
              inteligencia, para saber como crear inteligencia primero tienen
              que tener una definición clara de que es la inteligencia, ser
              inteligente es hacer muchos cálculos rápidamente o poder pensar y
              tener criterio, siempre tendré esa pregunta a la primera persona
              que se concentro en el primer algoritmo de regresión lineal para
              simular inteligencia, desde mi punto de vista, la IA no es más que
              eso, muchos cálculos que puede realizar una computadora para
              simular la inteligencia del hombre, ahora bien, seria sencillo
              mencionarlo así pero la cosa se complica, porque esos “cálculos”
              pueden ver más allá de otras dimensiones que todavía no hemos
              descubierto. En general hay 3 tipos de Inteligencia artificial o
              machine learning, el primero sería el aprendizaje supervisado, el
              cual, como su nombre lo indica, es aquel en el que el programador
              tiene que estar verificando siempre los resultados que muestra el
              modelo para que tenga la menor cantidad de errores posibles y
              perfeccione en la tarea en cuestión, el segundo es el no
              supervisado, contrario al que acabo de mencionar, este se enfoca
              en que la maquina se de cuenta de sus errores y con ensayo y error
              mejore cada vez mas y por ultimo el reforzado que se enfoca solo
              en pruebas y mas pruebas, este ultimo puede llegar hasta un poco
              más profundo como el aprendizaje profundo que va más allá de los
              mencionados anteriormente.
            </h6>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>Elementos principales del procesador</h1>
          </div>
          <div className="nine columns main-col">
            <h3>ALU</h3>
            <h6>
              Se define a la unidad ALU (por sus siglas en inglés Arithmetic
              Logic Unit) como una de las unidades que forman parte de la Unidad
              Central de Procesos mediante la cual es posible realizar una gran
              cantidad de operaciones aritméticas básicas (Suma, Resta, División
              y Multiplicación) además de realizar algunas operaciones Lógicas
            </h6>
            <h3>Power Supply</h3>
            <ol>
              <li>El estándar ATX</li>
              <li>Conector de 4 pines para CPU</li>
              <li>Conector de 8 pines para CPU</li>
              <li>Conector Molex</li>
              <li>Conector SATA de energía</li>
              <li>Conector para unidades Floppy</li>
            </ol>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>Sistema de una computadora. -CLI-</h1>
          </div>
          <div className="nine columns main-col">trabajo</div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>Arquitectura de propósito general</h1>
          </div>
          <div className="nine columns main-col">trabajo</div>
        </div>
      </section>
    );
  }
}

export default About;
