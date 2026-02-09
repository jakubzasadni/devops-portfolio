import { FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Jakub Zasadni. Zbudowane z{' '}
          <FaHeart className="inline text-red-500 animate-pulse" /> i wdrożone na Azure
        </p>
      </div>
    </footer>
  )
}
