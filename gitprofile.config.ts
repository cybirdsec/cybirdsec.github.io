// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'cybirdsec', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['cybirdsec/Wazuh-VM-Lab', 'cybirdsec/Virtual-VLC-Media-Server'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'External Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'MGA Student Web Forum',
          description:
            'An alternative to the appointment-based tutoring system, GRAIL is an online forum for students to ask and answer homework questions anytime, anywhere. I primarily contributed to the CSS design of the site. Credit for the JavaScript goes to Elizabeth Zakula.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/elizabethz61/GRAIL',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Nicholas Blanchard', description: '', imageURL: '' },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'nicholas.blanchard@proton.me',
  },
  resume: {
    fileUrl:
      'https://drive.proton.me/urls/VGFEKGZ4FM#rBkE4n4iTHzt', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Docker',
    'Linux (Arch, Ubuntu, Debian, Kali)',
    'Wireshark',
    'Hashcat',
    'Burp Suite',
    'Bash',
    'Active Directory',
    'Virtualization',
    'Wazuh',
    'DHCP',
    'DNS',
    'PC Building/Repair',
    'HTML',
    'CSS',
  ],
  /* experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
*/
  certifications: [
    {
      name: 'CompTIA Security+',
      body: 'The CompTIA Security+ certification is a global certification exam that validates the baseline skills needed to perform core security functions.',
      year: 'September 2025',
      link: 'https://www.certmetrics.com/comptia/public/transcript.aspx?transcript=H335CSW1FNR4K39J',
    },
  ],
  educations: [
    {
      institution: 'Middle Georgia State University',
      degree: 'B.S. in Information Technology - Cybersecurity',
      from: '2021',
      to: '2025',
    },
  ],
 // publications: [
   // {
     // title: 'Publication Title',
     // conferenceName: '',
     // journalName: 'Journal Name',
     // authors: 'John Doe, Jane Smith',
     // link: 'https://example.com',
     // description:
     //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
   // },
   // {
     // title: 'Publication Title',
     // conferenceName: 'Conference Name',
     // journalName: '',
     // authors: 'John Doe, Jane Smith',
     // link: 'https://example.com',
     // description:
       // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
   // },
 // ],
  // Display articles from your medium or dev account. (Optional)
 // blog: {
  //  source: 'dev', // medium | dev
  //  username: 'arifszn', // to hide blog section, keep it empty
 //   limit: 2, // How many articles to display. Max is 10.
 // },
//
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
