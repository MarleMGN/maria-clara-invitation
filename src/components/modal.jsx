import React, { useState } from "react";

const Modal = ({ closeModal, openModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [nome, setNome] = useState("");
  const [presenca, setPresenca] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [convidados, setConvidados] = useState("1");
  const [mensagem, setMensagem] = useState("");

  function submitForm() {
    if (!nome.trim() || !presenca) {
      alert("Por favor, preencha seu nome e confirmação de presença.");
      return;
    }

    const formUrl = "https://script.google.com/macros/s/AKfycbxCwvqjc7DucTCNgZaINbFNemtwNXBHdYvCUuBEpfMhhxovrl2gMxLP-W64TtvaCL8_Ew/exec";

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("telefone", telefone);
    formData.append("presenca", presenca);
    formData.append("convidados", convidados);
    formData.append("mensagem", mensagem);

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    setSubmitted(true);
  }

  return (
    <div
      className={`modal__overlay ${openModal ? "open" : ""}`}
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className="modal">
        <button className="modal__close" onClick={closeModal}>
          ✕
        </button>

        {!submitted ? (
          <>
            <span className="modal__label">Confirmação de Presença</span>
            <h2 className="modal__title">Você vai?</h2>
            <p className="modal__subtitle">
              Confirme sua presença para a celebração
            </p>

            <div className="form__group">
              <label className="form__label" htmlFor="nome" >Nome completo</label>
              <input
                id="nome"
                type="text"
                className="form__input"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="form__row">
              <div className="form__group">
                <label className="form__label" htmlFor="email" >E-mail</label>
                <input
                  id="email"
                  type="email"
                  className="form__input"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="telefone" >Telefone</label>
                <input
                  id="telefone"
                  type="tel"
                  className="form__input"
                  placeholder="(00) 00000-0000"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
            </div>

            <div className="form__row">
              <div className="form__group">
                <label className="form__label" htmlFor="confirmacao" >Confirmação</label>
                <select
                  id="confirmacao"
                  className="form__select"
                  value={presenca}
                  onChange={(e) => setPresenca(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="sim">✓ Vou comparecer</option>
                  <option value="nao">✗ Não poderei ir</option>
                </select>
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="convidados" >Número de convidados</label>
                <select
                  id="convidados"
                  className="form__select"
                  value={convidados}
                  onChange={(e) => setConvidados(e.target.value)}
                >
                  <option value="1">Apenas eu</option>
                  <option value="2">2 pessoas</option>
                  <option value="3">3 pessoas</option>
                  <option value="4">4 pessoas</option>
                  <option value="5+">5 ou mais</option>
                </select>
              </div>
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="mensagem" >
                Mensagem para a aniversariante (opcional)
              </label>
              <input
                id="mensagem"
                type="text"
                className="form__input"
                placeholder="Uma mensagem carinhosa..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </div>

            <button className="form__submit" onClick={submitForm}>
              Enviar Confirmação
            </button>
          </>
        ) : (
          <div className="form__success show">
            <div style={{ fontSize: 40, marginBottom: 16 }}>✦</div>
            <h3>Obrigado!</h3>
            <p>
              Sua presença foi confirmada.
              <br />
              Estamos ansiosos para celebrar com você.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;