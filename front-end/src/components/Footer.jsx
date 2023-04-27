import styleFooter from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={ styleFooter.containerText }>
      <p>
        Desenvolvido por: Matheus Queiroz, Robson Narcizo, Israel Pereira,
        Guilherme Pavinato, Douglas Fernandes e Davi Gentil.
      </p>
      <p>2023 © Todos os direitos reservados.</p>
    </div>
  );
}
