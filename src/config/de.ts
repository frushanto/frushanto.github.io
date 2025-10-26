export const siteConfigDE = {
  name: "Ivan Kozlov / @frushanto",
  title: "Embedded-Systems-Ingenieur",
  titleDisplay: "Embedded-Systems-Ingenieur",
  description: "Portfolio-Website von Ivan Kozlov",
  accentColor: "#1d4ed8",
  social: {
    email: "frushanto@gmail.com",
    linkedin: "https://linkedin.com/in/i-kozlov",
    github: "https://github.com/frushanto",
  },
  aboutMe:
    "Embedded-Engineer mit 7+ Jahren Erfahrung in Bahn- und Automotive-Projekten. Schwerpunkte: Embedded-Software-Architektur, Testautomatisierung und End-to-End-Produktentwicklung - von Firmware und Tooling über Kalibrierung bis zur Zertifizierung. Ich stehe für robuste, wartbare Architekturen und praxistaugliche Desktop-Tools, die Validierung und Auslieferung spürbar beschleunigen.",
  skills: [
    // Kernentwicklung
    "C/C++",
    "C#",
    "Python",
    // Embedded Systems
    "Embedded-Software-Architektur",
    "RTOS",
    "Firmware-Entwicklung",
    "Mikrocontroller (ARM Cortex-M/R)",
    // Tooling & Infrastruktur
    ".NET",
    "WPF",
    "CI/CD",
    "Git",
    "Debugging",
    "Softwaretests",
    "Hardware-in-the-Loop",
    // Kommunikation & Schnittstellen
    "SPI/I2C/UART/CAN(-FD)/Ethernet/BLE",
    // Systemebene
    "End-of-Line-Prüfungen",
    "Kalibrierung",
    "Softwarezertifizierung (EN 50128/50657, EN 50129)",
    // Hardware-Know-how
    "PCB-/Schaltungsdesign"
  ],
  languages: [
    { name: "Russisch", proficiency: "Muttersprache" },
    { name: "Deutsch", proficiency: "C2 - Verhandlungssicher" },
    { name: "Englisch", proficiency: "C1 - Fortgeschritten" },
  ],
  projects: [
    {
      name: "ESP32-S3 Secure OTA Framework (in Arbeit)",
      description:
        "Eigenständige, produktionsreife OTA-Komponente für den ESP32-S3. Fokus auf saubere Firmware-Architektur, Security-Konzepte und komponentenbasierten Aufbau. Erste Version wird als Open Source veröffentlicht.",
      link: "",
      skills: ["C", "ESP32-S3", "OTA-Updates", "Security Engineering", "Firmware-Architektur", "Komponentendesign"],
    },
    {
      name: "Telegram Weather Bot",
      description:
        "Asynchroner Open-Source-Bot mit Echtzeit-Wetter, Subscriptions, Mehrsprachigkeit und Spam-Schutz. Clean Architecture, TDD und Async-Design für Skalierbarkeit und Wartbarkeit. Testen: @FruReporterBot",
      link: "https://github.com/frushanto/telegram-weather-bot-pub",
      skills: ["Python", "Async", "Telegram Bot API", "Clean Architecture", "Testing"],
    },
    {
      name: "foxBMS-2 Plattformmigration & Hardware-Portierung",
      description:
        "Migration von foxBMS 1 auf 2 (Master-Unit mit TI TMS570). PCB-Layouts in Altium, Bare-Metal-Treiber für ARM Cortex-R5F und Software für die Power-Management-Einheit - mit erfolgreicher Systemintegration.",
      link: "https://github.com/foxBMS/foxbms-2",
      skills: ["C", "ARM Cortex-R5F", "Bare-Metal", "Altium Designer", "PCB-Design", "Low-Level-Treiber", "BMS", "Hardware-Portierung"],
    },
    {
      name: "E-Rennwagen (Formula-Student-Team \"Strohm und Söhne\")",
      description:
        "LV-/HV-Kabelbäume für den E-Rennwagen NoRa 5 konzipiert, ausgelegt und verbaut - funktionssicher und regelkonform.",
      link: "https://strohmundsoehne.de/nora5/",
      skills: ["Kabelbäume", "LV/HV-Systeme", "Hardwaredesign", "Formula Student"],
    },
  ],
  experience: [
    {
      company: "Siemens Mobility GmbH",
      title: "Embedded-Systems-Ingenieur",
      dateRange: "Okt. 2021 - heute | Erlangen, Deutschland",
      bullets: [
        "Konzeption und Umsetzung der Embedded-Software für die nächste Generation von Batterie-Management- und Regelsystemen in Lokomotiven (ARM Cortex-M).",
        "Entwicklung von WPF-Desktopanwendungen (.NET/C#) für automatisierte Tests, Konfiguration und Firmware-Updates als Teil eines durchgängigen Test-Ökosystems.",
        "Aufbau von CI/CD-Pipelines und Testautomatisierung für reproduzierbare Builds und die kontinuierliche Verifikation von Firmware und Tools.",
        "Definition von Validierungsstrategien und Einführung eines mehrstufigen Testansatzes: Unit-, Integrations-, HIL- und End-of-Line-Prüfungen.",
        "Enge Zusammenarbeit mit Hardware, Fertigung und Qualität zur Sicherstellung von Kalibrier­genauigkeit, Serienreife und Normkonformität (EN 50128/50657, EN 50129).",
        "Tech-Stack/Schwerpunkte: C++, C#, .NET, WPF, RTOS, Git; Debugging, Kalibrierung, EoL- & HIL-Tests, HW/SW-Integration; Protokolle: CAN, UART, I2C."
      ],
    },
    {
      company: "Siemens Mobility GmbH",
      title: "Embedded-Systems-Entwickler (Masterarbeit)",
      dateRange: "März 2021 - Okt. 2021 | Erlangen, Deutschland",
      bullets: [
        "Integration des A/D-Wandlers ADS125H02 in das analoge Frontend eines BMS zur Überwachung von Bordbatterien in Schienenfahrzeugen.",
        "Entwicklung stabiler Low-Level-Software für das analoge Frontend zur zuverlässigen Messwerterfassung.",
        "Schaltplan- und PCB-Design für die I/O-Einheit des BMS mit sauberer Anbindung an die Steuerelektronik.",
        "Tech-Stack/Schwerpunkte: C/C++, ARM Cortex-M7, Git; Softwaretests, A/D-Wandlung, Kommunikationsprotokolle, Hardwaredesign."
      ],
    },
    {
      company: "Siemens Healthineers",
      title: "IT-Strategiemanager (Werkstudent)",
      dateRange: "März 2020 - Feb. 2021 | Erlangen, Deutschland",
      bullets: [
        "Automatisierung interner Prozesse mit der Microsoft Power Platform - geringere Wartungsaufwände und weniger manuelle Arbeit in PO- und Stakeholder-Datenbanken.",
        "Organisation internationaler Digitalisierungs-Hackathons und Vernetzung von Teams aus Asien, Europa und Südamerika.",
        "Durchführung interner Trainings zu RPA und Workflow-Automatisierung; spürbare Steigerung der digitalen Reife in den Bereichen.",
        "Werkzeuge/Schwerpunkte: Microsoft Power Platform, UiPath; Change-Management, Kommunikation, analytisches Arbeiten."
      ],
    },
    {
      company: "Fraunhofer-Institut für Integrierte Schaltungen",
      title: "Embedded-Systems-Entwickler (Werkstudent & Bachelorarbeit)",
      dateRange: "Mai 2018 - Feb. 2020 | Erlangen, Deutschland",
      bullets: [
        "Portierung des TI TMS570 auf die Master-Einheit eines BMS (foxBMS) inklusive Systemintegration und Inbetriebnahme.",
        "Entwicklung von Basistreibern im Bare-Metal-Umfeld für den TI TMS570.",
        "Implementierung einer Power-Management-Einheit zur Steuerung und Überwachung des BMS-Betriebs.",
        "Tech-Stack/Schwerpunkte: C, Python, ARM Cortex-R5F, Git, CI/CD; Debugging, Toolchain-Anpassung, Hardwaredesign, Kommunikationsprotokolle."
      ],
    },
    {
      company: "Ec-logic GmbH",
      title: "Java-Softwareentwickler (Praktikum)",
      dateRange: "Okt. 2017 - Feb. 2018 | Fürth, Deutschland",
      bullets: [
        "Entwicklung und Einführung eines Microservices zur Berechnung steuerlicher Effekte beim Flotteneinkauf im niederländischen Markt.",
        "Technologien/Qualität: Java, RESTful APIs, Jenkins; Microservice-Architektur, Unit-Tests, CI/CD."
      ],
    },
  ],
  education: [
    {
      school: "Technische Hochschule Nürnberg (OHM)",
      degree: "M.Eng. - Elektronische und Mechatronische Systeme",
      dateRange: "2019 - 2021 | Nürnberg, Deutschland",
      achievements: [
        "Masterarbeit: Analog-Frontend und Software-Architektur für ein Batterie-Management-System in Bahnanwendungen.",
      ],
    },
    {
      school: "Technische Hochschule Nürnberg (OHM)",
      degree: "B.Eng. - Medizintechnik",
      dateRange: "2015 - 2019 | Nürnberg, Deutschland",
      achievements: [
        "Bachelorarbeit: Basistreiber für den TI TMS570 zur Portierung eines bestehenden Batterie-Management-Systems.",
      ],
    },
  ],
  hobbies: [
    "Softwareentwicklung & -Design",
    "Mikroelektronik-Projekte",
    "3D-Druck",
    "Krafttraining",
    "Singen",
    "E-Gitarre",
    "Wandern",
    "Gravel-Biking",
  ],
};
