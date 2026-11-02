
import { Link } from 'react-router'
import { motion, useReducedMotion } from 'motion/react'
import { HeartHandshake, Scale, BookOpen } from 'lucide-react'

const MotionLink = motion.create(Link)

const opciones = [
  {
    id: 'ayuda',
    titulo: 'Necesito ayuda',
    icono: HeartHandshake,
  },
  {
    id: 'denuncia',
    titulo: 'Quiero denunciar',
    icono: Scale,
  },
  {
    id: 'informacion',
    titulo: 'Busco información',
    icono: BookOpen,
  },
]

export default function Welcome() {
  const reducirMovimiento = useReducedMotion()

  return (
    <motion.main
      initial={reducirMovimiento ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex min-h-screen items-center justify-center bg-emerald-50 px-6 py-12"
    >
      <div className="w-full max-w-5xl text-center">

        <h1 className="mb-5 font-bold tracking-widest text-emerald-800">
          RECOMEZA
        </h1>

        <h2 className="mb-10 text-3xl font-bold text-slate-900 md:text-5xl">
          ¿Qué necesitas hoy?
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {opciones.map((opcion, index) => {
            const Icono = opcion.icono

            return (
              <MotionLink
                key={opcion.id}
                to="/inicio"
                state={{ recorrido: opcion.id }}

                initial={
                  reducirMovimiento
                    ? false
                    : { opacity: 0, y: 20 }
                }
                animate={{ opacity: 1, y: 0 }}

                transition={{
                  duration: 0.45,
                  delay: reducirMovimiento ? 0 : index * 0.12,
                  ease: 'easeOut',
                }}

                whileHover={
                  reducirMovimiento ? undefined : { y: -6 }
                }
                whileTap={
                  reducirMovimiento ? undefined : { scale: 0.98 }
                }

                className="flex min-h-48 flex-col items-center justify-center gap-5 rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm transition-colors hover:border-emerald-700 hover:bg-emerald-50 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                <Icono
                  size={52}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="text-emerald-800"
                />

                <span className="text-lg font-semibold text-slate-900">
                  {opcion.titulo}
                </span>
              </MotionLink>
            )
          })}
        </div>

        <Link
          to="/inicio"
          className="mt-8 inline-block rounded-lg p-2 text-emerald-900 underline underline-offset-4 focus-visible:outline-4 focus-visible:outline-blue-700"
        >
          Explorar sin elegir una opción
        </Link>

      </div>
    </motion.main>
  )
}
