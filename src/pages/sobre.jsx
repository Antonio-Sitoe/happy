import Link from "next/link";
import React from "react";
import ReactToPrint from "react-to-print";

export class ComponentPrinted extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <h1>Luan Henrique</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            eligendi at explicabo quaerat, voluptatem dicta officia architecto
            corporis laborum nesciunt, atque, distinctio commodi? Labore nam sed
            quia maiores ducimus illum!
          </p>
        </div>
      </div>
    );
  }
}

function sobre() {
  const componentRef = React.useRef(null);
  return (
    <div>
      <Link href="/">Voltar</Link>
      <ReactToPrint
        trigger={() => {
          return <button>Imprimir</button>;
        }}
        content={() => componentRef.current}
      />
      <ComponentPrinted ref={componentRef} />
    </div>
  );
}

export default sobre;
