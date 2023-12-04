//const router = require('express').Router()
//const Posts = require('../models/posts')
const express = require('express')
const router = express.Router()
const SalaGrupo = require('../models/salaGrupo')

const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())


// Rotas da API

// Create - criação de dados

router.post('/', async (req, res) => {
    // const{ idSala, nome, qtd_pessoas, turma, motivo, data, horario_inicial, horario_final } = req.body

    // if (!idSala || !nome || !qtd_pessoas || !turma || !data || !horario_inicial || !horario_final || motivo) {
    //     return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    // }

    const { idSala, nome, qtd_pessoas, turma, motivo, data, horario_inicial, horario_final } = req.body;

    if (!idSala || !nome || !qtd_pessoas || !turma || !data || !horario_inicial || !horario_final || !motivo) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    if (idSala&& (idSala< 1 || idSala> 2)) {
        return res.status(400).json({ message: 'O ID da sala deve estar entre 1 e 2' });
      }

    // Verifica se já existe uma reserva para o mesmo Kindle, mesma data e horários sobrepostos
    const existingReservation = await SalaGrupo.findOne({
        idSala,
        data,
        $or: [
            {
                $and: [
                    { horario_inicial: { $lte: horario_inicial } },
                    { horario_final: { $gte: horario_inicial } }
                ]
            },
            {
                $and: [
                    { horario_inicial: { $lte: horario_final } },
                    { horario_final: { $gte: horario_final } }
                ]
            }
        ]
    });

    if (existingReservation) {
        return res.status(422).json({ message: 'Já existe uma reserva para esta sala e horário' });
    }

    const salaGrupoData = {
        idSala,
        nome,
        qtd_pessoas,
        turma,
        motivo,
        data,
        horario_inicial,
        horario_final
    }

// Cria dados no sistema

    try{
        // criando dados
        await SalaGrupo.create(salaGrupoData)

        // recurso criado com sucesso
        res.status(201).json({message: 'Reserva inserida no sistema com sucesso'})
    } catch(error){
        res.status(500).json({error: error})
    }

})

// Read - Leitura de dados
router.get('/', async(req, res) =>{
    try{
        const salaGrupo = await SalaGrupo.find()

         // status 200: a requisição foi realizada com sucesso
         res.status(200).json(salaGrupo)
    } catch(error){
        res.status(500).json({error: error})
    }
})

// Rotas dinâmicas
router.get('/:id' , async(req, res) =>{

    // Extrai o dado da requisição pela url = req.params
    const id = req.params.id

    try{
        const salaGrupo = await SalaGrupo.findOne({_id: id})

        if(!salaGrupo){
            res.status(422).json({message: 'Reserva não encontrado'})
            return
        }

        res.status(200).json(salaGrupo)

    } catch(error){
        res.status(500).json({error: error})
    }
})

// Updadte - atualização de dados (PUT, PATCH)
// PUT - espera que mandemos um objeto completo para realizar a atualização de registro do sistema
// PATCH - Atualização parcial

router.patch('/:id', async(req, res) =>{
    //a url vai vir com o id do usuario
    const id = req.params.id

    // o corpo vai vir com os dados que precisam ser atualizados
    const { idSala, nome, qtd_pessoas, turma, motivo, data, horario_inicial, horario_final } = req.body;

    if (!idSala || !nome || !qtd_pessoas || !turma || !data || !horario_inicial || !horario_final || !motivo) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
    if (idSala&& (idSala< 1 || idSala> 2)) {
        return res.status(400).json({ message: 'O ID da sala deve estar entre 1 e 2' });
      }

    // Verifica se já existe uma reserva para o mesmo Kindle, mesma data e horários sobrepostos
    const existingReservation = await SalaGrupo.findOne({
        // _id: { $ne: id },
            idSala,
            data,
            $or: [
                {
                    $and: [
                        { horario_inicial: { $lte: horario_inicial } },
                        { horario_final: { $gte: horario_inicial } }
                    ]
                },
                {
                    $and: [
                        { horario_inicial: { $lte: horario_final } },
                        { horario_final: { $gte: horario_final } }
                    ]
                }
        ]
    });

    if (existingReservation) {
        return res.status(422).json({ message: 'Já existe uma reserva para esta sala e horário' });
    }

    const salaGrupoData = {
        idSala,
        nome,
        qtd_pessoas,
        turma,
        data,
        horario_inicial,
        horario_final,
        motivo
    }

    try{
        const updatedSalaGrupo = await SalaGrupo.updateOne({_id: id}, salaGrupoData)

         // Se não atualizou nada
        if(updatedSalaGrupo.matchedCount === 0 ) { // validação de existencia de post
            res.status(422).json({message: 'A reserva não foi encontrada'})
            return 
        }

        res.status(200).json(postsData)

    }catch(error){
        res.status(500).json({error: error})
    }
})

// Delete - deletar dados

router.delete('/:id', async (req, res) =>{
    const id = req.params.id

    const salaGrupo = await SalaGrupo.findOne({_id: id})

    if(!salaGrupo){
        res.status(422).json({ message: 'A reserva não foi encontrada' })
        return // não executa mais nenhuma linha
    }

    try{
        await SalaGrupo.deleteOne({_id: id})
        res.status(200).json({ message:'Reserva removida com sucesso'})

    } catch(error){
        res.status(500).json({error: error})
    }
})

module.exports = router
