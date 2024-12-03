pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code...'
                bat 'echo Code checked out'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                echo 'Build completed.'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                echo 'All tests passed.'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                echo 'Application deployed successfully.'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'Pipeline finished successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
