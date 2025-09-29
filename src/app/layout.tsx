import './globals.css'

export const metadata = {
  title: 'Revo - Plataforma de Voluntariado',
  description: 'Conecte-se com organizações e eventos de voluntariado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
