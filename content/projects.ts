export type Category = 'AI' | 'Software' | 'Hardware';
export type ProjectStatus = 'prototype' | 'project' | 'concept' | 'workspace';
export interface ProjectMedia { src: string; alt: string; width: number; height: number }
export interface Project {
  id: string; name: string; summary: string; categories: readonly Category[];
  status: ProjectStatus; stack: readonly string[];
  repository?: string; repositoryVisibility?: 'public' | 'private'; media?: ProjectMedia;
  featured?: { order: number; problem: string; contribution: string; outcome: string; limitations?: string; teamCredit?: string };
}
const repo = (name: string) => `https://github.com/d-Lucx/${name}`;
export const projects: readonly Project[] = [
  {
    id: 'bej-hub', name: 'Bej Hub', summary: 'A pixel studio for assigning AI missions, following agent handoffs, and reviewing the resulting drafts.',
    categories: ['AI', 'Software'], status: 'prototype', stack: ['TypeScript', 'Discord.js', 'Gemini', 'Next.js', 'Phaser'],
    repository: repo('Bej_Hub'), repositoryVisibility: 'public',
    media: { src: '/projects/bej-hub.webp', alt: 'Bej Hub’s running studio, with Manager, Researcher, and Writer agents at their desks.', width: 1600, height: 900 },
    featured: {
      order: 1, problem: 'Turn a writing request into an evidence-based draft while keeping a person in control of delivery.',
      contribution: 'I built this personal project with AI assistance: mission assignment, agent handoffs, clarification pauses, and draft approval across Discord and a visual office.',
      outcome: 'In a live Gemini run, the workflow identified a conflict between the request and supplied text, asked for clarification, and delivered the draft after my approval.',
      limitations: 'An ongoing prototype. I’m improving repeated clarification prompts. The demonstrated run used supplied text with web search disabled.',
    },
  },
  {
    id: 'omnipoint', name: 'OmniPoint', summary: 'An offline retail system with receipt recovery and synchronization designed to withstand interrupted processes.',
    categories: ['Software'], status: 'project', stack: ['TypeScript', 'Node.js', 'SQLite', 'PostgreSQL', 'React'],
    repository: repo('OmniPoint'), repositoryVisibility: 'public',
    media: { src: '/projects/omnipoint.webp', alt: 'OmniPoint register showing the product catalog, a two-item cart, and cash checkout.', width: 1351, height: 759 },
    featured: {
      order: 2, problem: 'Keep an offline sale and its original receipt recoverable when a terminal stops or a cloud response is lost.',
      contribution: 'I created this personal project with AI assistance, connecting local SQLite storage to PostgreSQL synchronization and explicit recovery states.',
      outcome: 'Local verification passed 21 integration tests and 2 helper tests. The tested sale recovered after process termination and synchronized after a lost response, without duplicate effects in that scenario.',
      limitations: 'Verified locally, not a claim of production deployment. Physical printer delivery and host power loss were outside these checks.',
    },
  },
  {
    id: 'pill-dispenser', name: 'Smart Pill Dispenser', summary: 'A Raspberry Pi device connecting scheduled dispensing, reminders, and remote messaging controls.',
    categories: ['Hardware', 'Software'], status: 'project', stack: ['Raspberry Pi', 'Python', 'SMS', 'Telegram'],
    repository: repo('Pill-Dispenser'), repositoryVisibility: 'public',
    media: { src: '/projects/pill-dispenser.webp', alt: 'The completed Code&Craft pill dispenser with its physical screen, control button, and enclosure. Code&Craft watermark retained.', width: 1152, height: 1536 },
    featured: {
      order: 3, problem: 'Connect a physical dispensing mechanism to schedules, reminders, and software controls for a senior high school client project.',
      contribution: 'In our Code&Craft team, I programmed all Raspberry Pi software and integrated the software with the hardware.',
      outcome: 'All required functions were successfully demonstrated on the physical device, which was handed over to the client.',
      teamCredit: 'My teammates created the 3D model and handled soldering and wiring. Device photography and CAD: Code&Craft.',
      limitations: 'A client project demonstration; no medical effectiveness or extended deployment claim is made.',
    },
  },
  { id: 'techlapia', name: 'Techlapia', summary: 'A fish-tank monitoring prototype combining a sensor dashboard with a Python camera backend.', categories: ['Hardware', 'Software'], status: 'prototype', stack: ['Python', 'Flask', 'OpenCV', 'React'], repository: repo('Techlapia'), repositoryVisibility: 'public', media: { src: '/projects/techlapia.webp', alt: 'Actual Techlapia configuration panel with tank dimensions and stocking-density calculation; local default settings, without connected hardware.', width: 345, height: 882 } },
  { id: 'svd-compression', name: 'MATLAB SVD Image Compression', summary: 'An image-processing experiment using low-rank matrix approximation and adjustable singular-value retention.', categories: ['Software'], status: 'project', stack: ['MATLAB', 'SVD', 'Linear algebra'], media: { src: '/projects/svd-compression.webp', alt: 'SVD compression interface with original, compressed, and separate color-channel images.', width: 1024, height: 536 } },
  { id: 'formsight', name: 'FormSight', summary: 'A computer-vision prototype for joint-angle feedback and repetition counting during calisthenics.', categories: ['AI', 'Software'], status: 'prototype', stack: ['Python', 'FastAPI', 'OpenCV', 'YOLO'], repository: repo('FormSight'), repositoryVisibility: 'public', media: { src: '/projects/formsight.webp', alt: 'Actual FormSight exercise controls and angle-calibration sliders in their idle state; camera inference is not active.', width: 459, height: 502 } },
  { id: 'talk-to-the-hand', name: 'TalkToTheHand', summary: 'A hand-pose collection and training pipeline; the documented dataset currently covers letters A to D.', categories: ['AI', 'Software'], status: 'prototype', stack: ['Python', 'YOLO', 'Pose estimation'], repository: repo('TalkToTheHand'), repositoryVisibility: 'public' },
  { id: 'pundo-2', name: 'Pundo 2', summary: 'A personal-finance app exploring transaction dashboards, goals, and a Gemini-powered assistant.', categories: ['AI', 'Software'], status: 'project', stack: ['Next.js', 'React', 'TypeScript', 'Gemini'], repository: repo('Pundo2'), repositoryVisibility: 'public', media: { src: '/projects/pundo-2.webp', alt: 'Actual Pundo 2 sign-in interface with empty email and password fields; no private dashboard or account data is shown.', width: 500, height: 715 } },
  { id: 'student-grading', name: 'Student Grading Software', summary: 'A desktop project for organizing student records and calculating grades.', categories: ['Software'], status: 'project', stack: ['Java', 'SQL'], media: { src: '/projects/student-grading.webp', alt: 'Student grading desktop interface with course evaluation chart and grade inputs.', width: 1024, height: 711 } },
  { id: 'gray-code', name: 'Verilog Gray Code Generator', summary: 'Digital logic experiments that enumerate Gray code sequences in simulation.', categories: ['Hardware', 'Software'], status: 'project', stack: ['Verilog', 'ModelSim'] },
  { id: 'dice-game', name: 'Verilog Dice Game', summary: 'A digital dice-game experiment using a linear-feedback shift register.', categories: ['Hardware'], status: 'project', stack: ['Verilog', 'LFSR', 'ModelSim'] },
  { id: 'snake-ai', name: 'Genetic Algorithm Snake', summary: 'A game-playing experiment that evolves agents to navigate and collect food.', categories: ['AI', 'Software'], status: 'prototype', stack: ['Python', 'Pygame', 'Genetic algorithms'] },
  { id: 'dino-ai', name: 'Dino Game AI', summary: 'An AI experiment built around navigating an obstacle-running game.', categories: ['AI', 'Software'], status: 'prototype', stack: ['Python', 'Pygame'] },
  { id: '8086-calculator', name: '8086 Calculator', summary: 'An assembly-language calculator exploring arithmetic and decimal output.', categories: ['Hardware', 'Software'], status: 'project', stack: ['Assembly', 'EMU8086'] },
  { id: 'divvy', name: 'Divvy', summary: 'A personal-finance web project for budgets, transactions, and savings goals.', categories: ['Software'], status: 'project', stack: ['React', 'TypeScript', 'Vite'], repository: repo('Divvy'), repositoryVisibility: 'public', media: { src: '/projects/divvy.webp', alt: 'Divvy finance dashboard using demonstration account data approved for publication.', width: 1024, height: 640 } },
  { id: 'tagumfare', name: 'TagumFare', summary: 'A Flutter application exploring a local fare-calculation concept.', categories: ['Software'], status: 'prototype', stack: ['Flutter', 'Dart'], repositoryVisibility: 'private', media: { src: '/projects/tagumfare.webp', alt: 'TagumFare mobile interface showing its map and fare panel.', width: 473, height: 1024 } },
  { id: 'freelanceflow', name: 'FreelanceFlow', summary: 'A web project exploring project tracking, invoicing, and freelance business workflows.', categories: ['Software'], status: 'project', stack: ['Next.js', 'TypeScript'], repositoryVisibility: 'private', media: { src: '/projects/freelanceflow.webp', alt: 'FreelanceFlow dashboard using demonstration financial data approved for publication.', width: 1024, height: 640 } },
  { id: 'bej-planner', name: 'Bej Planner', summary: 'A mobile planner prototype with a daily timeline and task-management screens.', categories: ['Software'], status: 'prototype', stack: ['React Native', 'Expo', 'JavaScript'], repository: repo('bej-planner'), repositoryVisibility: 'public' },
  { id: 'yongbao', name: 'YǒngBǎo', summary: 'A private Discord companion project exploring reminders and shared organization.', categories: ['Software'], status: 'project', stack: ['Python', 'Discord'], repositoryVisibility: 'private' },
  { id: 'mlbb-pick-ban', name: 'MLBB Pick & Ban Overlay', summary: 'A broadcast-overlay project for displaying Mobile Legends drafting.', categories: ['Software'], status: 'project', stack: ['JavaScript', 'HTML', 'CSS', 'Node.js'], repository: repo('Mobile-Legends-Picking-Banning-Overlay'), repositoryVisibility: 'public', media: { src: '/projects/mlbb-pick-ban.webp', alt: 'Actual MLBB draft controller with blue and red slots, pick and ban inputs, and phase controls in its initial empty draft state.', width: 1600, height: 900 } },
  { id: 'mlbb-tournament', name: 'MLBB Tournament Overlay', summary: 'An esports broadcast project exploring OCR integration and overlay graphics.', categories: ['AI', 'Software'], status: 'prototype', stack: ['OCR', 'Broadcast overlays'], repository: repo('Mobile-Legends-Tournament-Overlay'), repositoryVisibility: 'public', media: { src: '/projects/mlbb-tournament.webp', alt: 'Actual ML Live in-game overlay controller with match settings, team selection and logo controls using existing repository values; not verified match results.', width: 1366, height: 900 } },
  { id: 'kugi', name: 'Kugi', summary: 'A platform project exploring local freelance and contracting workflows.', categories: ['Software'], status: 'prototype', stack: ['Next.js', 'React', 'TypeScript', 'Prisma'], repository: repo('Kugi'), repositoryVisibility: 'public', media: { src: '/projects/kugi.webp', alt: 'Actual Kugi onboarding role-selection interface before registration; no submitted account, escrow transaction or identity record is shown.', width: 577, height: 418 } },
  { id: 'tourneyforge', name: 'TourneyForge', summary: 'An esports graphics project combining a playout console, overlay builder, and drafting station.', categories: ['Software'], status: 'project', stack: ['Next.js', 'TypeScript', 'Fabric.js', 'OBS WebSocket'], repositoryVisibility: 'private' },
  { id: 'asay', name: 'Asay', summary: 'A reserved project concept. The repository has no implementation yet.', categories: ['Software'], status: 'concept', stack: [], repository: repo('Asay'), repositoryVisibility: 'public' },
  { id: 'luto', name: 'Luto / Lu2', summary: 'A cooking-platform concept exploring offline use and pantry-aware recipe discovery.', categories: ['Software'], status: 'concept', stack: ['React Native', 'Expo', 'SQLite'], repository: repo('Luto'), repositoryVisibility: 'public' },
  { id: 'alagad', name: 'Alagad', summary: 'A reserved project concept. The repository has no implementation yet.', categories: ['Software'], status: 'concept', stack: [], repository: repo('Alagad'), repositoryVisibility: 'public' },
  { id: 'bej-vault', name: 'Bej Vault', summary: 'A knowledge workspace for organizing technical notes and project information.', categories: ['Software'], status: 'workspace', stack: ['Obsidian', 'Markdown'], repository: repo('Bej-Vault'), repositoryVisibility: 'public' },
  { id: 'para', name: 'Para', summary: 'An offline Android commuter-alarm pilot with destination zones and optional trip recording.', categories: ['Software'], status: 'prototype', stack: ['Android', 'Kotlin', 'Jetpack Compose', 'MapLibre'], repository: repo('Para'), repositoryVisibility: 'public' },
];
