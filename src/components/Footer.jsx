import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import recicla from '../assets/logorecicla.png'

const footer = () => {
  return (
    <CDBFooter className="shadow bg-green-200">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={recicla} width="30px" />
              <span className="ml-3 h5 font-weight-bold">Alagoas Mais Limpa</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
			      Conscientizando a população a criar novos produtos a partir de substâncias recicláveis. Um novo olhar para a coleta seletiva e a reutilização.
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Informações
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Sobre o Projeto</CDBFooterLink>
              <CDBFooterLink href="/">Contato</CDBFooterLink>
              <CDBFooterLink href="/">Trabalhe conosco</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Ajuda
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Suporte</CDBFooterLink>
              <CDBFooterLink href="/">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Produtos
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Brincos</CDBFooterLink>
              <CDBFooterLink href="/">Colares</CDBFooterLink>
              <CDBFooterLink href="/">Sapatos</CDBFooterLink>
              <CDBFooterLink href="/">Vestidos</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Alagoas Mais Limpa, 2022. Todos os direitos reservados.</small>
      </CDBBox>
    </CDBFooter>
  );
};

export default footer
 