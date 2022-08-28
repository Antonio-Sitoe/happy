import React, { useState } from 'react'
import { Container } from '../styles/dados'
import Layault from '../Components/Layault/Layault'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


type Inputs = {
  name: string,
  about: string,
  whatsappNumber: number,
  instruction: string,
  visitHour: number,
  weekendService: boolean
}

const schema = yup.object({
  name: yup.string().required("Por favor, informe seu nome!"),
  about: yup.string().required("Esse campo é obrigatório!"),
  whatsappNumber: yup.string().min(11, "Digite no minímo 11 caracteres").required("Informe o número do seu whatsapp ou de contato"),
  instruction: yup.string().required("Esse campo é obrigatório!"),
  visitHour: yup.string().required("Informe um horário de visita!"),
  weekendService: yup.boolean()

}).required();

const Dados = () => {

  const [ dataUser , setDataUser ] = useState({});
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });


  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Layault title='Adicione um orfanato'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <section className="section-dados">

            <h1>Dados</h1>

            <div className="field">
              mapa
            </div>

            <div className="field">
              <label htmlFor="name">Nome *</label>
              <input type="text" id="name" {...register("name")} required/>
              {errors.name && <span className="error-alert">{errors.name?.message}</span>}
            </div>

            <div className="field">
              <div className="info-sobre">
                <label htmlFor="sobre">Sobre *</label>
                <small>Máximo de 300 carecteres</small>

              </div>

              <textarea id="sobre" maxLength={300} {...register("about")} required/>
              {errors.about && <span className="error-alert">{errors.about?.message}</span>}
            </div>

            <div className="field">
              <label htmlFor="whatsappNumber">Número do Whatsapp *</label>
              <input type="number" id="whatsappNumber" {...register("whatsappNumber")} required/>
              {errors.whatsappNumber && <span className="error-alert">{errors.whatsappNumber?.message}</span>}

            </div>

            <div className="field">
              <label htmlFor="photo">Fotos</label>
              <label htmlFor="photo"className="inputPhoto">+</label>
              <input type="file" id="photo"/>
            </div>

          </section>

          <section className="section-validacao">

            <h1>Visitação</h1>

            <div className="field">
              <label htmlFor="instruction">Instrução *</label>
              <textarea id="instruction" maxLength={300} {...register("instruction")} required/>
              {errors.instruction && <span className="error-alert">{errors.instruction?.message}</span>}
              
            </div>

            <div className="field">
              <label htmlFor="visitHour">Horário de visitas *</label>
              <input type="time" id="visitHour " {...register("visitHour")} required/>
              {errors.visitHour && <span className="error-alert">{errors.visitHour?.message}</span>}
            </div>

            <div className="toggle-content">
              <label htmlFor="checkbox">Atende fim de semana?</label>
              <input type="checkbox" id="checkbox" {...register("weekendService")} />
            </div>

            <div className="field">
              <input type="submit" value="Confirmar" />
            </div>

          </section>

        </Container>
      </form>
    </Layault>
  )
}

export default Dados