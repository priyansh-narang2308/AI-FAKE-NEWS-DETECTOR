# 📰 AI Fake News Detector

## 🚀 Project Overview
The **AI Fake News Detector** is a web-based application that analyzes news articles and URLs to determine their credibility using AI-powered analysis. Users can input news text or URLs, and the system evaluates their trustworthiness. The project utilizes **React.js**, **Node.js**, and **AI-based text analysis services**.

## ✨ Features
- 🔍 **News Analysis**: Enter text or a URL to analyze credibility.
- 📊 **Trust Score**: Get a trustworthiness score for news articles.
- 📜 **Local Storage**: Stores previously analyzed news articles for reference.
- 🎨 **User-Friendly UI**: A clean and modern interface using Tailwind CSS.
- 🔄 **Real-time Feedback**: Displays results instantly after analysis.
- 🛠️ **Built with React.js**: Ensures smooth and interactive UI performance.

## 🏗️ Tech Stack
- **Frontend**: React.js, Tailwind CSS, React Icons, React Router
- **Backend**: Node.js, Express.js (if applicable)
- **AI Services**: Custom AI Model or External API (e.g., NLP for text analysis)
- **Storage**: LocalStorage (for saving past analysis data)
- **Notifications**: React Toastify

## 📂 Project Structure
```
AI-FAKE-NEWS-DETECTOR/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components (Home, Results, etc.)
│   ├── services/         # API calls (news analysis service)
│   ├── App.js            # Main App component
│   ├── index.js          # Entry point
│   ├── styles/           # Custom styles
├── public/
│   ├── bg.webp           # Background image
├── package.json          # Dependencies and scripts
├── README.md             # Project documentation
└── .gitignore            # Ignored files
```

## 📥 Installation & Setup
### 1️⃣ Clone the repository
```bash
git clone https://github.com/priyansh-narang2308/AI-FAKE-NEWS-DETECTOR.git
cd AI-FAKE-NEWS-DETECTOR
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the development server
```bash
npm start
```

## 🛠️ Usage
1. **Enter news content** or **paste a news URL**.
2. Click **"Analyze"** to process the text.
3. View the **trust score** and **results**.
4. Previous analyses are saved locally for future reference.

## 🛡️ Input Validation
- News text must be **at least 12 characters** and contain **at least one space**.
- URL validation ensures proper format before processing.

## 🖥️ Deployment
To deploy on **Vercel or Netlify**:
```bash
npm run build
```
Upload the `build/` directory to the hosting service.

## 🤝 Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m 'Added a new feature'`).
4. Push to GitHub (`git push origin feature-branch`).
5. Open a pull request.

## 🔗 Related Projects
- [Fact-Check API](https://example.com)
- [AI Text Analyzer](https://example.com)

## 📝 License
This project is **open-source** under the **MIT License**.

---
💡 **Made with ❤️ by Team Full Stack Insertion** 🚀

