//import { PrismaClient } from '@prisma/client'

const { PrismaClient }=require('@prisma/client');


// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

class AdminEspecie{

    constructor(){
        this.prisma = new PrismaClient()
    }

    async crearEspecie(req, res){ 
        const datos=req.body;
        console.log("Estos son los datos"+ datos);


        const especie= await this.prisma.especie.create(
            {
                data:datos
                // data:{
                //     nombre:"firulais",
                //   clasificacion:"perro",
                //   esperanza_vida:10,
                //   peso_promedio:5,
                // }
            }
        );

        res.json(especie);

    }

    async listarEspecie(req,res){
        const especies= await this.prisma.especie.findMany();
        res.json(especies);
    }
}

module.exports=AdminEspecie;