# AWS-NODE-SERVERLESS
<div align="justify">
Este repositorio alberga un proyecto que ofrece funcionalidades para el registro y consulta de pólizas de seguros, así como acceso a información adicional a través de la integración con el API de Star Wars. Desarrollado con tecnologías como Node.js, Serverless Framework, AWS y DynamoDB, proporciona una solución escalable y flexible para la gestión de pólizas y la consulta de datos relacionados con el universo de Star Wars.
<div>
  
## Empezando

Sigue estos pasos para configurar y ejecutar el proyecto.

### 1. Prerrequisitos

- [Node.js](https://nodejs.org/)
- [Serverless](https://www.serverless.com/)
- [AWS-CLI](https://docs.aws.amazon.com/es_es/cli/latest/userguide/getting-started-install.html)
- [Cuenta-AWS](https://aws.amazon.com/es/free/?gclid=CjwKCAjw_LOwBhBFEiwAmSEQAfnLOkt61mX7g6-Vxv0GLE3xP42I5CC6e9qoLL2WaGcfhyWJyYcYfxoCYtkQAvD_BwE&trk=71b8abe7-f1bf-4f78-8553-98bb6c372818&sc_channel=ps&ef_id=CjwKCAjw_LOwBhBFEiwAmSEQAfnLOkt61mX7g6-Vxv0GLE3xP42I5CC6e9qoLL2WaGcfhyWJyYcYfxoCYtkQAvD_BwE:G:s&s_kwcid=AL!4422!3!647999754693!e!!g!!aws!19685286946!149715822407&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all)

### 2. Clonar el Repositorio

```bash
git clone https://github.com/EnzoVM/aws-node-api-serverless.git
cd aws-node-api-serverless
```

### 3. Instalar Dependencias:
```bash
npm install
```
### 4. Cuenta de AWS
Para configurar tus credenciales, primero asegúrate de tener una cuenta activa y obtén tus credenciales de acceso. Luego, utiliza el siguiente comando para registrarlas:
```bash
aws configure
```
### 5. Iniciar la Aplicación:
```bash
npm run start
```
## Ejecutar pruebas unitarias (Con Jest)
### 1. Instalar Dependencias:
```bash
npm install
```
### 2. Ejecutar Pruebas:
```bash
npm run test
```