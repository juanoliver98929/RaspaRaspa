export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-white grid grid-cols-[260px_1fr]">
      <aside className="border-r border-white/10 p-4">
        <div className="font-semibold mb-6 flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-6" />
          <span>Painel</span>
        </div>
        <nav className="space-y-2">
          <a className="block px-3 py-2 rounded-lg hover:bg-white/5" href="/dashboard">Visão geral</a>
          <a className="block px-3 py-2 rounded-lg hover:bg-white/5" href="/dashboard/raspadinhas">Raspadinhas</a>
          <a className="block px-3 py-2 rounded-lg hover:bg-white/5" href="/dashboard/usuarios">Usuários</a>
        </nav>
      </aside>
      <main className="p-6">
        <header className="flex items-center justify-between mb-6">
          <input className="bg-white/5 rounded-lg px-3 py-2 w-72 outline-none" placeholder="Buscar…" />
          <div className="flex items-center gap-3">
            <button className="px-3 py-2 rounded-lg bg-white/5">Notificações</button>
            <div className="w-9 h-9 rounded-full bg-white/10" />
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
