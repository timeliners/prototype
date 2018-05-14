pipeline {
	agent {
		docker { image 'node:8' }
	}
	environment {
		CI = 'true'
	}
	stages {
		stage('Info') {
			steps {
				sh 'node --version'
			}
		}
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
