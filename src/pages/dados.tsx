import React from "react";
import { Container } from "../styles/dados";
import Layault from "../Components/Layault/Layault";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

type Inputs = {
  name: string;
  sobre: string;
  whatsappNumber: number;
  instruction: string;
  visitHour: number;
};

const Form = styled.form`
  padding: 2rem;
`;

const Dados = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Layault title="Adicione um orfanato">
      <Form>
        <Container>
          <section className="section-dados">
            <h1>Dados</h1>

            <div className="field">mapa</div>

            <div className="field">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" />
            </div>

            <div className="field">
              <div className="info-sobre">
                <label htmlFor="sobre">Sobre</label>
                <small>Máximo de 300 carecteres</small>
              </div>

              <textarea id="sobre" maxLength={300} />
            </div>

            <div className="field">
              <label htmlFor="whatsappNumber">Número do Whatsapp</label>
              <input type="number" id="whatsappNumber" />
            </div>

            <div className="field">
              <label htmlFor="photo">Fotos</label>
              <button>+</button>
            </div>
          </section>

          <section className="section-validacao">
            <h1>Visitação</h1>

            <div className="field">
              <label htmlFor="instruction">Instrução</label>
              <textarea id="instruction" maxLength={300} />
            </div>

            <div className="field">
              <label htmlFor="visitHour">Horário de visitas</label>
              {/* aqui e campo tipo texto mesmo */}
              <input type="text" id="visitHour" />
            </div>

            <div className="toggle-content">
              <label htmlFor="checkbox">Atende fim de semana?</label>
              <input type="checkbox" name="" id="checkbox" />
            </div>

            <div className="field">
              <input type="submit" value="Confirmar" />
            </div>
          </section>
        </Container>
      </Form>
    </Layault>
  );
};

export default Dados;
