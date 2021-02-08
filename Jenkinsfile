pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '1', artifactNumToKeepStr: '1'))
    }

    triggers {
        pollSCM('0 */1 * * 1-5')
    }

    environment {
        NEXUS_REGISTRY_URL = 'http://192.168.0.104:8081/repository/test-npm-nexus/'
        NEXUS_AUTH_TOKEN   = credentials('nexus-npm-test')
    }

    stages {
        stage('Build') {
            steps {
                checkout scm
                withGradle {
                    sh '''
                        ./gradlew test
                    '''
                }
            }
        }

        stage('Publish') {
            steps {
                withGradle {
                    sh '''
            ./gradlew npm_publish
          '''
                }
            }
        }
    }
}
