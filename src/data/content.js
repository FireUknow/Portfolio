
export const content = {
    ko: {
        navbar: {
            about: "소개",
            skills: "기술 스택", // Moved up
            projects: "프로젝트",
            contact: "연락처",
            resume: "이력서"
        },
        hero: {
            greeting: "안녕하세요, 저는",
            title: "Hardware to Software,\nBridge the Gap.",
            subtitle: "회로 설계부터 펌웨어 제어, 응용 소프트웨어까지.\n시스템의 빈틈을 메우는 엔지니어 송윤오입니다.",
            description: "MCU 펌웨어 최적화부터 Python 기반 데이터 파이프라인 구축까지, 하드웨어와 소프트웨어의 경계를 허무는 통합 솔루션을 설계합니다.",
            cta: "프로젝트 보기",
            badges: ["Circuit Design", "Firmware Intergration", "System Architecture"]
        },
        about: {
            title: "엔지니어링 철학",
            description: [
                "저는 '기구'를 만드는 사람이 아니라, 시스템의 '신경망(H/W)'과 '뇌(F/W)'를 설계하는 사람입니다.",
                "하드웨어의 물리적 한계를 소프트웨어로 극복하고, 소프트웨어의 부하를 하드웨어로 분산시키는 최적화 경험을 보유하고 있습니다.",
                "단순 작동을 넘어, 시스템 전체의 안정성과 확장성을 고려한 설계를 지향합니다."
            ]
        },
        skills: {
            title: "기술 스택 (Tech Stack)",
            layers: {
                sw: "Layer 1. Application S/W (Data & Logic)",
                fw: "Layer 2. Control F/W (System Brain)",
                hw: "Layer 3. Hardware H/W (Physical Layer)"
            }
        },
        projects: {
            title: "프로젝트 (Projects)",
            filter: {
                all: "전체",
                embedded: "Embedded System",
                pc: "PC Application",
                web: "Web & Automation"
            },
            modal: {
                context: "Context & Problem",
                tech: "Technical Specifications",
                features: "Key Features",
                troubleshooting: "Critical Troubleshooting (Engineering Log)",
                links: "Links"
            }
        },
        contact: {
            title: "연락하기",
            subtitle: "시스템 개발 및 통합 관련 문의",
            description: "회로 설계, 펌웨어 최적화, 혹은 전체 시스템 아키텍처에 대한 논의가 필요하시다면 언제든 연락 주세요.",
            btn: "메일 보내기"
        }
    },
    en: {
        navbar: {
            about: "About",
            skills: "Tech Stack", // Moved up
            projects: "Projects",
            contact: "Contact",
            resume: "Resume"
        },
        hero: {
            greeting: "Hello, I am",
            title: "Hardware to Software,\nBridge the Gap.",
            subtitle: "Bridging the gap between Circuit Design,\nFirmware Control, and Application Software.",
            description: "I am a System Engineer who designs the neural network (Circuit), the brain (Firmware), and the interface (Software).",
            cta: "View Projects",
            badges: ["Circuit Design", "Firmware Intergration", "System Architecture"]
        },
        about: {
            title: "Engineering Philosophy",
            description: [
                "I do not just 'make things'; I design the system's neural network (H/W) and brain (F/W).",
                "I specialize in full-system optimization—overcoming physical hardware limitations with software and offloading software loads to hardware.",
                "Beyond mere functionality, I design for stability, scalability, and integration."
            ]
        },
        skills: {
            title: "Tech Stack",
            layers: {
                sw: "Layer 1. Application S/W (Data & Logic)",
                fw: "Layer 2. Control F/W (System Brain)",
                hw: "Layer 3. Hardware H/W (Physical Layer)"
            }
        },
        projects: {
            title: "Projects",
            filter: {
                all: "All",
                embedded: "Embedded System",
                pc: "PC Application",
                web: "Web & Automation"
            },
            modal: {
                context: "Context & Problem",
                tech: "Technical Specifications",
                features: "Key Features",
                troubleshooting: "Critical Troubleshooting (Engineering Log)",
                links: "Links"
            }
        },
        contact: {
            title: "Contact",
            subtitle: "Let's connect.",
            description: "Feel free to reach out regarding Circuit Design, Firmware Optimization, or System Architecture.",
            btn: "Send Email"
        }
    }
};

// 3-Layer Tech Stack Structure
export const skillsData = {
    sw: {
        title: "Application S/W",
        desc: "Data Visualization & Automation Interface",
        skills: [
            { name: "Python", icon: "devicon-python-plain" },
            { name: "PyQt5", icon: "fas fa-desktop" }, // FontAwesome
            { name: "Linux (Ubuntu)", icon: "devicon-linux-plain" },
            { name: "GCP / Firebase", icon: "devicon-googlecloud-plain" }
        ]
    },
    fw: {
        title: "Control F/W",
        desc: "Real-time Control & data processing",
        skills: [
            { name: "C / C++", icon: "devicon-c-plain" },
            { name: "STM32 (HAL/LL)", icon: "devicon-embedded-plain" },
            { name: "FreeRTOS", icon: "fas fa-network-wired" },
            { name: "Embedded C", icon: "devicon-c-plain" }
        ]
    },
    hw: {
        title: "Hardware H/W",
        desc: "Circuit Design & Physical Signal Conditioning",
        skills: [
            { name: "Circuit Design", icon: "fas fa-microchip" },
            { name: "PCB Layout", icon: "fas fa-layer-group" },
            { name: "KiCAD / Altium", icon: "fas fa-drafting-compass" },
            { name: "Oscilloscope", icon: "fas fa-wave-square" }
        ]
    }
};

// Enhanced Project Data with Tech Specs & Deep Troubleshooting
export const projectsData = {
    ko: [
        {
            id: 1,
            title: "STM32 기반 스마트 팩토리 센서 노드",
            category: "embedded",
            summary: "산업용 모터 진동/온도 실시간 수집 IoT 노드 (High-speed Sampling)",
            techStack: ["STM32F4", "FreeRTOS", "MQTT", "C"],
            techSpec: [
                "MCU: STM32F429 (ARM Cortex-M4)",
                "OS: FreeRTOS v10.4",
                "Comm: Wi-Fi (ESP8266 AT Cmd), MQTT",
                "Signal: 10kHz Sampling via DMA"
            ],
            context: "기존 유선 센서는 설치 비용이 높고 유지보수가 어려웠습니다. 이를 해결하기 위해 배터리로 구동되면서도 10kHz 고속 샘플링이 가능한 소형 무선 센서 노드가 필요했습니다.",
            keyFeatures: [
                "ADC-DMA 연동을 통한 CPU 부하 없는 10kHz 고속 진동 데이터 샘플링",
                "FreeRTOS 멀티스레딩: 데이터 수집 태스크(Real-time)와 통신 태스크(Lazy) 분리",
                "저전력 설계: 측정 주기가 아닐 때 Stop Mode 진입 (배터리 수명 30% 증가)"
            ],
            troubleshooting: {
                problem: "Wi-Fi 데이터 전송 시 순간적인 전류 소모로 인해 ADC 참조 전압이 흔들리며 센서 값에 노이즈(Ripple)가 혼입됨.",
                process: "오실로스코프로 3.3V 전원 라인을 분석하여 300mVp-p 리플 확인. 단순 SW 필터링으로는 왜곡된 신호를 복구할 수 없다고 판단.",
                solution: "전원부 LC 필터 추가 및 아날로그/디지털 그라운드(AGND/DGND)를 페라이트 비즈로 분리하여 SNR 20dB 개선. 하드웨어의 문제를 정공법으로 해결함."
            },
            links: { github: "#", video: "#" },
            blockDiagram: "https://via.placeholder.com/800x400?text=System+Block+Diagram" // Placeholder
        },
        {
            id: 2,
            title: "반도체 장비 로그 분석 자동화 툴",
            category: "pc",
            summary: "10GB+ 대용량 로그 파싱 및 에러 패턴 히트맵 시각화 툴",
            techStack: ["Python", "PyQt5", "Pandas", "Matplotlib"],
            techSpec: [
                "Language: Python 3.9",
                "UI Framework: PyQt5",
                "Data Engine: Pandas, NumPy",
                "OS: Windows 10/11"
            ],
            context: "엔지니어들이 텍스트로 된 기가바이트 단위의 로그를 엑셀로 열다가 다운되는 일이 빈번했습니다. 이를 시각화하여 직관적으로 에러 패턴을 찾아야 했습니다.",
            keyFeatures: [
                "Pandas Chunking 기법으로 10GB 파일을 메모리 오버플로우 없이 로딩",
                "정규표현식(Regex)을 컴파일하여 파싱 속도 500% 향상",
                "PyQt5 QThread를 활용하여 UI 프리징(응답 없음) 방지"
            ],
            troubleshooting: {
                problem: "대용량 CSV 로딩 시 메인 UI 스레드가 멈춰 사용자 경험(UX)이 극도로 저하됨 (Not Responding 발생).",
                process: "Python의 GIL(Global Interpreter Lock)로 인해 단순 스레딩만으로는 CPU 바운드 작업(파싱) 시 UI가 버벅임 확인.",
                solution: "QThread와 Signal-Slot 메커니즘을 적용하여 파싱 로직을 워커 스레드로 완전히 분리하고, 진행률(Progress Bar)만 메인 스레드로 통신하도록 아키텍처 재설계."
            },
            links: { github: "#" },
            blockDiagram: "https://via.placeholder.com/800x400?text=S/W+Flowchart"
        },
        {
            id: 3,
            title: "실시간 서버 리소스 모니터링 대시보드",
            category: "web",
            summary: "GCP 서버 상태 실시간 모니터링 풀스택 (Agent + Web)",
            techStack: ["React", "Firebase", "Python (Agent)"],
            techSpec: [
                "Frontend: React, Chart.js",
                "Backend: Firebase Realtime DB",
                "Agent: Python (psutil)",
                "Host: GCP Compute Engine"
            ],
            context: "외부 미팅 중에도 서버(장비)의 상태를 모바일로 확인하고 싶었습니다. 기존 상용 솔루션은 비싸고 무거워서 직접 경량화된 솔루션을 구축했습니다.",
            keyFeatures: [
                "Python 데몬(Agent)이 Linux System Call을 통해 CPU/RAM 사용량 수집",
                "Firebase SDK를 통한 웹소켓 기반 실시간 데이터 동기화 (Latency < 100ms)",
                "반응형 웹 대시보드로 모바일/PC 어디서든 확인 가능"
            ],
            troubleshooting: {
                problem: "네트워크가 일시적으로 끊겼을 때, 그 사이의 데이터가 유실되어 그래프가 끊기는 현상 발생.",
                process: "TCP 연결이 끊어지면 데이터 전송 실패 예외가 발생하고 데이터가 버려짐을 확인.",
                solution: "Agent 내부에 Deque(양방향 큐) 기반의 로컬 버퍼를 구현. 네트워크 단절 시 데이터를 로컬에 쌓아두고, 재연결 시 타임스탬프와 함께 일괄 전송(Batch Upload)하여 데이터 정합성 확보."
            },
            links: { github: "#", external: "#" },
            blockDiagram: "https://via.placeholder.com/800x400?text=Network+Architecture"
        }
    ],
    en: [
        {
            id: 1,
            title: "STM32 Smart Factory Sensor Node",
            category: "embedded",
            summary: "Real-time Industrial IoT Sensor Node (High-speed Sampling)",
            techStack: ["STM32F4", "FreeRTOS", "MQTT", "C"],
            techSpec: [
                "MCU: STM32F429 (ARM Cortex-M4)",
                "OS: FreeRTOS v10.4",
                "Comm: Wi-Fi (ESP8266 AT Cmd), MQTT",
                "Signal: 10kHz Sampling via DMA"
            ],
            context: "Existing wired sensors were costly and hard to maintain. We needed a compact wireless node capable of 10kHz sampling on battery power.",
            keyFeatures: [
                "10kHz vibration data sampling via ADC-DMA without Mobile CPU load",
                "FreeRTOS Multithreading: Separted Data Acquisition (Real-time) and Comm (Lazy) tasks",
                "Low Power Design: Stop Mode entry during idle (Battery life +30%)"
            ],
            troubleshooting: {
                problem: "Wi-Fi transmission caused current spikes, destabilizing ADC reference voltage and introducing noise (Ripple).",
                process: "Analyzed 3.3V power line with oscilloscope, finding 300mVp-p ripple. Software filtering was insufficient for distorted signals.",
                solution: "Added LC filters to power lines and separated Analog/Digital grounds (AGND/DGND) with ferrite beads, improving SNR by 20dB."
            },
            links: { github: "#", video: "#" },
            blockDiagram: "https://via.placeholder.com/800x400?text=System+Block+Diagram"
        },
        {
            id: 2,
            title: "Log Analysis Automation Tool",
            category: "pc",
            summary: "10GB+ Log Parsing & Error Pattern Visualization Tool",
            techStack: ["Python", "PyQt5", "Pandas", "Matplotlib"],
            techSpec: [
                "Language: Python 3.9",
                "UI Framework: PyQt5",
                "Data Engine: Pandas, NumPy",
                "OS: Windows 10/11"
            ],
            context: "Engineers frequently crashed Excel trying to open GB-sized text logs. A visualization tool was needed to intuitively find error patterns.",
            keyFeatures: [
                "Pandas Chunking to load 10GB files without memory overflow",
                "Regex compilation improved parsing speed by 500%",
                "Prevented UI freezing using PyQt5 QThread"
            ],
            troubleshooting: {
                problem: "Main UI thread froze during large CSV loading, degrading UX (Not Responding).",
                process: "Confirmed that Python's GIL caused UI lag during CPU-bound tasks (parsing) even with simple threading.",
                solution: "Redesigned architecture using QThread and Signal-Slot mechanism to isolate parsing logic into a worker thread, communicating only progress updates to the main thread."
            },
            links: { github: "#" },
            blockDiagram: "https://via.placeholder.com/800x400?text=S/W+Flowchart"
        },
        {
            id: 3,
            title: "Real-time Server Resource Monitoring",
            category: "web",
            summary: "Full-stack Real-time Monitoring (Agent + Web)",
            techStack: ["React", "Firebase", "Python (Agent)"],
            techSpec: [
                "Frontend: React, Chart.js",
                "Backend: Firebase Realtime DB",
                "Agent: Python (psutil)",
                "Host: GCP Compute Engine"
            ],
            context: "Needed to check server status from mobile externally. Commercial solutions were too heavy/expensive.",
            keyFeatures: [
                "Python Daemon (Agent) collects CPU/RAM usage via Linux System Calls",
                "Real-time data sync via Firebase SDK (Latency < 100ms)",
                "Responsive Web Dashboard for mobile/PC access"
            ],
            troubleshooting: {
                problem: "Data loss occurred during temporary network outages, causing gaps in graphs.",
                process: "Confirmed data was discarded upon TCP transmission failure.",
                solution: "Implemented a Deque-based local buffer in the Agent. Data is stored locally during outages and batch-uploaded with timestamps upon reconnection, ensuring data integrity."
            },
            links: { github: "#", external: "#" },
            blockDiagram: "https://via.placeholder.com/800x400?text=Network+Architecture"
        }
    ]
};
