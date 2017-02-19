import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  >* {
    width: 100%;
  }
  >* + * {
    margin-left: 0.5rem;
  }
`;

export default Content;
