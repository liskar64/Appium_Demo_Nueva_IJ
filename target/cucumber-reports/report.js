$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumberJava/features/5-consulta-prestamos.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 6,
  "name": "Consulta de los prestamos",
  "description": "",
  "id": "consulta-de-los-prestamos",
  "keyword": "Característica",
  "tags": [
    {
      "line": 4,
      "name": "@consulta-prestamos"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "una vez logados correctamente consultamos el saldo de los prestamos",
  "description": "",
  "id": "consulta-de-los-prestamos;una-vez-logados-correctamente-consultamos-el-saldo-de-los-prestamos",
  "type": "scenario_outline",
  "keyword": "Esquema del escenario"
});
formatter.step({
  "line": 14,
  "name": "introduzco el Usuario \u003clogin\u003e y la Contrasena \u003cpass\u003e",
  "keyword": "Cuando "
});
formatter.step({
  "line": 16,
  "name": "pulso en prestamos",
  "keyword": "Y "
});
formatter.step({
  "line": 18,
  "name": "veremos el saldo de los prestamos",
  "keyword": "Entonces "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "consulta-de-los-prestamos;una-vez-logados-correctamente-consultamos-el-saldo-de-los-prestamos;",
  "rows": [
    {
      "cells": [
        "login",
        "pass"
      ],
      "line": 21,
      "id": "consulta-de-los-prestamos;una-vez-logados-correctamente-consultamos-el-saldo-de-los-prestamos;;1"
    },
    {
      "cells": [
        "\"64026203E\"",
        "\"Ibermatica\""
      ],
      "line": 22,
      "id": "consulta-de-los-prestamos;una-vez-logados-correctamente-consultamos-el-saldo-de-los-prestamos;;2"
    }
  ],
  "keyword": "Ejemplos"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Antecedentes"
});
formatter.step({
  "line": 10,
  "name": "que me conecte a la aplicacion",
  "keyword": "Dado "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 20343292961,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "una vez logados correctamente consultamos el saldo de los prestamos",
  "description": "",
  "id": "consulta-de-los-prestamos;una-vez-logados-correctamente-consultamos-el-saldo-de-los-prestamos;;2",
  "type": "scenario",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "line": 4,
      "name": "@consulta-prestamos"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "introduzco el Usuario \"64026203E\" y la Contrasena \"Ibermatica\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Cuando "
});
formatter.step({
  "line": 16,
  "name": "pulso en prestamos",
  "keyword": "Y "
});
formatter.step({
  "line": 18,
  "name": "veremos el saldo de los prestamos",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "64026203E",
      "offset": 23
    },
    {
      "val": "Ibermatica",
      "offset": 51
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as(String,String)"
});
formatter.result({
  "duration": 11434000912,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.pulso_prestamos()"
});
formatter.result({
  "duration": 5882917160,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.consulta_saldo_prestamos()"
});
formatter.result({
  "duration": 7976916212,
  "status": "passed"
});
});