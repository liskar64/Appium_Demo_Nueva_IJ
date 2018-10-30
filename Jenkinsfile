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
			echo 'lanzo test'
			bat 'mvn test'				
			}
		}
		}
	post{
		success{
			echo 'Finalizacion correcta'
		}	
	}
}