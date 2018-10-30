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
		success{
			steps{cucumber:Cucumber reports
			    script{
			cucumber fileIncludePattern: '**/*.json', sortingMethod: 'ALPHABETICAL'
		}	
		}
	}
    }
}