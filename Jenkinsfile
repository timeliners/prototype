node {
    stage('Info') {
        node --version
    }

    stage ('Prepare') {
        npm install
    }

    stage ('Test') {
        npm test
    }

    stage ('Build') {
        npm run build
    }
}
