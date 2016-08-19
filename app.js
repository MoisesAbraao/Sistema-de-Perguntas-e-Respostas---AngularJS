var app = angular.module("App", ["ngRoute"]);

app.controller("questaoCtrl", ["$scope", function($scope){
    $scope.questoes = [

    
    {   
        q: "Questão 1",
        enunciado: 'O que é Hardware?', 
        alternativas: [
            { id: 'a', texto: 'É um conjunto de Regras para processamento do computador.' },
            { id: 'b', texto: 'É toda a parte lógica do computador.' },
            { id: 'c', texto: 'É toda parte física do computador.' },
            { id: 'd', texto: 'É a Unidade Central de Processamento.' },
        ],
        resposta: 'c'
    },

    {
        q: "Questão 2",
        enunciado: 'São Periféricos de saída: ', 
        alternativas: [
            { id: 'a', texto: 'Monitor, teclado, WebCam.' },
            { id: 'b', texto: 'Impressora, Caixa de Som, Monitor.' },
            { id: 'c', texto: 'Caixa de Som, Microfone, Mouse.' },
            { id: 'd', texto: 'Nenhuma das alternativas.' },
        ],
        resposta: 'b'
    },

    {   
        q: "Questão 3",
        enunciado: 'O que é CPU?', 
        alternativas: [
            { id: 'a', texto: 'É a memória RAM.' },
            { id: 'b', texto: 'Central Privada de Processamento.' },
            { id: 'c', texto: 'Unidade Padrão do Computador.' },
            { id: 'd', texto: 'Unidade Central de Processamento.' },
        ],
        resposta: 'd'
    },

    {
        q: "Questão 4",
        enunciado: 'É uma memória primária: ', 
        alternativas: [
            { id: 'a', texto: 'Hard Disk(HD).' },
            { id: 'b', texto: 'Pendrive.' },
            { id: 'c', texto: 'Memória RAM.' },
            { id: 'd', texto: 'CD-ROM' },
        ],
        resposta: 'c'
    },

    {
        q: "Questão 5",
        enunciado: ' São Periféricos de entrada: ', 
        alternativas: [
            { id: 'a', texto: 'Monitor, Impressora, Mouse.' },
            { id: 'b', texto: 'WebCam, Teclado, Microfone.' },
            { id: 'c', texto: 'Mouse, Scanner, Caixa de Som.' },
            { id: 'd', texto: 'Caixa de Som, Monitor, Impressora.' },
        ],
        resposta: 'b'
    },

    {
        q: "Questão 6",
        enunciado: 'A arquitetura do computador se resume em: ', 
        alternativas: [
            { id: 'a', texto: 'Saída -> Entrada <-Processamento' },
            { id: 'b', texto: 'Entrada -> Processamento -> Saída' },
            { id: 'c', texto: 'Processamento <- Saída -> Entrada' },
            { id: 'd', texto: 'Entrada -> Saída <- Processamento' },
        ],
        resposta: 'b'
    },

    {
        q: "Questão 7",
        enunciado: 'O que é Software? ', 
        alternativas: [
            { id: 'a', texto: 'É uma sequência de instrunções escritas para serem interpretadas por um PC com objetivo de executar tarefas.' },
            { id: 'b', texto: 'É um componentem eletrônico no formato de um sofá que fica ligado no PCI EXPRESS.' },
            { id: 'c', texto: 'É 1% da parte física do computador.' },
            { id: 'd', texto: 'Nenhuma das alternativas.' },
        ],
        resposta: 'a'
    },

    {
        q: "Questão 8",
        enunciado: 'O que é sistema operacional? ', 
        alternativas: [
            { id: 'a', texto: 'É um conjunto de componentes eletrônicos que estão dentro da CPU.' },
            { id: 'b', texto: 'É um conjunto de operações para calcular.' },
            { id: 'c', texto: 'É um conjunto de sequência de instrunções escritas para serem interpretadas por um PC com objetivo de executar tarefas.' },
            { id: 'd', texto: 'É um conjunto de Programas que tem como função gerenciar os recursos do sistema fornecendo um interface entre o computador e o usuá́rio.' },
        ],
        resposta: 'd'
    },

    {
        q: "Questão 9",
        enunciado: 'O que são Softwares Aplicativos? ', 
        alternativas: [
            { id: 'a', texto: 'São programas que coordenam a interação entre Hardware e Software, principalmente a transferência de informações entre a memória e os dispositivos de entrada e saída.' },
            { id: 'b', texto: 'São programas desenvolvidos para realização de tarefas ou processos específicos.' },
            { id: 'c', texto: 'Abrange todos os programas relacionados com a coordenação operacional do computador, dentre ele, o sistema operacional.' },
            { id: 'd', texto: 'Nenhuma das alternativas.' },
        ],
        resposta: 'b'
    },

    {
        q: "Questão 10",
        enunciado: 'O que são Softwares de sistemas? ', 
        alternativas: [
            { id: 'a', texto: 'São programas que coordenam a interação entre Hardware e Software, principalmente a transferência de informações entre a memória e os dispositivos de entrada e saída.' },
            { id: 'b', texto: 'Abrange todos os programas relacionados com a coordenação operacional do computador, dentre ele, o sistema operacional.' },
            { id: 'c', texto: 'São programas desenvolvidos para realização de tarefas ou processos específicos.' },
            { id: 'd', texto: 'As alternativas A e B estão corretas!' },
        ],
        resposta: 'd'
    },

    {
        q: "Questão 11",
        enunciado: 'O que é Software orientado à tarefas? ', 
        alternativas: [
            { id: 'a', texto: 'É uma memória primária.' },
            { id: 'b', texto: 'É uma CPU.' },
            { id: 'c', texto: 'É um software de produtividade para realização de tarefas com mais rapidez.' },
            { id: 'd', texto: 'Todas as alternativas estão corretas.' },
        ],
        resposta: 'c'
    },

    {
        q: "Questão 12",
        enunciado: 'O que é virus de computador? ', 
        alternativas: [
            { id: 'a', texto: 'São softwares maliciosos desenvolvidos por programadores para infectar o maior número de computadores possíveis.' },
            { id: 'b', texto: 'São germes biológicos.' },
            { id: 'c', texto: 'São programas para fins maliciosos.' },
            { id: 'd', texto: 'As alternativas A e C estão corretas!' },
        ],
        resposta: 'd'
    },

    {
        q: "Questão 13",
        enunciado: 'São sistemas operacionais: ', 
        alternativas: [
            { id: 'a', texto: 'Windows, Word, Google Chrome.' },
            { id: 'b', texto: 'Linux, Writer, Android.' },
            { id: 'c', texto: 'Android, Mac OS X, Windows.' },
            { id: 'd', texto: 'Linux Educacional, Chrome OS, Word. ' },
        ],
        resposta: 'c'
    },

    {
        q: "Questão 14",
        enunciado: 'O que é Placa Mãe? ', 
        alternativas: [
            { id: 'a', texto: 'É a parte do computador responsável por conectar e interligar todos os periféricos do computador.' },
            { id: 'b', texto: 'É a parte responsável pelo processamento do computador.' },
            { id: 'c', texto: 'É a parte responsável pela energia do computador.' },
            { id: 'd', texto: 'Todas as alternativas estão corretas.' },
        ],
        resposta: 'a'
    },

    {
        q: "Questão 15",
        enunciado: 'São tipos de Softwares de Aplicativos: ', 
        alternativas: [
            { id: 'a', texto: 'Escritório.' },
            { id: 'b', texto: 'Apoio Educacional.' },
            { id: 'c', texto: 'Automação Comercial.' },
            { id: 'd', texto: 'Todas alternativas estão corretas.' },
        ],
        resposta: 'd'
    }
    



    
    ];

    $scope.escolher_questao = function(n) {
        $scope.questao = $scope.questoes[n];
    };

    $scope.resposta_questao = function(){
        if($scope.questao.resposta == $scope.valor){
            alert("Certa Resposta!");
            //location.reload();
        }
        else{
            alert("A resposta está errada!");
        } 
    };
}])

