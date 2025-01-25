# 🌟 Blog Preview Card - Frontend Mentor Challenge

![Blog Preview Card](./app/images/illustration-article.svg)

**A visually appealing and responsive blog preview card built with Remix and Tailwind CSS.** This project replicates the design challenge from [Frontend Mentor](https://www.frontendmentor.io/challenges), focusing on clean design, accessibility, and responsive layouts.

---

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Accessible Markup**: Built with semantic HTML and ARIA labels.
- **Interactive Elements**: Includes hover effects and keyboard navigation.
- **Privacy Compliant**: Features a dedicated privacy policy page with GDPR compliance.
- **Clean Styling**: Designed with Tailwind CSS for modular and maintainable code.

---

## 🛠 Tech Stack

- **Remix**: Optimized build pipeline and server-side rendering for performance.
- **Tailwind CSS**: Utility-first CSS framework for fast and flexible styling.
- **React + TypeScript**: Component-based architecture with type safety.
- **Matomo Analytics**: Privacy-friendly analytics integration.

---

## 📂 Project Structure

├── app/ # Core application directory
│ ├── components/ # Reusable components (e.g., AuthorSection, Footer)
│ ├── images/ # Images and illustrations
│ ├── routes/ # Page routes (e.g., privacy-policy, \_index)
│ ├── styles/ # CSS styles (e.g., Tailwind config)
│ ├── entry.client.tsx # Client entry point
│ ├── entry.server.tsx # Server entry point
│ ├── root.tsx # Application root file
├── public/ # Public assets (fonts, favicon)
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── vite.config.ts # Vite configuration for Remix
├── .eslintrc.cjs # ESLint configuration
├── README.md # Project documentation
├── style-guide.md # Frontend Mentor style guide
├── package.json # Dependencies and scripts
└── package-lock.json # Dependency lock file

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/delfinjfb/blog-preview-card
   cd blog-preview-card
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

   The application should be running at [http://localhost:3000](http://localhost:3000).

---

## 📸 Screenshot

![Blog Preview Card](./app/images/illustration-article.svg)

This is the blog preview card as implemented in the project, featuring responsive design and visually engaging elements.

---

## 🌍 Live Demo

- **Live Site**: [Blog Preview Card](https://blog-preview-card-remix-delfin.vercel.app/)
- **Frontend Mentor Challenge**: [Challenge Details](https://www.frontendmentor.io/solutions/blog-preview-card-made-in-react-remix-with-tailwind-lyMxD7uJYa)

---

## Accessibility Features

- **ARIA Labels**: Additional ARIA labels are used to help screen readers identify key interactive elements.
- **Semantic HTML**: Proper use of HTML tags for better screen reader compatibility.
- **Keyboard Navigation**: All interactive elements are accessible via keyboard.

## Deployment

This project can be easily deployed using Vercel. It’s configured to be production-ready once built.

- To deploy:

  ```sh
  npm run build
  npm run start
  ```

## Links

- [Live Site URL](https://blog-preview-card-remix-delfin.vercel.app/m)
- [Frontend Mentor](https://www.frontendmentor.io/challenges)

## Credits

- **Design by Frontend Mentor**: [Frontend Mentor](https://www.frontendmentor.io/)
- **Coded by Delfin Fernandez**: [GitHub Profile](https://github.com/delfinjfb/)

## License

This project is licensed under the MIT License.

## Contact

- GitHub: [@delfinjfb](https://github.com/delfinjfb)
- Frontend Mentor Profile: [@delfinjfb](https://www.frontendmentor.io/profile/delfinjfb)

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use and modify as needed.

---

### 🔍 Notes

- The file `privacy-policy.tsx` ensures GDPR compliance and is included in the `routes` folder.
- The `Matomo.tsx` file provides a privacy-friendly analytics setup.
- Fonts (e.g., `Figtree`) are located in the `public/fonts/` directory.
