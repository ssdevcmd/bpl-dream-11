# 🏏 BPL Dream 11 — Player Auction & Team Builder

A modern, dynamic cricket fantasy team builder built with **React**, **Tailwind CSS**, **DaisyUI**, and **React-Toastify**. Users can browse available BPL players, manage a dynamic coin budget, select up to 12 players for their squad, and manage their team in real time.

---

## 🔗 Live Demo & Repository

* **Live Application:** [https://bpl-dream-11-liard.vercel.app/]
* **GitHub Profile:** [https://github.com/ssdevcmd]
* **Developer Portfolio:** [https://solayman-sani-portfolio.vercel.app/]

---

## ✨ Features

- **Dynamic Coin Management:** Claim free coins and automatically track balance deductions/refunds when buying or removing players.
- **Squad Limitations:** Enforces a maximum of **12 players per squad** with instant feedback via `react-toastify`.
- **Duplicate Protection:** Prevents selecting the same player twice with validation against main state.
- **Tab Switching:** Toggle effortlessly between **Available Players** grid and **Selected Squad** view.
- **Responsive UI:** Styled using Tailwind CSS and DaisyUI, featuring a custom signature color accent (`#E7FE29`).
- **Interactive Player Cards:** Renders player details, roles, bidding prices, and cropped high-quality player images in both list and card view.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React.js (Hooks: `useState`, `useEffect`)
- **Styling & UI:** Tailwind CSS, DaisyUI, React Icons
- **Notifications:** React-Toastify
- **Deployment:** Vercel

---

## 📁 Component Architecture

```text
src/
├── components/
│   ├── Navbar.jsx          # Displays branding, coin balance, and navigation
│   ├── Banner.jsx          # Hero section with coin claim trigger
│   ├── Players.jsx         # Main container handling state & tab navigation
│   ├── Available.jsx       # Grid rendering available players from JSON
│   ├── Card.jsx            # Individual player card component
│   ├── Selected.jsx        # Selected squad list container
│   ├── SelectedCard.jsx    # Selected player item with image and delete button
│   └── Footer.jsx          # App footer
├── App.jsx                 # Root component managing central state
└── main.jsx                # App entry point


🚀 Getting Started Locally
Follow these steps to run the project locally on your machine:

Clone the repository:

Bash
git clone [https://github.com/ssdevcmd/bpl-dream-11.git](https://github.com/ssdevcmd/bpl-dream-11.git)
cd bpl-dream-11
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open in browser:
Navigate to http://localhost:5173 to view the application.

👨‍💻 Author
Md Solayman Sani

Email: saniahmed5484@gmail.com

GitHub: @ssdevcmd

Portfolio: solayman-sani-portfolio.vercel.app