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
		}
	post{
	    always{
		       echo 'Ha terminado el pipeline'
			   script{
			      cucumber fileIncludePattern: '**/*.json', sortingMethod: 'ALPHABETICAL'
		             }
			   }
		success{
		       echo 'Resultado:Success'
			}
		failure{
		       echo 'FResultado:Failure'
			}
    }
}