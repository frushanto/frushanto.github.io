export const siteConfigEN = {
  name: "Ivan Kozlov / @frushanto",
  title: "Embedded Systems Engineer",
  titleDisplay: "Embedded Systems Engineer",
  description: "Portfolio website of Ivan Kozlov",
  accentColor: "#1d4ed8",
  social: {
    email: "frushanto@gmail.com",
    linkedin: "https://linkedin.com/in/i-kozlov",
    github: "https://github.com/frushanto",
  },
  aboutMe:
    "Pragmatic and results-driven embedded engineer with 7+ years of experience in rail and automotive domains. Specialized in embedded software architecture, test automation, and product lifecycle development — from firmware and tooling to calibration and certification. Dedicated to designing reliable and maintainable embedded software architectures, complemented by desktop testing and tooling solutions for efficient validation and deployment.",
  skills: [
    // Core Development
    "C/C++",
    "C#",
    "Python",
    // Embedded Systems
    "Embedded Software Architecture",
    "RTOS",
    "Firmware Development",
    "Microcontrollers (ARM Cortex-M/R)",
    // Tooling & Infrastructure
    ".NET",
    "WPF",
    "CI/CD",
    "Git",
    "Debugging",
    "Software Testing",
    "Hardware-in-the-Loop",
    // Communication & Interfaces
    "SPI/I2C/UART/CAN(-FD)/Ethernet/BLE",
    // System-Level
    "End-of-Line Testing",
    "Calibration",
    "Software Certification (EN 50128/50657, EN 50129)",
    // Hardware Knowledge
    "PCB/Schematic Design"
  ],
  languages: [
    { name: "Russian", proficiency: "Native" },
    { name: "German", proficiency: "C2 - Proficient" },
    { name: "English", proficiency: "C1 - Advanced" },
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
        "Open-source asynchronous Telegram bot providing real-time weather information with subscription services, multilingual support, and spam protection. Built with clean architecture principles, test-driven development, and async design to ensure scalability and maintainability. Try it: @FruReporterBot",
      link: "https://github.com/frushanto/telegram-weather-bot-pub",
      skills: ["Python", "Async", "Telegram Bot API", "Clean Architecture", "Testing"],
    },
    {
      name: "foxBMS 2 Platform Migration & Hardware Porting",
      description:
        "Accomplished the first-phase migration of a battery management system from foxBMS 1 to 2, porting the TI TMS570 microcontroller to the master unit. Designed PCB layouts in Altium Designer, developed bare-metal drivers for ARM Cortex-R5F, and implemented power management unit software ensuring system integration and operational readiness.",
      link: "https://github.com/foxBMS/foxbms-2",
      skills: ["C", "ARM Cortex-R5F", "Bare-Metal", "Altium Designer", "PCB Design", "Low-Level Drivers", "BMS", "Hardware Porting"],
    },
    {
      name: "Construction of an Electric Race Car (Formula Student Team 'Strohm und Söhne')",
      description:
        "Developed, designed, and installed LV and HV wiring harnesses for the electric racing car NoRa 5, ensuring optimal functionality and compliance with project specifications.",
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
        "Architected embedded software for next-generation locomotive battery management and control systems (ARM Cortex-M).",
        "Built WPF desktop applications in .NET C# for automated testing, configuration, and firmware update workflows, forming part of a unified test ecosystem.",
        "Established CI/CD pipelines and test automation infrastructure for reproducible builds and continuous verification of firmware and desktop tools.",
        "Defined validation strategies, implementing multi-level testing — from unit and integration to hardware-in-the-loop and end-of-line verification.",
        "Collaborated with hardware, production, and quality teams to ensure calibration accuracy, manufacturing readiness, and compliance with EN 50128/50657 and EN 50129 standards.",
        "Competencies: C++, C#, .NET, WPF, embedded software architecture, firmware development, RTOS, debugging, CI/CD, software testing, Git, calibration, end-of-line & hardware-in-the-loop testing, hardware-software integration, communication protocols (CAN, UART, I²C)."
      ],
    },
    {
      company: "Siemens Mobility GmbH",
      title: "Embedded Systems Developer (Master Thesis)",
      dateRange: "Mar 2021 – Oct 2021 | Erlangen, Germany",
      bullets: [
        "Integrated an analog-to-digital converter (ADS125H02) for the analog frontend of a battery management system to monitor onboard batteries in rail vehicles.",
        "Developed and deployed low-level software for the analog frontend, enabling stable measurement acquisition.",
        "Designed schematics and PCB layouts for the IO unit of a battery management system, ensuring proper integration with control electronics.",
        "Competencies: C/C++, low-level software development, ARM Cortex-M7, Git, software testing, analog-to-digital conversion, communication protocols, hardware design.",
      ],
    },
    {
      company: "Siemens Healthineers",
      title: "IT Strategy Manager (Working Student)",
      dateRange: "Mar 2020 – Feb 2021 | Erlangen, Germany",
      bullets: [
        "Automated internal corporate processes using Microsoft Power Platform, reducing maintenance costs and manual workload for product owner and stakeholder databases.",
        "Coordinated international digitalization hackathons, connecting cross-regional teams from Asia, Europe, and South America to drive innovation.",
        "Delivered internal trainings on RPA and workflow automation tools, enhancing digital maturity across departments.",
        "Competencies: technical expertise, change management, analytical thinking, communication and interpersonal skills, MS Power Platform, UI Path.",
      ],
    },
    {
      company: "Fraunhofer Institute for Integrated Circuits",
      title: "Embedded Systems Developer (Working Student & Bachelor Thesis)",
      dateRange: "May 2018 – Feb 2020 | Erlangen, Germany",
      bullets: [
        "Ported a TI TMS570 microcontroller to the master unit of a battery management system (foxBMS), ensuring full system integration and operation.",
        "Developed basic drivers for the TI TMS570 microcontroller in a bare-metal environment, establishing foundational firmware support.",
        "Implemented software for a power management unit to control and monitor BMS operation effectively.",
        "Competencies: C, Python, ARM Cortex-R5F, debugging, toolchain customization, Git, CI/CD, low-level software development, hardware design, communication protocols.",
      ],
    },
    {
      company: "Ec-logic GmbH",
      title: "Java Software Developer (Internship)",
      dateRange: "Oct 2017 – Feb 2018 | Fürth, Germany",
      bullets: [
        "Developed and launched a microservice calculating tax implications for corporate vehicle fleet acquisitions in the Dutch market.",
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
        "Thesis: Development of an analog frontend and software architecture for a battery management system in rail applications.",
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
    "Microelectronic Projects",
    "3D Printing",
    "Gym",
    "Singing",
    "Electric Guitar",
    "Hiking",
    "Gravel Biking",
  ],
};
