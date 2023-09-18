import "./Colaborador.css";

const Colaborador = ({ nome, imagem, cargo, corDeFundo, onRemoverColaborador }) => {
  
  const handleRemoverColaborador = () => {
    const colaboradorParaRemover = { nome, imagem, cargo, corDeFundo };
    onRemoverColaborador(colaboradorParaRemover);
  };

  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        {/* <button className="btn-card" onClick={handleRemoverColaborador}>
          X
        </button> */}
      </div>
    </div>
  );
};

export default Colaborador;
