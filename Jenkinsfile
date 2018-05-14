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
                npm install -g npm@latest
				npm ci
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
