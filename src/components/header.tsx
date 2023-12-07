import Link from 'next/link'

export default function Header () {
  return (
    <header>
      <h1>Comparitiko</h1>
      <nav>
        <Link href={'/'}>Inicio</Link>
      </nav>
    </header>
  )
}