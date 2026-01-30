# Portfolio: Hardware to Software, Bridge the Gap.

> **"회로 설계부터 펌웨어 제어, 응용 소프트웨어까지. 시스템의 빈틈을 메우는 엔지니어 송윤오입니다."**

단순히 동작하는 제품을 만드는 것을 넘어, **하드웨어(Neural Network) - 펌웨어(Brain) - 소프트웨어(Interface)** 전체를 조망하며 최적화된 통합 솔루션을 설계합니다.

---

## 🛠️ 기술 스택 (Tech Stack: The 3-Layer System)

저는 시스템을 3가지 계층으로 나누어 이해하고 개발합니다.

### Layer 1. Application S/W (Data & Logic)
사용자와 시스템을 잇고, 데이터를 가치 있게 가공합니다.
- **Python / PyQt5**: 데이터 시각화 툴 및 자동화 PC 프로그램 개발
- **Linux (Ubuntu)**: 임베디드 리눅스 환경 구축 및 스크립트 자동화
- **GCP / Firebase**: 클라우드 기반 데이터 수집 및 대시보드 연동

### Layer 2. Control F/W (System Brain)
하드웨어 자원을 효율적으로 제어하고, 실시간성을 보장합니다.
- **STM32 (HAL/LL)**: Cortex-M MCU 기반 펌웨어 설계 및 최적화
- **FreeRTOS**: 멀티스레딩 기반의 실시간 태스크 스케줄링
- **Embedded C**: 메모리 제약 환경에서의 효율적인 코드 작성

### Layer 3. Hardware H/W (Physical Layer)
소프트웨어가 안정적으로 동작할 수 있는 물리적 기반을 다집니다.
- **Circuit Design**: 전원부 노이즈 필터링 및 신호 무결성 확보
- **PCB Layout**: Altium/KiCad 활용, AGND/DGND 분리 설계
- **Troubleshooting**: 오실로스코프를 활용한 시스템 노이즈 및 전원 문제 해결

---

## 📂 주요 프로젝트 (Key Projects)

### 1. STM32 기반 스마트 팩토리 센서 노드
> **Summary**: 산업용 모터 진동/온도 실시간 수집 IoT 노드 (High-speed Sampling)
- **Role**: 회로 설계, 펌웨어 개발 (전담)
- **Tech**: STM32F4, FreeRTOS, MQTT, ADC-DMA
- **Engineering Highlight**: Wi-Fi 전송 시 발생하는 **3.3V 전원 리플(Ripple) 문제**를 LC 필터 추가 및 AGND/DGND 분리를 통해 해결, SNR 20dB 개선.

### 2. 반도체 장비 로그 분석 자동화 툴
> **Summary**: 10GB+ 대용량 로그 파싱 및 에러 패턴 히트맵 시각화
- **Role**: PC 애플리케이션 개발 (Python)
- **Tech**: Python, PyQt5, Pandas, Matplotlib
- **Engineering Highlight**: 대용량 파일 로딩 시 **UI 프리징(Not Responding)** 현상을 **PyQt QThread**와 **Signal-Slot** 패턴을 적용하여 해결, UX 개선.

### 3. 실시간 서버 리소스 모니터링 대시보드
> **Summary**: GCP 서버 상태 실시간 모니터링 풀스택 (Agent + Web)
- **Role**: Full-stack (Agent, Backend, Frontend)
- **Tech**: React, Firebase, Python (psutil)
- **Engineering Highlight**: 네트워크 단절 시 **데이터 유실** 방지를 위해 Agent 내부에 **Deque 기반 로컬 버퍼**를 구현, 재연결 시 일괄 전송(Batch Upload) 처리.

---

## 🚀 로컬 실행 방법 (Run Locally)

```bash
# 1. 저장소 클론
git clone https://github.com/FireUknow/Portfolio.git

# 2. 프로젝트 폴더로 이동
cd Portfolio

# 3. 패키지 설치
npm install

# 4. 개발 서버 실행
npm run dev
```

---

<br>

# Portfolio (English Ver.)

> **"Bridging the gap between Circuit Design, Firmware Control, and Application Software."**

I am a **System Engineer** who designs the neural network (Circuit), the brain (Firmware), and the interface (Software). I specialize in **Full-System Optimization** beyond simple implementation.

## 🛠️ Tech Stack: The 3-Layer System

### Layer 1. Application S/W (Data & Logic)
- **Python / PyQt5**: Data Visualization & Automation Tools
- **Linux (Ubuntu)**: Embedded Linux Environment & Scripting
- **GCP / Firebase**: Cloud-based Data Collection & Dashboards

### Layer 2. Control F/W (System Brain)
- **STM32 (HAL/LL)**: Firmware Optimization on Cortex-M
- **FreeRTOS**: Real-time Task Scheduling
- **Embedded C**: Efficient Coding for Memory-Constrained Environments

### Layer 3. Hardware H/W (Physical Layer)
- **Circuit Design**: Power Noise Filtering & Signal Integrity
- **PCB Layout**: Altium/KiCad, Analog/Digital Ground Separation
- **Troubleshooting**: Identifying System Noise with Oscilloscopes

---

## 📂 Key Projects

### 1. STM32 Smart Factory Sensor Node
- **Summary**: Real-time Industrial IoT Sensor Node (High-speed Sampling)
- **Highlight**: Resolved **power ripple noise** during Wi-Fi transmission by designing **LC filters** and separating **AGND/DGND**, improving SNR by 20dB.

### 2. Log Analysis Automation Tool
- **Summary**: 10GB+ Log Parsing & Error Pattern Visualization
- **Highlight**: Solved **UI freezing** issues during large file loading by implementing **Multithreading (QThread)** and **Signal-Slot** patterns in PyQt.

### 3. Real-time Server Resource Monitoring
- **Summary**: Full-stack Real-time Monitoring (Agent + Web)
- **Highlight**: Prevented **data loss** during network outages by implementing a **local buffer (Deque)** in the agent, ensuring data integrity via batch upload upon reconnection.
