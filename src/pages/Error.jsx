import styled from 'styled-components';
import Image from '../images/404page.svg';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-7);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-1);
    margin-bottom: 1.5rem;
    font-weight: 400;
  }

  p {
    color: var(--clr-grey-3);
  }

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
`;

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={Image} alt="404 Page Not Found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't to find the page you're looking for</p>
        <Link className="btnError" to="/">
          back home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
