import { FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 bg-dark-200 border-t border-secondary/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} DevOps Portfolio. Zbudowane z{' '}
          <FaHeart className="inline text-red-500 animate-pulse" /> i wdrożone na Azure
        </p>
      </div>
    </footer>
  )
}
