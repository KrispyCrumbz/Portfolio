/**
 * skills-data.js
 * The content of the Skills inventory. js/skills.js turns this into slots.
 *
 * Each skill has:
 *   name   full name, shown in the detail box and read out by screen readers
 *   badge  1 to 3 characters drawn inside the slot
 *   note   optional sentence shown under the name; where possible it names
 *          the project or course that used the skill
 */
window.SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java',       badge: 'Jv',  note: 'Used in Programming Bootcamp 1, Programming Studio 1, and Software Engineering: Process & Tools.' },
      { name: 'C++',        badge: 'C++', note: 'Used in Programming Bootcamp 2, Programming Studio 2, and Operating Systems Principles.' },
      { name: 'JavaScript', badge: 'JS',  note: 'Used in VerifAI and Deductly, and in Full Stack Development.' },
      { name: 'TypeScript', badge: 'TS',  note: 'Used in Full Stack Development.' },
      { name: 'Python',     badge: 'Py' },
      { name: 'SQL',        badge: 'SQL', note: 'Used in Programming Studio 1.' },
      { name: 'HTML',       badge: 'HTM', note: 'Used in VerifAI and Deductly, and in Programming Studio 1, Full Stack Development and Software Engineering: Process & Tools.' },
      { name: 'CSS',        badge: 'CSS', note: 'Used in VerifAI and Deductly, and in Programming Studio 1, Full Stack Development and Software Engineering: Process & Tools.' },
      { name: 'Assembly',   badge: 'ASM', note: 'Used in Programming Studio 2.' }
    ]
  },
  {
    title: 'Frameworks and technologies',
    skills: [
      { name: 'Spring Boot',           badge: 'SB',  note: 'Used in Software Engineering: Process & Tools.' },
      { name: 'Javalin',               badge: 'Jvl', note: 'Used in Programming Studio 1.' },
      { name: 'morphdom',              badge: 'Mph', note: 'Used in Deductly.' },
      { name: 'Node.js',               badge: 'Nd' },
      { name: 'REST APIs',             badge: 'API' },
      { name: 'Chrome Extensions API', badge: 'Ext', note: 'Used in VerifAI (Manifest V3).' }
    ]
  },
  {
    title: 'Developer tools',
    skills: [
      { name: 'Git',                badge: 'Git', note: 'Version control on VerifAI.' },
      { name: 'GitHub',             badge: 'GH',  note: 'Hosts VerifAI and Deductly. Deductly is deployed with GitHub Pages.' },
      { name: 'JUnit 5',            badge: 'JU5', note: 'Used in Software Testing.' },
      { name: 'Visual Studio Code', badge: 'VS' },
      { name: 'IntelliJ IDEA',      badge: 'IJ' },
      { name: 'CLion',              badge: 'CL' },
      { name: 'Jira',               badge: 'Jira' },
      { name: 'Jupyter Notebook',   badge: 'Jp' }
    ]
  },
  {
    title: 'Platforms and concepts',
    skills: [
      { name: 'Linux/Unix',                   badge: 'Lx',  note: 'Related coursework: Operating Systems Principles (in progress).' },
      { name: 'SSH',                          badge: 'SSH' },
      { name: 'Object-Oriented Programming',  badge: 'OOP' },
      { name: 'Data Structures & Algorithms', badge: 'DSA', note: 'Related coursework: Algorithms & Analysis.' },
      { name: 'Software Design',              badge: 'Dsn', note: 'Related coursework: Systems Architecture & Design.' },
      { name: 'Debugging',                    badge: 'Dbg' },
      { name: 'Software Testing',             badge: 'Tst' },
      { name: 'Agile Development',            badge: 'Agl', note: 'Related coursework: Software Engineering Process & Tools.' }
    ]
  }
];
