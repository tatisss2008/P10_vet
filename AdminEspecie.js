import { PrismaClient } from '@prisma/client'

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

class AdminEspecie{

    constructor(){
        this.prisma = new PrismaClient()
    }

    async crearEspecie(req, res){ 
        const datos=req.body;
        const especie = await this.prisma.especie.create(
            {
                data:datos
            }
        )
    }

    listarEspecie(req,res){

    }
}

module.exports=AdminEspecie;