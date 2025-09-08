"use client";
import { useState } from "react";
import { api } from "../../lib/apiClient";

type Status = "idle" | "raspando" | "ganhou" | "perdeu" | "erro";

export default function Jogar() {
  const [status, setStatus] = useState<Status>("idle");
  const [resultado, setResultado] = useState<string>("");

  async function iniciar() {
    setStatus("raspando");
    try {
      // TODO: ajuste endpoint conforme seu backend
      const { data } = await api.post("/jogo/iniciar");
      setResultado(data?.premio ?? "");
      setStatus(data?.ganhou ? "ganhou" : "perdeu");
    } catch (e) {
      setStatus("erro");
    }
  }

  return (
    <div className="min-h-screen bg-bg text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-card rounded-xl shadow-lgx p-6">
        <h1 className="text-2xl font-semibold mb-2">Raspadinha</h1>
        <p className="text-sm text-muted mb-6">Raspe e descubra se você ganhou!</p>

        <div className="h-52 mb-4 bg-black/20 rounded-xl grid place-items-center">
          {/* TODO: plugue aqui seu canvas/componente de raspagem */}
          <span>Canvas da raspadinha (placeholder)</span>
        </div>

        <button onClick={iniciar} className="w-full py-3 rounded-xl bg-primary hover:opacity-90">
          Jogar agora
        </button>

        {status !== "idle" && (
          <div className="mt-4 text-center" aria-live="polite">
            {status === "ganhou" && <b>Parabéns! {resultado}</b>}
            {status === "perdeu" && <span>Não foi dessa vez. Tente de novo!</span>}
            {status === "erro" && <span>Erro ao iniciar partida.</span>}
            {status === "raspando" && <span>Carregando…</span>}
          </div>
        )}
      </div>
    </div>
  );
}
