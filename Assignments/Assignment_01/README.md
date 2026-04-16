# 👤 ProfileCard · Flexbox-Based React Native UI Component

## 🏷️ Badges

---

![React Native](https://img.shields.io/badge/Framework-React%20Native-61DAFB?logo=react&logoColor=white)
![Expo](https://img.shields.io/badge/Tool-Expo-000020?logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)
![Flexbox](https://img.shields.io/badge/Layout-Flexbox-E34F26)

## 📖 Executive Summary

---

Following the MernEats project series, this is a dedicated UI assignment designed to demonstrate a deep understanding of **React Native** and **Flexbox**. The primary objective of this project is to build a "Profile Card" component that is perfectly aligned, fully responsive, and adheres to mobile-first design principles. 

In this implementation, **Flexbox** properties—specifically `justifyContent`, `alignItems`, and `flexDirection`—have been utilized at a granular level to achieve a professional-grade user interface.

## 📸 Visual Tour

---

<p align="center">
  <img src="./assets/images/Main-white.png" width="33%" alt="Home Screen white" />
  <img src="./assets/images/Feature-white.png" width="33%" alt="Home Screen white" />
  <img src="./assets/images/Settings-white.png" width="33%" alt="Home Screen white" />
</p>

<p align="center">
  <img src="./assets/images/Main-black.png" width="33%" alt="Home Screen black" />
  <img src="./assets/images/feature-black.png" width="33%" alt="Home Screen black" />
  <img src="./assets/images/setting-black.png" width="33%" alt="Home Screen black" />
</p>

## 📊 High‑Level Architecture

---

```mermaid
flowchart TD
  subgraph "Mobile App (Expo Go)"
    Main[App Entry: index.tsx]
    Theme[Global Styles / Constants]
    
    subgraph "Profile Card Architecture"
      Container[Main Wrapper: flex-1]
      Card[Card View: Shadow + Border]
      Avatar[Image: Rounded Circle]
      Bio[Text Section: Center Aligned]
      Actions[Button Group: flex-row]
    end
  end

  Main --> Theme
  Main --> Container
  Container --> Card
  Card --> Avatar
  Card --> Bio
  Card --> Actions
  Actions --> Btn1[Follow Button]
  Actions --> Btn2[Message Button]
```

## ✨ Core Modules & Capabilities

---

### 1) Layout Engine (Flexbox Mastery)

- Primary Axis Alignment: Utilized justifyContent: 'center' to ensure the card remains the focal point of the screen.
- Secondary Axis Alignment: Implemented alignItems: 'center' to horizontally align all internal elements (avatar, text, bio).
- Horizontal Button Row: Combined flexDirection: 'row' with justifyContent: 'space-between' to maintain a balanced and intuitive user experience for action buttons.

### 2) Component Styling & UX

- Rounded UI: Applied precise borderRadius calculations for a modern, circular profile avatar.
- Visual Feedback: Integrated touch-ready components with opacity feedback for better user interaction.
- Typography Hierarchy: Established a clear distinction between the User Name and Professional Role using font weights and color contrasts.

## 🧰 Technology Stack
---
| Layer     | Technology                                | Purpose                                                    |
| --------- | ----------------------------------------- | ---------------------------------------------------------- |
| Framework | React Native (Expo)                       | Cross-platform mobile development                          |
| Language  | TypeScript                                | Static typing and robust code architecture                |
| Layout    | Flexbox                                   | Precise UI positioning and adaptive spacing               |
| Tooling   | Expo Go / Metro Bundler                   | Real-time testing and development workflow                |
| State     | React Hooks (useState/useEffect)          | Component-level state management                           |
| Assets    | Local Images / Vector Icons               | High-quality visual elements and branding                  |

## 📂 Project Structure

---

```
Assignment_01/
├─ app/                    # Main application screens and logic
├─ assets/                 # Profile images and static media
├─ components/             # ProfileCard.tsx (Core Logic & Styles)
├─ constants/              # Theme colors and layout constants
├─ hooks/                  # Custom React hooks for logic reuse
├─ node_modules/           # Project dependencies
├─ package.json            # Metadata, scripts, and dependencies
└─ README.md               # Project documentation
```

## 📌 Implementation Highlights

---

- Responsive Layout: Used percentage-based widths (90%) and flexible containers to ensure compatibility across various screen sizes.
- Type Safety: Defined comprehensive TypeScript interfaces for handling component props (name, role, image source).
- Platform-Specific Shadows: Handled shadows for both Android (elevation) and iOS (shadowOpacity) for a consistent look.

## 🖥️ Screens Overview

---

- Home & Search: Hero search + advanced results with cuisine chips.Profile Display: A clean, centralized card view displaying user information.
- Action Group: Properly spaced "Follow" and "Message" buttons aligned in a single row as per technical requirements.


## 📜 License

---

All rights reserved. Assignment submitted for evaluation by Muhammad Bilal.
