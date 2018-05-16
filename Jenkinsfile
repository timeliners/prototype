node {
    stage('Info') {
        sh 'node --version'
    }

    stage('Prepare') {
        sh 'npm install'
    }

    stage('Test') {
        sh 'npm test'
    }

    stage('Build') {
        sh 'npm run build'
    }
}
