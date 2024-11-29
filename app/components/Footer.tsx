import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center md:justify-between space-y-2 md:space-y-0 md:space-x-4 text-sm mt-4">
      <Link to="/privacy-policy" className="text-black hover:underline" aria-label="Read our Privacy Policy">
        Privacy Policy
      </Link>
      <a href="https://github.com/delfinjfb/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline" aria-label="View the GitHub profile of Delfin Fernandez">
        Coded by Delfin Fernandez
      </a>
      <a href="https://www.frontendmentor.io/challenges" target="_blank" rel="noopener noreferrer" className="text-black hover:underline" aria-label="View the Frontend Mentor challenges page">
        Challenge by Frontend Mentor
      </a>
    </footer>
  );
}
