export const siteConfig = {
  name: "Ivan Kozlov / @frushanto",
  title: "Embedded Systems Engineer",
  titleDisplay: "(not only) Embedded Systems Engineer",
  description: "Portfolio website of Ivan Kozlov",
  accentColor: "#1d4ed8",
  social: {
    email: "frushanto@gmail.com",
    linkedin: "https://linkedin.com/in/i-kozlov",
    github: "https://github.com/frushanto",
  },
  aboutMe:
    "Pragmatic, positive, and results-oriented embedded engineer with 7+ years in rail and automotive domains. Specialised in embedded software design, development, certification, and solution architecture. Proactive team player focused on measurable results, transparent workflows, and continuous improvement.",
  skills: [
    "C",
    "C++",
    "C#",
    "Python",
    "Software Architecture",
    "Embedded Systems",
    "Microcontrollers (ARM Cortex-M/R)",
    "RTOS",
    "Git",
    "CI/CD",
    "Debugging",
    "Software Testing",
    "Communication Protocols (SPI/I2C/UART/CAN(-FD)/ETHERNET/BLE)",
    "End-of-Line Testing",
    "Calibration",
    "Software Certification (EN 50128/50657, EN 50129)",
    "PCB/Schematic Design"
  ],
  languages: [
    {
      name: "Russian",
      proficiency: "Native",
    },
    {
      name: "German",
      proficiency: "C2 - Proficient",
    },
    {
      name: "English",
      proficiency: "C1 - Advanced",
    },
  ],
  projects: [
    {
      name: "ESP32-S3 Secure OTA Framework (In Progress)",
      description:
        "Production-ready, standalone secure OTA framework component for ESP32-S3, designed to demonstrate professional firmware architecture, security engineering, and component-based development practices. Code will be open-sourced upon first release.",
      link: "",
      skills: ["C", "ESP32-S3", "OTA Updates", "Security Engineering", "Firmware Architecture", "Component Design"],
    },
    {
      name: "Telegram Weather Bot",
      description:
        "Open-source asynchronous Telegram bot providing real-time weather information with subscription services, multilingual support, privacy features, and spam protection. Built with emphasis on clean architecture, testability, and excellent user experience. Try it: @FruReporterBot",
      link: "https://github.com/frushanto/telegram-weather-bot-pub",
      skills: ["Python", "Async", "Telegram Bot API", "Clean Architecture", "Testing"],
    },
    {
      name: "foxBMS 2 Platform Migration & Hardware Porting",
      description:
        "Accomplished the first phase migration of battery management system from foxBMS 1 to 2, porting TI TMS570 microcontroller to the master unit. Designed PCB layout in Altium Designer, placed components, and developed bare-metal drivers for ARM Cortex-R5F. Implemented power management unit software for effective BMS control, ensuring system integration and operational readiness.",
      link: "https://github.com/foxBMS/foxbms-2",
      skills: ["C", "ARM Cortex-R5F", "Bare-Metal", "Altium Designer", "PCB Design", "Low-Level Drivers", "BMS", "Hardware Porting"],
    },
    {
      name: "Construction of an Electric Race Car (Formula Student Team 'Strohm und Söhne')",
      description:
        "Developed, designed, and installed LV and HV wiring harnesses for electric racing car NoRa 5, ensuring optimal functionality and compliance with project specifications.",
      link: "https://strohmundsoehne.de/nora5/",
      skills: ["Wiring Harnesses", "LV/HV Systems", "Hardware Design", "Formula Student"],
    },
  ],
  experience: [
    {
      company: "Siemens Mobility GmbH",
      title: "Embedded Systems Engineer",
      dateRange: "Oct 2021 – Present | Erlangen, Germany",
      bullets: [
        "Architecting and developing embedded software for next-generation locomotive battery management and control systems based on ARM Cortex-M microcontrollers.",
        "Designing WPF desktop applications in .NET C# as part of a unified test and configuration ecosystem for embedded devices, including automated firmware update workflows.",
        "Establishing CI/CD pipelines and test automation infrastructure to enable reproducible builds, continuous verification, and long-term software maintainability.",
        "Defining software validation strategies and implementing multi-level testing — from unit and integration to hardware-in-the-loop and end-of-line verification.",
        "Collaborating across hardware, production, and quality teams to ensure calibration accuracy, manufacturing readiness, and compliance with EN 50128/50657 and EN 50129 standards.",
        "Competencies: C++, C#, .NET, WPF, embedded software architecture, firmware development, RTOS, debugging, CI/CD, software testing, Git, calibration, end-of-line & hardware-in-the-loop testing, hardware-software integration, communication protocols (CAN, UART, I²C)."
      ],
    },

    {
      company: "Siemens Mobility GmbH",
      title: "Embedded Systems Developer (Master Thesis)",
      dateRange: "Mar 2021 – Oct 2021 | Erlangen, Germany",
      bullets: [
        "Integrated an analog-to-digital converter (ADS125H02) for an analog frontend of a battery management system to monitor onboard batteries in rail vehicles.",
        "Developed and deployed the low-level software for the analog frontend.",
        "Conducted schematic development and PCB design of an IO unit of a battery management system.",
        "Competencies: C/C++, low-level software development, ARM Cortex-M7, git, software testing, analog-to-digital conversion, communication protocols, hardware design.",
      ],
    },
    {
      company: "Siemens Healthineers",
      title: "IT Strategy Manager (Working Student)",
      dateRange: "Mar 2020 – Feb 2021 | Erlangen, Germany",
      bullets: [
        "Digitised and automated internal corporate processes using Microsoft Power Platform, significantly reducing operational costs associated with maintaining the product owners' and stakeholders' databases.",
        "Orchestrated global digitalization hackathons, bringing together diverse teams from Asia/Pacific, Europe, and South America in collaborative innovation efforts.",
        "Facilitated in-depth training sessions on robotics process automation (RPA) and workflow automation, equipping teams with essential digital transformation tools.",
        "Competencies: technical expertise, change management, analytical thinking, communication and interpersonal skills, MS Power Platform, UI Path.",
      ],
    },
    {
      company: "Fraunhofer Institute for Integrated Circuits",
      title: "Embedded Systems Developer (Working Student & Bachelor Thesis)",
      dateRange: "May 2018 – Feb 2020 | Erlangen, Germany",
      bullets: [
        "Ported a TI TMS570 microcontroller to the master unit of a battery management system (foxBMS), ensuring integration and operation.",
        "Developed basic drivers for a TI TMS570 microcontroller in a bare-metal environment, ensuring foundational software support for system functionality.",
        "Developed software to enable a power management unit to effectively control and manage a battery management system.",
        "Competencies: C, Python, ARM Cortex-R5F, debugging, customization of toolchain, git, CI/CD, low-level software development, hardware design, communication protocols.",
      ],
    },
    {
      company: "Ec-logic GmbH",
      title: "Java Software Developer (Internship)",
      dateRange: "Oct 2017 – Feb 2018 | Fürth, Germany",
      bullets: [
        "Developed and launched a microservice that calculates tax implications for companies acquiring new vehicle fleets in the Dutch market.",
        "Competencies: Java, RESTful API, Jenkins, microservice architecture, unit tests, CI/CD.",
      ],
    },
  ],
  education: [
    {
      school: "Nuremberg Institute of Technology (OHM)",
      degree: "M.Eng. – Electronic and Mechatronic Systems",
      dateRange: "2019 – 2021 | Nuremberg, Germany",
      achievements: [
        "Thesis: Development of an analog frontend for a battery management system for onboard batteries in rail vehicles.",
      ],
    },
    {
      school: "Nuremberg Institute of Technology (OHM)",
      degree: "B.Eng. – Medical Engineering",
      dateRange: "2015 – 2019 | Nuremberg, Germany",
      achievements: [
        "Thesis: Development of basic drivers for a TI TMS570 microcontroller for porting an existing battery management system.",
      ],
    },
  ],
  hobbies: [
    "Exploring Software Development & Design",
    "Diverse Microelectronic Projects",
    "3D Printing",
    "Gym",
    "Singing",
    "Electric Guitar",
    "Hiking",
    "Gravel Biking",
  ],
};
