pipeline {
	agent any
	tools{        
		maven 'maven'  
	       } 
	stages{
		stage('inicio'){
			steps{
				echo 'Bienvenido usuario'
				}
		}
		stage('Pruebas'){
			steps{
			    bat 'mvn clean'	
                bat 'mvn test'				
			}
		}
		stage('Informe'){
		    steps{
			   script{
			      cucumber fileIncludePattern: '**/*.json', sortingMethod: 'ALPHABETICAL'
		             }
		          }
		}
		}
	post{
	    always{
		       echo 'Ha terminado el pipeline'
			   }
		success{
		       echo 'Success'
			}
		failure{
		       echo 'Failure'
			}
    }
}