pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code...'
                sh 'echo "Code checked out"'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'sleep 2'
                echo 'Build completed.'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'sleep 2'
                echo 'All tests passed.'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                sh 'sleep 2'
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
