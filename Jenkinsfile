pipeline {
    agent {
        docker { image 'node:8-alpine' }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Prepare') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}