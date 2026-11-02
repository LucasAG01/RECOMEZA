
import { Link, useLocation } from 'react-router'

const contenidos = {
  ayuda: {
    titulo: 'Recursos de ayuda',
    descripcion: 'Información sobre situaciones de violencia, apoyo y recuperación personal.',
  },
  denuncia: {
    titulo: 'Orientación para denunciar',
    descripcion: 'Conoce los canales oficiales de denuncia y los servicios de acompañamiento.',
  },
  informacion: {
    titulo: 'Guía informativa',
    descripcion: 'Consulta información sobre las diferentes formas de violencia y los recursos disponibles.',
  },
}

export default function Home() {
  const location = useLocation()
  const recorrido = location.state?.recorrido

  const destacado = contenidos[recorrido] ?? {
    titulo: 'Bienvenido a RECOMEZA',
    descripcion: 'Explora nuestros recursos de información y orientación.',
  }

  return (
    <main className="min-h-screen bg-emerald-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <header className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <p className="text-2xl font-bold text-emerald-900">
            RECOMEZA
          </p>

          <Link
            to="/"
            className="rounded-lg p-2 font-medium text-emerald-900 underline underline-offset-4 focus-visible:outline-4 focus-visible:outline-blue-700"
          >
            Cambiar elección
          </Link>
        </header>

        <h1 className="mb-8 text-3xl font-bold text-slate-900">
          Tu espacio de orientación
        </h1>

        <section className="rounded-3xl border-2 border-emerald-700 bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm font-semibold text-emerald-800">
            CONTENIDO DESTACADO
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            {destacado.titulo}
          </h2>

          <p className="text-slate-700">
            {destacado.descripcion}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">
            Explorar otras secciones
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(contenidos).map(([id, contenido]) => (
              <article
                key={id}
                className="rounded-2xl border border-emerald-200 bg-white p-6"
              >
                <h3 className="font-semibold text-slate-900">
                  {contenido.titulo}
                </h3>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
