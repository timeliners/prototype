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
                npm install
            }
        }
        stage('Test') {
            steps {
                npm test
            }
        }
        stage('Build') {
            steps {
                npm run build
            }
        }
    }
}
