# BrawlSports.gg (BSN || Brawl Sports Network)

> A full-stack web application bringing analytics, real-time user management, and esports fantasy tools to the Brawl Stars community.

---

## Project Overview

**BrawlSports.gg** is a web platform designed to give esports fans a centralised hub for tournament tracking, user profile management, and interactive fantasy play. Built with React and powered by Postgres Supabase, the application features authentication, dynamic databases and a responsive frontend UI.

*This project is actively maintained as part of an ongoing undergraduate portfolio.*

---

## Key Features

* **Secure Authentication:** Complete registration and login system managed via Supabase Auth.
* **Automated Data Pipelines:** PostgreSQL database triggers automatically instantiate and link user metadata (`username`, `region`, `team`) upon registration.
* **Global Auth State:** React Context API handles active user sessions and token storage across routing components.
* **Cached Performance:** Optimized client-side fetching and stroing reduces direct database calls by caching user profiles in global session contexts.
* **Responsive UI:** Clean, light-mode focused styling tailored for desktop and mobile navigation.

---

## Tech Stack

* **Frontend:** React, React Router v6, CSS3
* **Backend as a Service (BaaS):** Supabase
* **Database:** PostgreSQL (with Row Level Security & custom SQL triggers)
* **Version Control:** Git & GitHub

---

## Devlopmenets

### Completed:
* **✅ Basic navigation**
* **✅ User authentication**

### Future Developments:
* **🔜 News modules**
* **🕓 Fantasy gamemode**
* **🕓 Brawl Stars API brackets integration**
  
### *Created by: Kabir Basra, 2nd year Computer Scientist at The University of Sheffield*
