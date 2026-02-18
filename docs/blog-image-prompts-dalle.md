# Blog Hero Image Prompts (ChatGPT / DALL·E)

This prompt pack targets the existing blog post slugs in `src/data/posts.js`.

## Global generation spec
- Model target: ChatGPT image generation (DALL·E)
- Output size: `1792x1024`
- Visual direction: cinematic editorial, modern engineering workspace, high contrast, depth, subtle UI overlays
- Text in image: only the specified 2-4 word hero phrase
- Constraints: no brand logos, no watermark, no unverifiable benchmark claims

## Prompt template
Use this base and swap in each post block:

"Create a cinematic editorial hero image for a software engineering blog post at 1792x1024. Scene: {scene_description}. Include subtle UI overlays and strong depth. Add only this short text phrase in the composition: '{hero_text}'. Keep it professional and modern. No logos, no watermark, no extra text blocks."

## Post-specific prompts

### 1) optimizing-react-speed-performance
- Image file: `/images/blog/optimizing-react-speed-performance.png`
- Hero text: `React Speed`
- Prompt:
"Create a cinematic editorial hero image for a software engineering blog post at 1792x1024. Scene: a focused developer workstation with a React component tree, performance flame chart, and before-vs-after render time panels on floating screens. Show momentum and optimization progress with clean motion trails and precise UI overlays. Include only this short text phrase in the composition: 'React Speed'. Keep it professional and modern. No logos, no watermark, no extra text blocks."

### 2) building-scalable-vuejs-applications
- Image file: `/images/blog/building-scalable-vuejs-applications.png`
- Hero text: `Scale Vue`
- Prompt:
"Create a cinematic editorial hero image for a software engineering blog post at 1792x1024. Scene: architectural blueprint style composition where modular Vue-like component blocks scale from a small app layout into a complex enterprise system map. Use structural depth, grid lines, and layered interface diagrams. Include only this short text phrase in the composition: 'Scale Vue'. Keep it professional and modern. No logos, no watermark, no extra text blocks."

### 3) modern-javascript-features-every-developer-should-know
- Image file: `/images/blog/modern-javascript-features-every-developer-should-know.png`
- Hero text: `Modern JS`
- Prompt:
"Create a cinematic editorial hero image for a software engineering blog post at 1792x1024. Scene: a polished code editor with highlighted optional chaining and nullish coalescing patterns, plus subtle timeline markers suggesting JavaScript evolution. Add elegant annotations and technical depth. Include only this short text phrase in the composition: 'Modern JS'. Keep it professional and modern. No logos, no watermark, no extra text blocks."

### 4) nodejs-express-backend-development-guide
- Image file: `/images/blog/nodejs-express-backend-development-guide.png`
- Hero text: `Node Backend`
- Prompt:
"Create a cinematic editorial hero image for a software engineering blog post at 1792x1024. Scene: a backend command center with API route maps, middleware flow arrows, request logs, and service topology dashboards in a dark-glass operations environment. Include only this short text phrase in the composition: 'Node Backend'. Keep it professional and modern. No logos, no watermark, no extra text blocks."

### 5) rest-api-design-best-practices
- Image file: `/images/blog/rest-api-design-best-practices.png`
- Hero text: `REST Design`
- Prompt:
"Create a cinematic editorial hero image for a software engineering blog post at 1792x1024. Scene: API contract visualization with clean cards for HTTP methods and status codes, endpoint flow lines, and documentation-style layouts that suggest consistency and clarity. Include only this short text phrase in the composition: 'REST Design'. Keep it professional and modern. No logos, no watermark, no extra text blocks."

### 6) mongodb-vs-postgresql-nodejs-database-integration
- Image file: `/images/blog/mongodb-vs-postgresql-nodejs-database-integration.png`
- Hero text: `Data Choices`
- Prompt:
"Create a cinematic editorial hero image for a software engineering blog post at 1792x1024. Scene: balanced split-screen comparison between document-oriented and relational data modeling, linked by Node.js integration pipelines and query-result visualizations. Maintain neutral, analytical tone. Include only this short text phrase in the composition: 'Data Choices'. Keep it professional and modern. No logos, no watermark, no extra text blocks."

### 7) jwt-authentication-nodejs-implementation
- Image file: `/images/blog/jwt-authentication-nodejs-implementation.png`
- Hero text: `JWT Auth`
- Prompt:
"Create a cinematic editorial hero image for a software engineering blog post at 1792x1024. Scene: secure authentication lifecycle with token issuance, signature verification, refresh flow, and protected endpoint requests, using shield and lock iconography in interface overlays. Include only this short text phrase in the composition: 'JWT Auth'. Keep it professional and modern. No logos, no watermark, no extra text blocks."

### 8) frontend-state-management-redux-context-zustand
- Image file: `/images/blog/frontend-state-management-redux-context-zustand.png`
- Hero text: `State Flow`
- Prompt:
"Create a cinematic editorial hero image for a software engineering blog post at 1792x1024. Scene: three-lane comparison board for Redux, Context API, and Zustand with state flow arrows, store snapshots, and performance indicators in a clean control-panel aesthetic. Include only this short text phrase in the composition: 'State Flow'. Keep it professional and modern. No logos, no watermark, no extra text blocks."

### 9) fullstack-deployment-docker-cicd-cloud
- Image file: `/images/blog/fullstack-deployment-docker-cicd-cloud.png`
- Hero text: `Ship Faster`
- Prompt:
"Create a cinematic editorial hero image for a software engineering blog post at 1792x1024. Scene: end-to-end CI/CD runway showing container build, automated tests, staging checks, production deployment, and cloud health dashboards. Emphasize reliable release velocity. Include only this short text phrase in the composition: 'Ship Faster'. Keep it professional and modern. No logos, no watermark, no extra text blocks."
