'use client'
import { useParams } from 'next/navigation'

export default function EditPage () {
  const params = useParams()
  return (
    <h1>Editando {params.id}</h1>
  )
}