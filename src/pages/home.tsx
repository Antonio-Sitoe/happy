import { Container } from '../styles/home';
import logo from '../assets/logo.svg';

function Home(){
    return(
        <Container>
            <div className="content">
                <div className="left-content">
                    <img src={logo} alt="Logotipo (Happy)"/>

                    <h1>Leve felicidade para o mundo</h1>
                    <small>Visite orfanatos e mude o dia de muitas crianças.</small>
                </div>

                <div className="right-content">

                </div>
            </div>
        </Container>
    )   
}
export default Home;