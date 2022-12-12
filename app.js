const express = require('express')
const app = express()
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const fs = require('fs')
const cors = require('cors')
dotenv.config()

//db
//MONGO_URI=mongodb://localhost/database
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connected')
  })

mongoose.connection.on('error', err => {
  console.log(`connection error: ${err.message}`)
})

// bring in routes
const postRoutes = require('./routes/post')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

//apiDocs
app.get('/', (req, res) => {
  fs.readFile('docs/apiDocs.json', (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }
    const docs = JSON.parse(data)
    res.json(docs)
  })
})
// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
app.use(cors())
app.use('/', postRoutes)
app.use('/', authRoutes)
app.use('/', userRoutes)
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({error: 'Unauthorized!'})
  }
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`a node js api s listening on port: ${port}`)
})

planos = [
    {'inPlanoPersonalizado': False, 'inSelecionado': True, 'lsChassi': [{'lsCobertura': [{'grupoRamo': {'nmGrupoRamo': 'Patrimonial – Riscos Diversos', 'nmNumeroGrupoRamo': '0171', 'pcIof': 7.38}, 'inCoberturaBasica': True, 'inDisponivelPlano': True, 'inFranquia': False, 'inQuestionario': False, 'inSelecionado': True, 'inSemFranquia': True, 'lsAssistenciaVinculada': [], 'lsCarenciaOfertaCoberturas': [], 'lsDependencia': [], 'lsFranquia': [], 'lsInformacaoComplementar': [], 'nmCobertura': 'Bolsa Protegida', 'nmIdentificadorCobertura': '7d0b4887-1a7f-4524-941f-f7564c1df40b', 'nmProcessoSusep': '15414900172201828', 'nmSituacao': 'Obrigatória', 'nrCobertura': 208, 'nrCoberturaRelativa': 1, 'pcRelativaImportanciaSegurada': 0.0, 'txDescritivoCobertura': 'Bolsa Protegida teste em DEV', 'vlImportanciaSegurada': 1000.0, 'vlImportanciaSeguradaPadrao': 1000.0, 'vlMaxImportanciaSegurada': 1000.0, 'vlMinImportanciaSegurada': 1000.0}], 'nmChassi': 'SEGURO DE ITENS PESSOAIS', 'nmIdArquivoProdutoClausula': '8d1a867c-acfd-11ea-9d2c-0242ac110002', 'nmIdentificadorPlanoChassi': 'abbbca88-8bfa-4a61-85b9-9574fb3ebd6f', 'nrChassi': 3424, 'nrVersaoChassi': 1}], 'lsTipoObjetoSegurado': [{'nrTipoObjetoSegurado': 1, 'nmTipoObjetoSegurado': 'Bolsa'}], 'nmIdentificadorPlano': '0d2a9fbe-3d6f-48bf-a26b-4ef1534f427b', 'nmPlano': 'ITENS PESSOAIS - BOLSA PROTEGIDA', 'nrPlano': 1, 'vlAdicionalFracionamento': 0.0, 'vlAssistenciaFacultativa': 0.0, 'vlCobranca': 94.32, 'vlComercial': 4.04, 'vlIof': 6.48, 'vlPremioLiquido': 87.84, 'vlPremioNet': 60.6, 'vlPremioTarifa': 0.0, 'vlPremioTotal': 94.32, 'vlTotalComissao': 27.24, 'vlTotalDesconto': 0.0, 'lsParcela': [{'nrQuantidadeParcela': 1, 'vlPrimeiraParcela': 47.16, 'vlDemaisParcelas': 0.0, 'vlParcelamentoTotal': 47.16, 'nmIdentificadorParcela': 'b09024b3-2761-407a-9744-1cf63d20ab64', 'inSelecionado': False, 'inDisponivel': True}, {'nrQuantidadeParcela': 2, 'vlPrimeiraParcela': 23.58, 'vlDemaisParcelas': 23.58, 'vlParcelamentoTotal': 47.16, 'nmIdentificadorParcela': 'd9d4450e-1d00-4463-8ffa-f1c16d247072', 'inSelecionado': False, 'inDisponivel': True}, {'nrQuantidadeParcela': 3, 'vlPrimeiraParcela': 15.72, 'vlDemaisParcelas': 15.72, 'vlParcelamentoTotal': 47.16, 'nmIdentificadorParcela': '84b78e12-11a5-4449-9ec9-e32580afdc10', 'inSelecionado': False, 'inDisponivel': True}, {'nrQuantidadeParcela': 4, 'vlPrimeiraParcela': 11.82, 'vlDemaisParcelas': 11.78, 'vlParcelamentoTotal': 47.16, 'nmIdentificadorParcela': '98cac89a-efed-4605-a9a9-b75aa2201e62', 'inSelecionado': False, 'inDisponivel': True}, {'nrQuantidadeParcela': 5, 'vlPrimeiraParcela': 9.48, 'vlDemaisParcelas': 9.42, 'vlParcelamentoTotal': 47.16, 'nmIdentificadorParcela': 'b23a078e-f926-4f3b-bf1a-acb39d36599e', 'inSelecionado': False, 'inDisponivel': True}, {'nrQuantidadeParcela': 6, 'vlPrimeiraParcela': 7.86, 'vlDemaisParcelas': 7.86, 'vlParcelamentoTotal': 47.16, 'nmIdentificadorParcela': 'b51c93ad-3f8c-4019-ba31-c96b2453aafc', 'inSelecionado': False, 'inDisponivel': True}, {'nrQuantidadeParcela': 7, 'vlPrimeiraParcela': 6.84, 'vlDemaisParcelas': 6.72, 'vlParcelamentoTotal': 47.16, 'nmIdentificadorParcela': '83b2e21a-77d7-49ec-af81-a54f94471e4b', 'inSelecionado': False, 'inDisponivel': True}, {'nrQuantidadeParcela': 8, 'vlPrimeiraParcela': 6.0, 'vlDemaisParcelas': 5.88, 'vlParcelamentoTotal': 47.16, 'nmIdentificadorParcela': '0297c304-7fc5-4297-b3c0-5c8bc4a331ac', 'inSelecionado': False, 'inDisponivel': True}, {'nrQuantidadeParcela': 9, 'vlPrimeiraParcela': 5.24, 'vlDemaisParcelas': 5.24, 'vlParcelamentoTotal': 47.16, 'nmIdentificadorParcela': '24f22a10-f38b-427b-b933-49452cbe4211', 'inSelecionado': False, 'inDisponivel': True}, {'nrQuantidadeParcela': 10, 'vlPrimeiraParcela': 4.86, 'vlDemaisParcelas': 4.7, 'vlParcelamentoTotal': 47.16, 'nmIdentificadorParcela': 'cdd81722-0674-4b2f-8255-420cdab2b6a2', 'inSelecionado': False, 'inDisponivel': True}, {'nrQuantidadeParcela': 11, 'vlPrimeiraParcela': 4.36, 'vlDemaisParcelas': 4.28, 'vlParcelamentoTotal': 47.16, 'nmIdentificadorParcela': 'd36bdcb5-1258-47c3-bfee-a2803f152814', 'inSelecionado': False, 'inDisponivel': True}, {'nrQuantidadeParcela': 12, 'vlPrimeiraParcela': 4.04, 'vlDemaisParcelas': 3.92, 'vlParcelamentoTotal': 47.16, 'nmIdentificadorParcela': '04d4b8af-a3a7-4c3b-b47b-50e5b4168efc', 'inSelecionado': False, 'inDisponivel': True}], 'lsComissao': [{'nrTipoComissao': 5, 'nmTipoComissao': 'Remuneração de agência', 'vlComissao': 0.88}, {'nrTipoComissao': 1, 'nmTipoComissao': 'Corretagem', 'vlComissao': 26.36}]}, 
    {'inPlanoPersonalizado': False, 'inSelecionado': False, 'lsChassi': [{'lsCobertura': [{'grupoRamo': {'nmGrupoRamo': 'Patrimonial – Riscos Diversos', 'nmNumeroGrupoRamo': '0171', 'pcIof': 7.38}, 'inCoberturaBasica': True, 'inDisponivelPlano': True, 'inFranquia': False, 'inQuestionario': False, 'inSelecionado': True, 'inSemFranquia': True, 'lsAssistenciaVinculada': [], 'lsCarenciaOfertaCoberturas': [], 'lsDependencia': [], 'lsFranquia': [], 'lsInformacaoComplementar': [], 'nmCobertura': 'Saque e Compra sob Coação', 'nmIdentificadorCobertura': '44c0b95d-863a-4089-8642-e566faaed8f8', 'nmProcessoSusep': '15414900172201828', 'nmSituacao': 'Obrigatória', 'nrCobertura': 206, 'nrCoberturaRelativa': 1, 'pcRelativaImportanciaSegurada': 0.0, 'txDescritivoCobertura': 'A seguradora garantirá, até o Limite Máximo de Indenização constante na Apólice de Seguro, o pagamento dos prejuízos referentes às compras ou saques efetuados com o cartão bancário (débito ou múltiplo) vinculado ao CPF/CNPJ do segurado de acordo com o plano contratado, inclusive com a utilização da tecnologia de sua Biometria, ocorridos durante a vigência do seguro e que correspondam às operações realizadas mediante coação do segurado.', 'vlImportanciaSegurada': 1000.0, 'vlImportanciaSeguradaPadrao': 1000.0, 'vlMaxImportanciaSegurada': 1000.0, 'vlMinImportanciaSegurada': 1000.0}, {'grupoRamo': {'nmGrupoRamo': 'Patrimonial – Riscos Diversos', 'nmNumeroGrupoRamo': '0171', 'pcIof': 7.38}, 'inCoberturaBasica': True, 'inDisponivelPlano': True, 'inFranquia': False, 'inQuestionario': False, 'inSelecionado': True, 'inSemFranquia': True, 'lsAssistenciaVinculada': [], 'lsCarenciaOfertaCoberturas': [], 'lsDependencia': [], 'lsFranquia': [], 'lsInformacaoComplementar': [], 'nmCobertura': 'Roubo em Caixa Eletrônico', 'nmIdentificadorCobertura': '3624769e-1e5e-40e9-875a-9fa6fca2883f', 'nmProcessoSusep': '15414900172201828', 'nmSituacao': 'Obrigatória', 'nrCobertura': 207, 'nrCoberturaRelativa': 1, 'pcRelativaImportanciaSegurada': 0.0, 'txDescritivoCobertura': 'A seguradora garantirá, até o Limite Máximo de Indenização constante na Apólice de Seguro, o pagamento do dinheiro roubado após o saque em caixa eletrônico ou caixa comum com o cartão bancário (débito ou múltiplo) e/ou por meio de utilização da tecnologia de Biometria, vinculado ao CPF/CNPJ do segurado de acordo com o plano contratado, ocorridos durante a vigência do seguro, até a distância de 10 (dez) quilômetros percorridos em até 1 (uma) hora entre o local do saque e o local do roubo.', 'vlImportanciaSegurada': 1000.0, 'vlImportanciaSeguradaPadrao': 1000.0, 'vlMaxImportanciaSegurada': 1000.0, 'vlMinImportanciaSegurada': 1000.0}], 'lsPacoteAssistencia': None, 'nmChassi': 'SEGURO DE ITENS PESSOAIS', 'nmIdArquivoProdutoClausula': '8d1a867c-acfd-11ea-9d2c-0242ac110002', 'nmIdentificadorPlanoChassi': '299ae2bb-c044-438e-b1c0-5ff823cd802f', 'nrChassi': 3424, 'nrVersaoChassi': 1}], 'lsTipoObjetoSegurado': [{'nrTipoObjetoSegurado': 2, 'nmTipoObjetoSegurado': 'Conta'}], 'nmIdentificadorPlano': '0d2a9fbe-3d6f-48bf-a26b-4ef1534f427b', 'nmPlano': 'ITENS PESSOAIS - CONTA PROTEGIDA', 'nrPlano': 1, 'vlAdicionalFracionamento': 0.0, 'vlAssistenciaFacultativa': 0.0, 'vlCobranca': 70.74, 'vlComercial': 6.06, 'vlIof': 4.86, 'vlPremioLiquido': 65.88, 'vlPremioNet': 45.45, 'vlPremioTarifa': 0.0, 'vlPremioTotal': 70.74, 'vlTotalComissao': 20.43, 'vlTotalDesconto': 0.0}
]
