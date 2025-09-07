export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-bg text-white">
      <div className="max-w-2xl w-full bg-card rounded-xl shadow-lgx p-10 text-center">
        <img src="/logo.svg" alt="Logo" className="mx-auto mb-6 h-12 opacity-90" />
        <h1 className="text-3xl font-semibold mb-3">Bem-vindo(a) à Raspadinha</h1>
        <p className="text-sm text-muted mb-6">Front de jogo e painel padronizados por tema.</p>
        <div className="flex items-center justify-center gap-3">
          <a href="/jogar" className="px-5 py-3 rounded-xl bg-primary hover:opacity-90">Jogar agora</a>
          <a href="/dashboard" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15">Ir ao painel</a>
        </div>
      </div>
    </main>
  )
}
