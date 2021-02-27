import styled from 'styled-components';

export const TableContainer = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const Row = styled.tr`
  background-color: whitesmoke;
  \ &:hover {
    background-color: #ddd;
  }
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #00bfff;
  text-align: center;
  color: black;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
`;

export const TableContent = styled.td`
  border: 1px solid #00bfff;
  padding: 8px;
`;
