import { PrismaClient } from '@prisma/client'

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

class AdminEspecie{

    constructor(){
        this.prisma = new PrismaClient()
    }

    crearEspecie(req, res){
        
    }

    listarEspecie(req,res){

    }
}

module.exports=AdminEspecie;