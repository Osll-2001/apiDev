**API CREADA POR OCTAVIO SURIEL LÓPEZ LÓPEZ.**

Esta api fue diseñada como proyecto final para la kata **JavaScript Avanzado.**

**Deploy hecho en Heroku**

[Visitar](https://app-api-devf.herokuapp.com/)

**Dependencias usadas**

* express
* mongoose
* cors

**Base de datos**

* MongoDB

**Entidades usadas en la base de datos**

* Bands
  * Modelo
    * `{ _id:{type:String, required:true}, name:{type:String, required:true}, genre:{type:String, required:true}, startYear:{type:Number}, urlImage:{type:String} }`
* Songs
  * Modelo
    * `{
          _id:{type:String,required:true},
          name:{ type:String, required:true},
          band:{type:String, required:true},
          genre:{type:String, required:true},
          album:{type:String,required:true},
          releaseYear:{type:Number,required:true},
          length:{type:String,required:true},
          lyrics:{type:String,required:true},
          link:{type:String,required:true}
      }`


**IMPLEMENTACIÓN**

*Nota: Tener npm y node instalado.*

1. Hacer un clone del repositorio.
2. Instalar las dependencias utilizadas.

   * `npm install Ó npm i`
3. Para correrlo de forma local utilizar el script

   * `npm start`
