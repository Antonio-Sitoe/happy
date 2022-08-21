import Image from "next/image";
import { Container } from "../styles/home";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

function Home() {
  return (
    <Container>
      <div className="content">
        <header>
          <Image
            src="/Logo.svg"
            alt="Logotipo (Happy)"
            width={240}
            height={74}
          />

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
            <Image
              src={"/Childrens.svg"}
              alt="Ilustração de crianças alegres"
              width={400}
              height={500}
            />
            <Link href="/">
              <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Home;
