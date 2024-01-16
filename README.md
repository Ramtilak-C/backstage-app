# Testing Guide for Scania App

This guide provides instructions for testing the Scania App and Backstage service locally. Before you begin, ensure you have the necessary prerequisites installed on your machine.

## Prerequisites

1.  Node.js
2.  Yarn
3.  Docker
4.  Git

## Setting Up Backstage

1.  Unzip the Backstage folder:

    unzip my-backstage-app.zip

2.  Navigate to the Backstage Directory:

    cd backstage

3.  Install Dependencies:

    yarn install

4.  Start Backstage Locally:

    yarn dev

Backstage will be available at http://localhost:3000. Explore the developer portal and service catalog to verify the integration with the Scania App.

# Testing the Scania App with Docker

## Docker Pull and Run

1.  Pull the Docker Image:

    docker pull ramtilakc/scania-app:latest

2.  Run the Docker Container:

    docker run -p 4000:3000 ramtilakc/scania-app:latest

The Scania App will be accessible at http://localhost:4000. Test the application locally and ensure that it functions as expected.

## GitHub Repository

For detailed code and configuration, refer to the GitHub repository: [Scania App GitHub Repo](https://github.com/Ramtilak-C/backstage-app/)

# Local Testing Workflow

1.  Start Backstage: Follow the Backstage setup steps to run Backstage locally.

2.  Pull and Run Docker Image: Test the Scania App by pulling the Docker image and running it locally.

3.  Explore Backstage: Navigate to http://localhost:3000 to explore Backstage and verify integration with the Scania App.

4.  Test Scania App: Visit http://localhost:4000 to access the Scania App and perform local testing.

Thank you for testing the Scania App and Backstage integration! Your feedback and contributions are highly appreciated.
