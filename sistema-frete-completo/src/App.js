
import React, { useState } from "react";

export default function CotacaoFrete() {
  const [form, setForm] = useState({
    placa: "",
    cliente: "",
    destino: "",
    peso: 0,
    km: 0,
    valorNFE: 0,
    pedagio: 0,
    custoKm: 1.5,
    custoDia: 300,
    dias: 1,
    diariaMotorista: 0,
    cargaDescarga: 0,
    freteBruto: 0
  });

  const custoTotal = (form.km * form.custoKm) + (form.dias * form.custoDia) +
    parseFloat(form.pedagio) + parseFloat(form.diariaMotorista) + parseFloat(form.cargaDescarga);
  const freteLiquido = form.freteBruto * 0.88;
  const margem = freteLiquido - custoTotal;

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>Sistema de Cotação de Frete</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {["placa", "cliente", "destino", "peso", "km", "valorNFE", "pedagio", "dias", "diariaMotorista", "cargaDescarga", "freteBruto"].map(field => (
          <input
            key={field}
            name={field}
            placeholder={field}
            value={form[field]}
            onChange={handleChange}
            style={{ padding: 8 }}
          />
        ))}
      </div>

      <div style={{ marginTop: 20, background: "#eee", padding: 15 }}>
        <p><strong>Custo Total:</strong> R$ {custoTotal.toFixed(2)}</p>
        <p><strong>Frete Líquido:</strong> R$ {freteLiquido.toFixed(2)}</p>
        <p><strong>Margem Bruta:</strong> R$ {margem.toFixed(2)}</p>
      </div>
    </div>
  );
}
