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
			sh 'mvn test'				
			}
		}
		}
	post{
		success{
			echo 'Finalizacion correcta'
		}	
	}
}