# Face Recognition Attendance System

The **Face Recognition Attendance System** is a smart and automated way of taking attendance using facial recognition technology. This project is designed to recognize faces and mark attendance in real-time. It also includes features like partial map rendering, location-based points, and image uploads, making it suitable for use in educational institutions, workplaces, or even events.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## Introduction

This project is aimed at simplifying the process of taking attendance by automating it with the help of facial recognition technology. It leverages advanced computer vision techniques to detect and identify faces in real-time. The system stores attendance records securely and can be customized for different environments, such as schools, offices, or events.

## Features

- **Real-time Face Recognition**: Uses OpenCV and InsightFace for accurate face detection and recognition.
- **Smart Attendance System**: Automatically logs attendance when a face is recognized.
- **Partial Map Rendering**: Offers location-based attendance tracking.
  
## Tech Stack

- **Facial Recognition**: OpenCV, InsightFace
- **Caching**: RedisDB
- **Deployment**: Streamlit (for web interface)

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Python 3.7+** installed
- **Node.js** installed
- **pip** (Python package installer)
- **Git** installed

### Steps

1.Install Dependencies: Navigate to the project directory and install the required dependencies by running: pip install -r requirements.txt

2.Run the Application: Launch the application by executing the following command: streamlit run app.py
Access the App: Once the application is running, open your web browser and navigate to http://localhost:8501 to access the Face Attendance System App.
