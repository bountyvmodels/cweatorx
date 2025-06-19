'use client'

export default function Home() {
  const handleClick = () => {
    window.location.href = '/signup'
  }

  return (
    <main className="p-10">
      <h1 className="text-4xl mb-4">Cweators</h1>
      <button
        onClick={handleClick}
        className="bg-pink-500 text-white px-4 py-2 rounded"
      >
        Try Signup
      </button>
    </main>
  )
}
