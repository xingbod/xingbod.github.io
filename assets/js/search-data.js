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
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-future",
          title: "future",
          description: "Graduate students in our group - Future talents",
          section: "Navigation",
          handler: () => {
            window.location.href = "/future/";
          },
        },{id: "nav-gallery",
          title: "gallery",
          description: "Gallery of the team",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-welcome-to-my-blog",
        
          title: "Welcome to My Blog",
        
        description: "A welcome post for my personal blog.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/welcome/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-good-news-will-be-happend-soon",
          title: 'Good news will be happend soon.',
          description: "",
          section: "News",},{id: "news-good-news",
          title: 'Good News',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-our-work-on-chewing-evaluation-was-reported-by-fnah-我所在的团队关于咀嚼评估的工作获-fnah-报道推荐",
          title: 'Our Work on Chewing Evaluation was Reported by FNAH | 我所在的团队关于咀嚼评估的工作获 FNAH 报道推荐...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-21-chewing-evaluation/";
            },},{id: "news-i-was-invited-to-give-a-keynote-forum-talk-at-ccbr-2025-我荣幸受邀在-ccbr-2025-作专题报告",
          title: 'I was Invited to Give a Keynote Forum Talk at CCBR 2025 |...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-09-ccbr-forum/";
            },},{id: "news-i-was-invited-to-give-a-keynote-talk-at-nnice-2026-我荣幸受邀在-nnice-2026-作大会主旨报告",
          title: 'I was Invited to Give a Keynote Talk at NNICE 2026 | 我荣幸受邀在...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-01-24-nnice-keynote/";
            },},{id: "news-call-for-paper-image-processing-techniques-for-enhanced-visual-quality-scientific-reports-collection-welcomes-original-research-on-image-processing-techniques-for-enhanced-visual-quality-narrative-review-articles-are-also-welcomed-to-scientific-reviews-processing-techniques-play-a-crucial-role-in-improving-the-clarity-fidelity-and-interpretability-of-visual-content-with-advances-in-deep-learning-and-computational-photography-modern-methods-enable-enhancements-such-as-noise-reduction-super-resolution-contrast-optimization-artifact-removal-and-colour-correction-learn-more-and-submit-your-paper-note-discounts-are-available-on-a-case-by-case-basis-for-eligible-submissions",
          title: 'Call for Paper: Image processing techniques for enhanced visual quality Scientific Reports Collection...',
          description: "",
          section: "News",},{id: "news-call-for-paper-symmetry-asymmetry-in-image-processing-and-computer-vision-special-issue-of-symmetry-focusing-on-the-exploration-of-symmetry-and-asymmetry-in-image-processing-and-computer-vision-aiming-to-advance-the-understanding-of-these-fundamental-principles-and-their-applications-in-modern-visual-technologies-symmetry-and-asymmetry-play-crucial-roles-in-a-wide-range-of-computer-vision-tasks-including-object-recognition-image-segmentation-feature-extraction-and-3d-reconstruction-by-investigating-the-impact-of-symmetry-and-asymmetry-on-algorithm-design-and-performance-contributors-can-offer-insights-into-how-these-principles-can-be-harnessed-to-enhance-image-quality-improve-computational-efficiency-and-achieve-robust-results-in-complex-visual-environments-learn-more-and-submit-your-paper",
          title: 'Call for Paper: Symmetry/Asymmetry in Image Processing and Computer Vision Special Issue of...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-java程序及应用-java-programming-and-applications",
          title: 'Java程序及应用 / Java Programming and Applications',
          description: "本课程介绍Java编程语言的基本语法、面向对象编程思想和Java在实际应用中的使用。This course introduces the basic syntax of Java programming language, object-oriented programming concepts, and the use of Java in practical applications.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/java-programming/";
            },},{id: "teachings-自然语言处理-natural-language-processing",
          title: '自然语言处理 / Natural Language Processing',
          description: "本课程介绍自然语言处理的基本概念、技术和应用，包括词法分析、句法分析、语义理解、机器翻译等内容。This course introduces the basic concepts, techniques, and applications of natural language processing, including lexical analysis, syntactic analysis, semantic understanding, machine translation, etc.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/natural-language-processing/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%6E%67%62%6F%64@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Jc4KdcIAAAAJ", "_blank");
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
