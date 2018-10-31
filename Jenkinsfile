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
		       echo 'Resultado:Ejecucion OK'
			   emailext attachLog: true, body: 'El pipipeline ha sido un exito', compressLog: true, subject: 'Resultado pipeline', to: 'c.carles@ibermatica.com'
			}
		failure{
		       echo 'Resultado:Ejecucion KO'
			   emailext attachLog: true, body: 'El pipipeline ha sido un desastre', compressLog: true, subject: 'Resultado pipeline', to: 'c.carles@ibermatica.com'
			}
    }
}