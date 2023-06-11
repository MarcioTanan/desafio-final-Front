import { Container } from './styles';

import LogoFooter from '../../assets/logoFooter.svg';

export function Footer() {
  return (
    <Container>
      <div>
       
        <img src={LogoFooter} alt="Logo do Restaurtante em formato hexagonal" />

        <p>© 2023 - Site criado por Marcio Tanan.</p>
      </div>

      
    </Container>
  );
}
