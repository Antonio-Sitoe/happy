import React from 'react';
import { Container } from '../styles/home';
import { FiArrowRight } from 'react-icons/fi';
import logo from '../assets/logo.svg';
import ilustration from '../assets/ilustrationHome.svg';
import Link from "next/link";


function Home(): JSX.Element{
    return(
        <Container>
            <div className="content">
                <header>
                    <img src={logo} alt="Logotipo (Happy)"/>

                    <div className="location">
                        <strong>Rio do Sul</strong>
                        <span>Santa Catarina</span>
                    </div>
                </header>

                <div className="box">
                    <main className="left-content">
                        <h1>Leve felicidade para o mundo</h1>
                        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                    </main>

                    <div className="right-content">
                        <img src={ilustration} alt="Ilustração de crianças alegres"/>
                        <Link href="/"> 
                            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )   
}
export default Home;