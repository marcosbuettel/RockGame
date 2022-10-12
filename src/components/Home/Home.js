import CardList from '../CardList/CardList';
import HomeInfo from './HomeStyled';

const Home = () => {
  return (
    <div>
      <HomeInfo>
        <h2>QUANTAS BANDAS VOCÊ CONSEGUE ACERTAR?</h2>
        <h4>
          Clique em um dos players, ouça um trecho da música, digite o nome da
          banda e aperte "enter".
        </h4>
        <p>
          <b>Dica:</b> Não existe diferença entre maiúsculas ou minúsculas.
          Exemplo: você pode digitar Guns N Roses ou guns n roses, ambos estão
          certos.
        </p>
      </HomeInfo>
      <CardList />
    </div>
  );
};

export default Home;
