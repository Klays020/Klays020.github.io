pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code...'
                bat 'echo "Code checked out"'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                bat 'timeout /t 2 >nul'
                echo 'Build completed.'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'timeout /t 2 >nul'
                echo 'All tests passed.'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                bat 'timeout /t 2 >nul'
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
