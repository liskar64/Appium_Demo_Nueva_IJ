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
		stage('Maven build') {
        buildInfo = rtMaven.run pom: 'Appium_Demo_Nueva_Pipeline/pom.xml', goals: 'clean install'
    }

		}
	post{
		success{
			echo 'Finalizacion correcta'
		}	
	}
}