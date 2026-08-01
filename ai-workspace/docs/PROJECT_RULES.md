# AI Workspace - Project Rules

Version: 1.0
Status: Active

---

# Purpose

AI Workspace is a production-quality portfolio project that demonstrates real-world software engineering practices.

The project is designed to become:

- Portfolio Project
- Resume Project
- Interview Project
- Freelance-ready Product
- SaaS Foundation

Every development decision should support these goals.

---

# Engineering Principles

## 1. Build Like a Real Company

Treat this project as if it will be maintained by a professional engineering team.

Avoid shortcuts that create technical debt.

Prioritize:

- readability
- maintainability
- scalability
- consistency

over writing code quickly.

---

## 2. Feature-First Development

Only build one feature at a time.

Every feature must be completed before starting another.

Never partially implement multiple features simultaneously.

---

## 3. Architecture Before Code

Before implementing any feature, always define:

- Goal
- Scope
- Files affected
- Data flow
- Component relationships
- Routing impact
- Future scalability

Code should never be written without understanding the architecture first.

---

## 4. Small, Reviewable Changes

Each implementation should be small enough to review easily.

Large features must be divided into smaller milestones.

---

## 5. No Premature Optimization

Do not optimize code unless there is a measurable reason.

Prefer simple, understandable solutions first.

Optimize only when necessary.

---

# Tech Stack

Frontend

- React
- JavaScript
- Vite
- React Router
- Tailwind CSS

Backend (Future)

- Node.js
- Express
- MongoDB
- JWT Authentication

AI Integration (Future)

- OpenRouter API

Deployment

- Vercel
- Render

No additional technologies should be introduced without architectural discussion.

---

# Coding Standards

## Components

Each component should have a single responsibility.

Avoid large components that manage multiple unrelated concerns.

---

## File Naming

Components

PascalCase

Example

UserCard.jsx

Pages

PascalCase

Example

Dashboard.jsx

Hooks

camelCase

Example

useChat.js

Utilities

camelCase

Example

formatDate.js

Constants

UPPER_SNAKE_CASE when appropriate.

---

## Folder Organization

Organize by feature instead of placing everything inside one folder whenever practical.

Keep related files together.

---

## Reusability

If the same UI appears multiple times, convert it into a reusable component.

Avoid duplicate code.

---

## State Management

Prefer local state first.

Lift state only when required.

Avoid introducing global state until the application genuinely needs it.

---

## Styling

Use Tailwind CSS.

Avoid inline styles except for dynamic values that cannot be represented cleanly with Tailwind.

Maintain consistent spacing, typography, and color usage.

---

# Git Rules

Every completed feature should have its own commit.

Commit messages should follow:

feat:
fix:
refactor:
docs:
style:
chore:

Examples

feat: create application layout

docs: add architecture documentation

fix: resolve sidebar navigation issue

---

# Development Workflow

Every feature must follow this sequence:

1. Requirements
2. Architecture Discussion
3. Implementation
4. Testing
5. Git Commit
6. Project Status Update

No steps should be skipped.

---

# Documentation Rules

Whenever a feature is completed:

Update:

- PROJECT_STATUS.md

If architecture changes:

Update:

- ARCHITECTURE.md

If roadmap changes:

Update:

- ROADMAP.md

Project documentation should always reflect the current state of the project.

---

# Quality Standards

Every feature should satisfy the following before completion:

- Clear folder structure
- Reusable components where appropriate
- Responsive layout
- Clean code
- No dead code
- No unnecessary dependencies
- No console logs left in production code
- Consistent naming

---

# Learning Goal

The project should demonstrate professional frontend engineering practices.

The codebase should be understandable to another developer without additional explanation.

Maintainability is more important than cleverness.

---

# Out of Scope (Current Phase)

Until explicitly planned, do not implement:

- Authentication
- Payments
- Backend APIs
- AI Integrations
- Database
- Notifications
- Real-time collaboration
- Role-based access
- Testing frameworks
- Performance optimizations

These features will be added according to the roadmap.

---

# Definition of Done

A feature is considered complete only when:

- Requirements are satisfied
- Architecture remains consistent
- Code is clean
- UI is responsive
- Manual testing passes
- Documentation is updated
- Git commit is prepared

Only then should the next feature begin.