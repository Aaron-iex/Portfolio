// src/data/skills.js
import { Code2, Cpu, CircuitBoard, TerminalSquare, BrainCircuit } from 'lucide-react';

export const skills = [
  {
    category: "Core Languages",
    icon: Code2,
    items: ["Embedded C++", "C", "Python (for scripting & automation)", "Assembly (Basic)"]
  },
  {
    category: "Processors & Architectures",
    icon: Cpu,
    items: ["ARM Cortex-M (STM32)", "Xtensa (ESP32)", "Raspberry Pi", "TMS320F28379D", "AVR (Arduino)"]
  },
  {
    category: "Hardware & Communication",
    icon: CircuitBoard,
    items: ["I2C, SPI, UART, CAN Bus", "Sensor Integration", "Schematic Capture & PCB Layout", "Power Electronics"]
  },
  {
    category: "Development & Tooling",
    icon: TerminalSquare,
    items: ["Git & GitHub", "GDB & JTAG/SWD Debugging", "CMake & Makefiles", "STM32CubeIDE", "MATLAB & Simulink", "Code composer Studio"]
  },
  {
    category: "Key Domains & Design",
    icon: BrainCircuit,
    items: [
        "RTOS & Bare-metal Development", "Firmware Architecture", "Control Systems Design", "Sensor Fusion Algorithms", 
        "Drone Flight Dynamics & Control", "R&D Lifecycle"  ]
  }
];