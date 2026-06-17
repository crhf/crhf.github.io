// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-autocoderover-our-autonomous-software-engineering-agent-is-released-autocoderover-performs-program-structure-aware-code-search-to-efficiently-retrieve-relevant-code-context-check-out-our-arxiv-report-source-code-website-and-tweet-for-details",
          title: 'AutoCodeRover, our autonomous software engineering agent, is released! AutoCodeRover performs program structure-aware code...',
          description: "",
          section: "News",},{id: "news-our-paper-autocoderover-autonomous-program-improvement-has-been-accepted-to-issta-24",
          title: 'Our paper AutoCodeRover: Autonomous Program Improvement has been accepted to ISSTA’24.',
          description: "",
          section: "News",},{id: "news-our-paper-specrover-code-intent-extraction-via-llms-has-been-accepted-to-icse-25-specrover-aka-autocoderover-v2-0-guides-an-llm-agent-with-program-specifications-inferred-from-multiple-sources-and-is-the-best-performing-open-source-agent-on-swe-bench",
          title: 'Our paper SpecRover: Code Intent Extraction via LLMs has been accepted to ICSE’25....',
          description: "",
          section: "News",},{id: "news-autocoderover-our-startup-from-nus-has-been-acquired-by-sonar-press-release-our-team",
          title: 'AutoCodeRover, our startup from NUS, has been acquired by Sonar. [Press Release] [Our...',
          description: "",
          section: "News",},{id: "news-sonar-foundation-agent-developed-by-yuntong-zhang-and-me-at-sonar-claimed-the-top-spot-on-the-unfiltered-swe-bench-leaderboard-scoring-79-2-on-swe-bench-verified-and-52-62-on-swe-bench-full-it-builds-on-autocoderover-with-a-more-autonomous-test-driven-workflow-for-real-world-software-issue-remediation-press-release",
          title: 'Sonar Foundation Agent, developed by Yuntong Zhang and me at Sonar, claimed the...',
          description: "",
          section: "News",},{id: "news-sonar-has-globally-launched-the-sonarqube-remediation-agent-at-atxsummit-2026-i-am-excited-to-see-our-research-on-autocoderover-evolve-from-an-nus-project-into-a-commercial-product-that-automatically-fixes-and-verifies-code-issues-for-developers-worldwide",
          title: 'Sonar has globally launched the SonarQube Remediation Agent at ATxSummit 2026. I am...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%61%69%66%65%6E%67.%72%75%61%6E@%75.%6E%75%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/crhf", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ruan-haifeng", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/HaifengR63202", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
