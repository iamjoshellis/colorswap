import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  >* + * {
    margin-left: 0.5rem;
  }
`;

export default Wrap;
