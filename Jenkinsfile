pipeline {
	agent {
		docker { image 'node:8-alpine' }
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