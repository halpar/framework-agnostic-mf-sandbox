# 🧱 Framework-Agnostic Microfrontend Sandbox

A multi-framework microfrontend architecture playground combining **React**, **Vue**, and **Svelte** apps under a single shell via **Webpack Module Federation**.

This project explores real-world challenges in building decoupled, composable frontend systems with meaningful integration between isolated apps.

---

## 🎯 Key Concepts Demonstrated

✅ Cross-framework module loading (React + Vue + Svelte)  
✅ Shared state communication using multiple strategies  
✅ Runtime route injection  
✅ Isolated builds and deployments  
✅ Realistic feature-driven integration  
✅ Event-driven, reactive, and persistent state flows

---

## 🔧 Tech Stack

| Layer       | Tech                                               |
| ----------- | -------------------------------------------------- |
| Host App    | React (Shell)                                      |
| Remotes     | React (Dashboard), Vue 3 (Reports), Svelte (Admin) |
| Build       | Webpack 5 + Module Federation                      |
| Workspace   | pnpm workspaces                                    |
| State Share | Multi-strategy (see below)                         |

---

## 📂 Apps Overview

| App       | Framework | Description                              |
| --------- | --------- | ---------------------------------------- |
| Shell     | React     | Layout, route injection, auth simulation |
| Dashboard | React     | User list & selection                    |
| Reports   | Vue 3     | PDF export & selected user detail        |
| Admin     | Svelte    | User permission management               |

---

## 🔄 Cross-Microfrontend State Sharing

Instead of isolating demos, all state sharing strategies are implemented within actual feature flows across microfrontends.  
Each method demonstrates how independent apps can **communicate without tight coupling**.

| Strategy                   | Type         | Used Between           | Description                             |
| -------------------------- | ------------ | ---------------------- | --------------------------------------- |
| **Custom Event Bus**       | Event-based  | Dashboard → Reports    | Select user and propagate it            |
| **RxJS (BehaviorSubject)** | Stream-based | Shell → Admin, Reports | Central user stream broadcast           |
| **BroadcastChannel API**   | Pub/Sub API  | Admin ↔ Shell          | Role update syncing                     |
| **URL Sync (Query Param)** | Navigation   | Shell ↔ All            | Persist selected filters across reloads |
| **Shell-as-Source (Prop)** | Explicit API | Shell → Dashboard      | Shell injects props into mount          |
| **LocalStorage Sync**      | Persistent   | All apps               | Persistent state across reloads/tabs    |

> All mechanisms are used in real app contexts and organized inside `/shared/state-methods`.

---

## 🧠 Architectural Goals

- **Technology independence:** Each app is written in its own framework
- **Deployment isolation:** Apps can be built and deployed separately
- **Loose coupling:** No cross-framework dependency
- **Minimal shared runtime:** Only common utilities are shared

---

## 📁 Project Structure

````txt
framework-agnostic-mf-sandbox/
├── apps/
│   ├── shell/           # React host app (router, layout)
│   ├── dashboard/       # React microfrontend
│   ├── reports/         # Vue microfrontend
│   ├── admin/           # Svelte microfrontend
├── shared/
│   └── state-methods/   # All state sync mechanisms live here
│       ├── eventBus.ts
│       ├── rxjs.ts
│       ├── broadcast.ts
│       ├── urlSync.ts
│       └── localStorage.ts
├── pnpm-workspace.yaml
└── README.md
````

---

## 🚀 Getting Started

To start the project locally:

```bash
pnpm install
pnpm dev    # Starts all apps concurrently (via dev script)
```

---

## 🧩 Extending This Project

This repository is designed to be modular and extendable. Here are a few ideas for expansion:

- 🔌 Add new microfrontend apps in different frameworks
- 🔄 Experiment with advanced state-sharing techniques (e.g. service workers, shared workers)
- ⚙️ Test inter-app communication using your own shared state manager
- 🔍 Add runtime error handling and fallback UI between remote loads
- 🌐 Try deploying each app independently and connecting them via CDN or public remotes
- 🧪 Add test cases for each app and simulate integration failures
- 📦 Extract `/shared/state-methods` into a reusable npm package


> _Designed by [Alper Sarper](https://github.com/halpar) to explore real-world frontend architecture beyond the component level._
