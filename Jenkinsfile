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
				  emailext attachLog: true, body: '', compressLog: true, subject: 'Resultado pipeline', to: 'c.carles@ibermatica.com'
		             }
			   }
		success{
		       echo 'Resultado:Success'
			}
		failure{
		       echo 'Resultado:Failure'
			}
    }
}