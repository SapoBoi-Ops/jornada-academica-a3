export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50">
      <h1 className="text-4xl font-bold text-blue-900">
        Portal Jornada Acadêmica A3
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Bem-vindo ao início do nosso projeto!
      </p>
      <div className="mt-8">
        {/* Aqui os calouros vão começar a chamar os componentes */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Acessar Portal
        </button>
      </div>
    </main>
  );
}
