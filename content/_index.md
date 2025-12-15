---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      # button:
      #   text: Download CV
      #   url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: 
        image:
          # Add your image background to `assets/media/`.
          filename: bak.png
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  # - block: markdown
  #   content:
  #     title: '📚 My Research'
  #     subtitle: ''
  #     text: |-
  #       Use this area to speak to your mission. I'm a research scientist in the Moonshot team at DeepMind. I blog about machine learning, deep learning, and moonshots.

  #       I apply a range of qualitative and quantitative methods to comprehensively investigate the role of science and technology in the economy.
        
  #       Please reach out to collaborate 😃
  #   design:
  #     columns: '1'
  - block: markdown
    id: news
    content:
      title: News
      subtitle: ''
      text: |
      text: |
      text: |
      text: |
        <style>
          /* News: Force full width and remove auto-centering offsets */
          #news div[class*="col-"] {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          
          @media (min-width: 1200px) {
            /* Awards & Service: Centered ~61% Width (Confirmed Working) */
            #awards {
              width: 30.5% !important;
              float: left !important;
              margin-left: 19.5% !important;
              clear: both !important;
              display: block !important;
            }
            #service {
              width: 30.5% !important;
              float: left !important;
              margin-right: 19.5% !important;
              clear: none !important;
              display: block !important;
            }
            #projects {
              clear: both !important;
              margin-top: 2rem; /* Spacing */
            }

            /* Experience & Education: Float the Rows */
            /* Assuming Experience and Education are separate .row blocks */
            #experience .row {
               width: 50% !important;
               float: left !important;
               clear: none !important;
               display: block !important;
               padding: 0 15px !important;
            }
            /* Reset inner cols to fill the 50% row */
            #experience .row div[class*="col-"] {
               width: 100% !important;
               max-width: 100% !important;
               flex: 0 0 100% !important;
            }
          }
        </style>
        - <span style="font-size:1rem;">🔥 **2025-12** Released our beginner-friendly LLM Agent tutorial ([website](https://llm-agent-tutorial.github.io/website/) & [PDF](https://llm-agent-tutorial.github.io/website/A%20Beginner-Friendly%20Tutorial%20on%20LLM-based%20Agents.pdf)).</span>
        - <span style="font-size:1rem;">🎤 **2025-12** The 137th [RLCHINA Paper Seminar](https://rlchina.org/topic/1047) hosted!</span>
        - <span style="font-size:1rem;">📝 **2025-11** 1 paper accepted by AAAI 2025 (MADC)!</span>
        - <span style="font-size:1rem;">📝 **2025-09** 1 paper accepted by NeurIPS 2025</span>
        - <span style="font-size:1rem;">📝 **2025-07** 1 paper accepted by SCALR@COLM (<a href="https://liu.jinyi.space/publication/liu-2025-chaos/">Atomic Reasoner</a>)</span>
        - <span style="font-size:1rem;">📝 **2025-07** 1 paper accepted by ICCV 2025 (RoboAnnotatorX)!</span>
        - <span style="font-size:1rem;">📝 **2025-06** 1 paper accepted by ICML 2025 Workshop MAS (MADC)!</span>
        - <span style="font-size:1rem;">📝 **2025-05** 3 papers accepted by ACL 2025 (long paper, Atomic Reasoner, DualRAG, WoT)!</span>
        - <span style="font-size:1rem;">🏆 **2025-02** Nominated as Distinguished PC Member of AAMAS 2025.</span>
        - <span style="font-size:1rem;">📝 **2025-01** 1 paper accepted by WWW 2025, oral presentation (SheetAgent)!</span>
      design:
        columns: '1' 
  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
        show_date: true
    design:
      view: article-grid
      columns: 3
  - block: collection
    content:
      title: Recent Publications
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
  - block: resume-experience
    id: experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
      columns: '2'
  - block: resume-awards
    id: awards
    content:
      title: Awards
      username: admin
  - block: academic-service
    id: service
    content:
      title: Academic Service
      username: admin 
  - block: collection
    id: projects
    content:
      title: Selected Projects
      text: ''
      filters:
        folders:
          - project
    design:
      view: article-grid
      fill_image: false
      columns: 3
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - event
  #   design:
  #     view: article-grid
  #     columns: 1
  - block: cta-card
    demo: true # Only display this section in the Hugo Blox Builder demo site
    content:
      title: 👉 Build your own academic website like this
      text: |-
        This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

        <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

        Easily build anything with blocks - no-code required!
        
        From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
      button:
        text: Get Started
        url: https://hugoblox.com/templates/
    design:
      card:
        # Card background color (CSS class)
        css_class: "bg-primary-700"
        css_style: ""
---
