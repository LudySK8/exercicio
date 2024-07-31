import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const Button = styled.button`
  margin: 0 5px;
`;

export const Input = styled.input`
  margin: 5px;
`;
