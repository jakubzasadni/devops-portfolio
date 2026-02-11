import { FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 bg-darker border-t border-primary/20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Jakub Zasadni. Zbudowane z{' '}
          <FaHeart className="inline text-primary animate-pulse" /> i wdrożone na GitHub Pages
        </p>
      </div>
    </footer>
  )
}
