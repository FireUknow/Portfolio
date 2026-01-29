
export const content = {
    ko: {
        navbar: {
            about: "소개",
            projects: "프로젝트",
            skills: "기술 스택",
            contact: "연락처",
            resume: "이력서"
        },
        hero: {
            greeting: "안녕하세요, 저는",
            title: "하드웨어와 소프트웨어를 잇는",
            subtitle: "임베디드 엔지니어 이윤호입니다.",
            description: "MCU 펌웨어 개발부터 Python 기반 데이터 처리까지, 시스템 전체를 관통하는 개발을 지향합니다.",
            cta: "프로젝트 보기",
            badges: ["STM32", "Python", "Firmware", "HW Design"]
        },
        about: {
            title: "소개",
            description: [
                "저는 하드웨어 제어 능력과 소프트웨어 데이터 처리 역량을 겸비한 T자형 인재입니다.",
                "단순히 기능만 동작하는 펌웨어가 아니라, Python 및 클라우드(GCP)와 연동하여 데이터 가치를 극대화하는 시스템을 구축합니다.",
                "기계공학 베이스의 탄탄한 물리적 이해도를 바탕으로, 실제 세계의 문제를 해결하는 솔루션을 만듭니다."
            ]
        },
        skills: {
            title: "기술 스택",
            expert: "Expert (매일 사용하며 깊이 있는 이해)",
            proficient: "Proficient (프로젝트 수행 가능)"
        },
        projects: {
            title: "프로젝트",
            filter: {
                all: "전체",
                embedded: "Embedded System",
                pc: "PC Application",
                web: "Web & Automation"
            },
            modal: {
                context: "배경 및 목적",
                tech: "사용 기술",
                features: "주요 기능",
                troubleshooting: "문제 해결 (Troubleshooting)",
                links: "관련 링크"
            }
        },
        contact: {
            title: "연락하기",
            subtitle: "함께 성장할 기회를 기다립니다.",
            description: "임베디드 시스템 개발, 펌웨어 최적화, 또는 자동화 솔루션과 관련하여 궁금한 점이 있으시다면 언제든 연락 주세요.",
            btn: "메일 보내기"
        }
    },
    en: {
        navbar: {
            about: "About",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
            resume: "Resume"
        },
        hero: {
            greeting: "Hello, I am",
            title: "Bridging Hardware & Software",
            subtitle: "Embedded Engineer, Uknow Lee.",
            description: "Focusing on full-system development from MCU firmware to Python-based data processing.",
            cta: "View Projects",
            badges: ["STM32", "Python", "Firmware", "HW Design"]
        },
        about: {
            title: "About Me",
            description: [
                "I am a T-shaped engineer combining hardware control skills with software data processing capabilities.",
                "I build systems that maximize data value by integrating firmware with Python and Cloud (GCP), rather than just making it work.",
                "Based on a strong physical understanding from Mechanical Engineering, I create solutions that solve real-world problems."
            ]
        },
        skills: {
            title: "Skills",
            expert: "Expert",
            proficient: "Proficient"
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
                context: "Context",
                tech: "Tech Stack",
                features: "swKey Features",
                troubleshooting: "Troubleshooting",
                links: "Links"
            }
        },
        contact: {
            title: "Contact",
            subtitle: "Let's connect.",
            description: "Feel free to reach out regarding embedded systems, firmware optimization, or automation solutions.",
            btn: "Send Email"
        }
    }
};

export const skillsData = {
    expert: [
        { name: "C / C++", icon: "devicon-c-plain" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "STM32 (HAL/LL)", icon: "devicon-embedded-plain" },
        { name: "UART / I2C / SPI", icon: "fas fa-microchip" } // FontAwesome fallback
    ],
    proficient: [
        { name: "Git & GitHub", icon: "devicon-git-plain" },
        { name: "Ubuntu / Linux", icon: "devicon-linux-plain" },
        { name: "GCP / Firebase", icon: "devicon-googlecloud-plain" },
        { name: "React (Basic)", icon: "devicon-react-plain" }
    ]
};

export const projectsData = [
    {
        id: 1,
        title: "STM32 기반 스마트 팩토리 센서 노드",
        category: "embedded",
        summary: "산업용 모터의 진동 및 온도를 실시간으로 수집하는 IoT 센서 노드 개발",
        techStack: ["STM32F4", "FreeRTOS", "MQTT", "C"],
        context: "기존 유선 센서 시스템의 설치 및 유지보수 비용을 절감하기 위해 무선(Wi-Fi) 기반의 소형 센서 노드가 필요했습니다.",
        keyFeatures: [
            "FreeRTOS 기반 멀티스레딩으로 데이터 수집(ADC)과 통신(Wi-Fi) 병렬 처리",
            "DMA를 활용한 고속 진동 데이터 샘플링 (10kHz)",
            "저전력 모드 구현으로 배터리 수명 30% 연장"
        ],
        troubleshooting: "Wi-Fi 모듈 전송 시 ADC 노이즈 발생 문제: 전원 라인에 LC 필터 추가 및 PCB 레이아웃 수정(아날로그/디지털 그라운드 분리)을 통해 SNR 20dB 개선.",
        links: { github: "#", video: "#" },
        bgChange: false
    },
    {
        id: 2,
        title: "반도체 장비 로그 분석 자동화 툴",
        category: "pc",
        summary: "장비에서 발생하는 하루 10GB 이상의 로그를 파싱하여 에러 패턴을 시각화하는 PC 프로그램",
        techStack: ["Python", "PyQt5", "Pandas", "Matplotlib"],
        context: "엔지니어가 수동으로 엑셀을 열어 로그를 분석하는 데 하루 평균 2시간이 소요되는 비효율을 해결하고자 했습니다.",
        keyFeatures: [
            "Pandas 청크 처리를 이용한 대용량 로그 파일 고속 로딩",
            "정규표현식 기반 에러 코드 자동 추출 및 히트맵 시각화",
            "PyQt5 기반의 직관적인 사용자 인터페이스(GUI)"
        ],
        troubleshooting: "대용량 파일 로딩 시 UI 프리징 현상: Python의 Threading 모듈과 PyQt의 QThread/Signal-Slot 패턴을 적용하여 UI 반응성 확보.",
        links: { github: "#" },
        bgChange: false
    },
    {
        id: 3,
        title: "실시간 서버 리소스 모니터링 대시보드",
        category: "web",
        summary: "GCP 서버의 CPU/RAM 사용량을 웹에서 실시간으로 확인하는 풀스택 프로젝트",
        techStack: ["React", "Firebase", "Python (Agent)"],
        context: "운영 중인 서버의 상태를 외부에서도 모바일로 간편하게 확인하고 싶었습니다.",
        keyFeatures: [
            "Python psutil 라이브러리로 서버 상태 주기적 수집",
            "Firebase Realtime Database를 이용한 저지연 데이터 동기화",
            "Chart.js를 활용한 시계열 데이터 시각화"
        ],
        troubleshooting: "네트워크 불안정 시 데이터 유실 문제: 에이전트에 로컬 버퍼링 큐를 구현하여 재연결 시 누락된 데이터를 일괄 전송하도록 개선.",
        links: { github: "#", external: "#" },
        bgChange: false
    }
];
