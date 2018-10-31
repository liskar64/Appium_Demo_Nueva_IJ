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
		stage('Informes'){
			script{
			    cucumber fileIncludePattern: '**/*.json', sortingMethod: 'ALPHABETICAL'	
			}
		}
		}
	post{
		success{
		      steps{
				echo 'Finalizado OK'
				}
			      
		}	
		
	}
    }
}