/**
 * skills-data.js
 * The content of the Skills inventory. js/skills.js turns this into slots.
 *
 * Each skill has:
 *   name   full name, shown in the detail box and read out by screen readers
 *   badge  1 to 3 characters drawn inside the slot
 *   note   optional sentence shown under the name
 */
window.SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java',       badge: 'Jv' },
      { name: 'C++',        badge: 'C++' },
      { name: 'JavaScript', badge: 'JS',  note: 'Used in VerifAI and Taxpert.' },
      { name: 'Python',     badge: 'Py' },
      { name: 'SQL',        badge: 'SQL' },
      { name: 'HTML',       badge: 'HTM', note: 'Used in VerifAI and Taxpert.' },
      { name: 'CSS',        badge: 'CSS', note: 'Used in VerifAI and Taxpert.' },
      { name: 'Assembly',   badge: 'ASM' }
    ]
  },
  {
    title: 'Frameworks and technologies',
    skills: [
      { name: 'Spring Boot',           badge: 'SB' },
      { name: 'Node.js',               badge: 'Nd' },
      { name: 'REST APIs',             badge: 'API' },
      { name: 'Chrome Extensions API', badge: 'Ext', note: 'Used in VerifAI (Manifest V3).' }
    ]
  },
  {
    title: 'Developer tools',
    skills: [
      { name: 'Git',                badge: 'Git', note: 'Version control on VerifAI.' },
      { name: 'GitHub',             badge: 'GH',  note: 'Hosts VerifAI and Taxpert. Taxpert is deployed with GitHub Pages.' },
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
      { name: 'Linux/Unix',                   badge: 'Lx' },
      { name: 'SSH',                          badge: 'SSH' },
      { name: 'Object-Oriented Programming',  badge: 'OOP' },
      { name: 'Data Structures & Algorithms', badge: 'DSA' },
      { name: 'Software Design',              badge: 'Dsn' },
      { name: 'Debugging',                    badge: 'Dbg' },
      { name: 'Software Testing',             badge: 'Tst' },
      { name: 'Agile Development',            badge: 'Agl' }
    ]
  }
];
