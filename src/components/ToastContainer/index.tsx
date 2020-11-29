import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => (
  <Container>
    <Toast>
      <FiAlertCircle size={20} />

      <div>
        <strong>Aconteceu um erro ops</strong>
        <p>Não foi possível fazer login no app :/</p>
      </div>
      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>
  </Container>
);

export default ToastContainer;