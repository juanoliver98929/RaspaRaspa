export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Visão geral</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/5 rounded-xl p-4">
          <div className="text-sm text-muted">Vendas</div>
          <div className="text-2xl font-semibold mt-1">—</div>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <div className="text-sm text-muted">Emissões</div>
          <div className="text-2xl font-semibold mt-1">—</div>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <div className="text-sm text-muted">Conversão</div>
          <div className="text-2xl font-semibold mt-1">—</div>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <div className="text-sm text-muted">Fraude suspeita</div>
          <div className="text-2xl font-semibold mt-1">—</div>
        </div>
      </div>
    </div>
  );
}
