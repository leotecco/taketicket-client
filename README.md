# TakeTicket Client

[Abrir aplicação online](https://taketicket-client.herokuapp.com/)

### Membros
1. Alan da Silva Perez, RA: 578886
2. Leonardo Jorge Tecco, RA: 577472
3. Rafael Souza, RA: 580090

## Introdução
Este documento provê uma visão geral da versão do aplicativo Taketicket que está sendo liberada.
Aqui será descrito as funcionalidades do aplicativo, bem como seus problemas e limitações conhecidos.
Por último são descritas as demandas e os problemas que foram resolvidos para liberação da versão atual.

## Notas de release

### Funcionalidade

- Cadastro de participantes
- Cadastro de empresa
- Login de participantes
- Login de empresa
- Gerenciamento de sessão
- Criação de evento
- Criação de ingresso
- Listagem de ingressos

### Funcionalidades não concluídas

- Listagem de eventos da empresa - INICIADO
- Vitrine de evento na página inicial - INICIADO
- Página do evento - NÃO INICIADO
- Compra e venda de ingressos - NÃO INICIADO
- Validação dos ingressos - NÃO INICIADO
- Dashboard em tempo real dos eventos - NÃO INICIADO

## Compatibilidade

| Requisitos    | Ferramentas   |
|---------------|---------------|
| Navegadores   | Google Chrome, Mozilla Firefox, Opera, Safari, Microsoft Edge e Internet Explorer 9+.     |
| Sistemas Operacionais | UNIX, Mac OS X, Windows. |
| Tamanhos de tela | Mobile (até 720px). |

## Tecnologias

| Tecnologia   | Descrição |
|-------------|-----------|
| ReactJS | Biblioteca Javascript para criação da SPA (https://pt-br.reactjs.org/) |
| axios | Biblioteca Javascript para requisições HTTP (https://github.com/axios/axios/) |
| react-router | Biblioteca Javascript responsável pelo roteamento da aplicação (https://reactrouter.com/) |
| react-hook-form | Biblioteca Javascript para criação dos formulários (https://react-hook-form.com/) |
| yup | Biblioteca Javascript para validação de dados (https://github.com/jquense/yup/) |

## Como instalar e rodar

- `npm install`
- `npm run dev`
