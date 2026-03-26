export const portfolioData = {
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Resume", href: "#resume" },
    { label: "Education", href: "#education" },
    { label: "Platforms", href: "#platforms" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    name: "Rajeev Choudhary",
    tagline: "B.Tech CSE (AI & ML) Student",
    rotatingTitles: [
      "Machine Learning Enthusiast",
      "Data-Driven Problem Solver",
      "Consistent DSA Learner",
    ],
    description:
      "I enjoy building practical machine learning projects, strengthening my data structures foundation, and turning classroom knowledge into polished, real-world work.",
    primaryCta: { label: "View Projects", href: "#projects" },
    secondaryCta: { label: "Contact Me", href: "#contact" },
    focusAreas: [
      "Machine Learning",
      "Data Analysis",
      "Python",
      "Scikit-learn",
      "DSA Practice",
      "Problem Solving",
    ],
  },
  about: {
    intro:
      "I'm Rajeev Choudhary, a Computer Science and Engineering student specializing in AI and Machine Learning at Lovely Professional University.",
    story:
      "My work is centered on learning by building. I like moving from messy datasets and raw features to cleaner pipelines, stronger models, and results that are easy to explain and improve.",
    highlights: [
      {
        title: "Analytical Thinking",
        description:
          "I enjoy breaking problems into smaller parts, studying the data carefully, and using structured experimentation to improve results.",
      },
      {
        title: "Hands-On Learning",
        description:
          "From DSA training to machine learning projects, I focus on steady practice and practical implementation instead of theory alone.",
      },
      {
        title: "Team Collaboration",
        description:
          "I value consistency, collaboration, and learning in public while building skills that translate well to internships and project work.",
      },
    ],
  },
  skills: [
    {
      title: "Languages",
      items: [
        { name: "C", level: 78 },
        { name: "C++", level: 84 },
        { name: "Python", level: 88 },
        { name: "JavaScript", level: 72 },
      ],
    },
    {
      title: "Web + Data",
      items: [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 78 },
        { name: "MySQL", level: 74 },
        { name: "Linux", level: 70 },
      ],
    },
    {
      title: "ML Toolkit",
      items: [
        { name: "NumPy", level: 86 },
        { name: "Pandas", level: 87 },
        { name: "Scikit-learn", level: 84 },
        { name: "Matplotlib / Seaborn", level: 80 },
      ],
    },
  ],
  projects: [
    {
      title: "Car Price Prediction",
      description:
        "A regression-based machine learning project for predicting car prices from structured automobile data.",
      stack: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/rajeev422/Car-price-prediction",
      demo: "",
      detail:
        "Cleaned inconsistent data, encoded categorical variables with ColumnTransformer, standardized features, applied Ridge and Lasso regularization, and improved interpretability with SelectKBest, R², MSE, residual plots, and KDE analysis.",
    },
    {
      title: "Diabetes Prediction",
      description:
        "A healthcare-focused classification project designed to predict diabetes with careful attention to class imbalance.",
      stack: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/rajeev422/diabetes_prediction",
      demo: "",
      detail:
        "Built and compared Logistic Regression, SVM, Decision Tree, and Random Forest models, then improved the final system with tuning, class weighting, threshold adjustment, and evaluation through recall, F1-score, confusion matrix, and overall accuracy.",
    },
  ],
  timeline: [
    {
      year: "Present",
      title: "300+ DSA Problems Solved",
      subtitle: "Practicing consistently across LeetCode and GeeksforGeeks to sharpen algorithmic thinking and coding speed.",
      type: "Achievement",
    },
    {
      year: "Jun 2025 - Jul 2025",
      title: "Cipher Schools Training",
      subtitle: "Completed project-based DSA training with live doubt solving, real-world projects, and public project pitching.",
      type: "Training",
    },
    {
      year: "Oct 2025",
      title: "Car Price Prediction",
      subtitle: "Built a regression workflow covering preprocessing, feature engineering, regularization, and model evaluation.",
      type: "Project",
    },
    {
      year: "Oct 2025",
      title: "Diabetes Prediction",
      subtitle: "Created a classification pipeline focused on recall, data quality, hyperparameter tuning, and reliable healthcare predictions.",
      type: "Project",
    },
    {
      year: "Aug 2023 - Present",
      title: "B.Tech in CSE (AI & ML)",
      subtitle: "Pursuing my degree at Lovely Professional University while building a foundation in ML, DSA, and software tools.",
      type: "Education",
    },
  ],
  resume: {
    href: "/Rajeev-CV.pdf",
    description:
      "Download or preview the same CV used to align this portfolio, including education, training, projects, and achievements.",
  },
  certificates: [],
  education: [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology - Computer Science and Engineering (AI and ML)",
      scoreLabel: "CGPA",
      score: "7.2",
      period: "Aug 2023 - Present",
    },
    {
      institution: "VLM Public School",
      location: "Alwar, Rajasthan",
      degree: "Intermediate",
      scoreLabel: "Percentage",
      score: "70%",
      period: "2019 - 2020",
    },
    {
      institution: "VLM Public School",
      location: "Alwar, Rajasthan",
      degree: "Matriculation",
      scoreLabel: "Percentage",
      score: "81%",
      period: "2021 - 2022",
    },
  ],
  contact: {
    email: "rajeevchoudhary1035@gmail.com",
    intro:
      "I'm open to internships, collaborations, and opportunities where I can keep growing through real engineering and machine learning work.",
    socials: [
      { label: "GitHub", href: "https://github.com/rajeev422" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rajeev068/" },
    ],
    codingPlatforms: [
      { label: "LeetCode", href: "https://leetcode.com/u/rajeevChoudhary/" },
      {
        label: "GeeksforGeeks",
        href: "https://www.geeksforgeeks.org/profile/jaatraj6ffx?from=explore&tab=activity",
      },
    ],
  },
};

export const stats = [
  {
    value: "2",
    label: "Machine learning projects on the portfolio",
    description: "Focused on practical prediction problems with real preprocessing, tuning, and evaluation work.",
  },
  {
    value: "300+",
    label: "DSA problems solved",
    description: "Ongoing problem-solving practice across major coding platforms to build consistency and speed.",
  },
  {
    value: "7.2",
    label: "Current CGPA",
    description: "Academic progress in Computer Science and Engineering with specialization in AI and ML.",
  },
];

export const terminalLines = [
  { command: "whoami", output: "Rajeev Choudhary // AI & ML Student // ML Learner" },
  {
    command: "focus --today",
    output: "Machine learning projects, DSA consistency, and internship-ready growth",
  },
  { command: "ls skills/", output: "c  cpp  python  html  css  javascript  sklearn  pandas  numpy" },
  { command: "cat mission.txt", output: "Keep learning by building practical, reliable, and data-driven solutions." },
];
