exports.allPlanos = [
	{
		label: 'Categorias',
		resource: 'categorias',
	},
	{
		label: 'Clientes',
		resource: 'clientes',
	},
	{
		label: 'Dashboard',
		resource: 'dashboard',
	},
	{
		label: 'Emissão de Pedido',
		resource: 'pedido',
	},
	{
		label: 'Emissão de Venda',
		resource: 'venda',
	},
	{
		label: 'Empresa',
		resource: 'empresa',
	},
	{
		label: 'Produtos',
		resource: 'produtos',
	},
	{
		label: 'Imagem dos Produtos',
		resource: 'imagemProdutos',
	},
	{
		label: 'Unidades',
		resource: 'unidades',
	},
	{
		label: 'Versão Mobile',
		resource: 'versaoMobile',
	},
	{
		label: 'Versão Web',
		resource: 'versaoWeb',
	},
	{
		label: 'Emissão de NFC-e mensais',
		resource: 'nfce',
	},
	{
		label: 'Nº total de Usuários',
		resource: 'qtdUsuarios',
	},
	{
		label: '(MB) Espaço em Disco',
		resource: 'armazenamento',
	},
	// {
	// 	label: 'Emissão de NFe',
	// 	resource: 'nfe',
	// },
	// {
	// 	label: 'Formas de Pagamento',
	// 	resource: 'formasPagamento',
	// },
	// {
	// 	label: 'Gerenciamento Financeiro',
	// 	resource: 'financeiro',
	// },
	{
		label: 'Controle de Estoque',
		resource: 'estoque',
	},
	{
		label: 'Suporte Humanizado',
		resource: 'suporte',
	},
	{
		label: 'Relatório Básico',
		resource: 'relatorioBasico',
	},
	{
		label: 'Relatório Avançado',
		resource: 'relatorioAvancado',
	},
	// {
	// 	label: 'TEF',
	// 	resource: 'tef',
	// },
	{
		label: 'Treinamento VIP',
		resource: 'vip',
	},
	// {
	//      label: 'Anúncios',
	//     resource:
	// },
	// {
	// 	label: 'Histório de Estque',
	// 	resource: 'historicoEstoque'
	// },
	// {
	// 	label: 'Boleto',
	// 	resource: 'boleto'
	// }
];

exports.configAllPlanos = [
	'pedido',
	'venda',
	'relatorioBasico',
	'clientes',
	'produtos',
	'categorias',
	'nfce',
	'empresa',
	'unidades',
	'formasPagamento',
	'estoque',
	'relatorioAvancado',
	'nfce',
	'nfe',
	'tef',
	'financeiro',
	'suporte',
	'qtdUsuarios',
	'vip',
	'versaoWeb',
	'versaoMobile',
	'armazenamento',
	'historicoEstoque',
	'imagemProdutos',
	'dashboard',
	'boleto',
];

exports.configsPlanoGratis = [
	'gratis', //valor relativo ao plano, o qual vai ser diferente dos outros
	'pedido',
	'venda',
	// 'relatorioBasico',
	'clientes',
	'produtos',
	'categorias',
	'nfce',
	'empresa',
	'unidades',
	// 'formasPagamento',
	// 'estoque',
	// 'relatorioAvancado',
	'nfce',
	// 'nfe',
	// 'tef',
	// 'financeiro',
	// 'suporte',
	'qtdUsuarios',
	// 'vip',
	'versaoWeb',
	'versaoMobile',
	'armazenamento',
	// 'historicoEstoque',
	'imagemProdutos',
	'dashboard',
	// 'boleto'
];

exports.configsPlanoBronze = [
	'bronze', //valor relativo ao plano, o qual vai ser diferente dos outros
	'pedido',
	'venda',
	'relatorioBasico',
	'clientes',
	'produtos',
	'categorias',
	'nfce',
	'empresa',
	'unidades',
	'formasPagamento',
	'estoque',
	// 'relatorioAvancado',
	'nfce',
	// 'nfe',
	// 'tef',
	// 'financeiro',
	'suporte',
	'qtdUsuarios',
	// 'vip',
	'versaoWeb',
	'versaoMobile',
	'armazenamento',
	// 'historicoEstoque',
	'imagemProdutos',
	'dashboard',
	// 'boleto'
];

exports.configsPlanoSilver = [
	'silver', //valor relativo ao plano, o qual vai ser diferente dos outros
	'pedido',
	'venda',
	'relatorioBasico',
	'clientes',
	'produtos',
	'categorias',
	'nfce',
	'empresa',
	'unidades',
	'formasPagamento',
	'estoque',
	'relatorioAvancado',
	'nfce',
	// 'nfe',
	// 'tef',
	// 'financeiro',
	'suporte',
	'qtdUsuarios',
	'vip',
	'versaoWeb',
	'versaoMobile',
	'armazenamento',
	'historicoEstoque',
	'imagemProdutos',
	'dashboard',
	// 'boleto'
];

exports.configsPlanoGold = [
	'gold', //valor relativo ao plano, o qual vai ser diferente dos outros
	'pedido',
	'venda',
	'relatorioBasico',
	'clientes',
	'produtos',
	'categorias',
	'nfce',
	'empresa',
	'unidades',
	'formasPagamento',
	'estoque',
	'relatorioAvancado',
	'nfce',
	'nfe',
	'tef',
	'financeiro',
	'suporte',
	'qtdUsuarios',
	'vip',
	'versaoWeb',
	'versaoMobile',
	'armazenamento',
	'historicoEstoque',
	'imagemProdutos',
	'dashboard',
	'boleto',
];

exports.plansAnyNonBooleanValue = {
	qtdUsuarios: {
		gratis: 1,
		gratis_marketplace: 1,
		bronze: 3,
		bronze_marketplace: 3,
		silver: 8,
		gold: 15,
	},
	armazenamento: {
		gratis: '10MB',
		gratis_marketplace: '10MB',
		bronze: '30MB',
		bronze_marketplace: '30MB',
		silver: '150MB',
		gold: '300MB',
	},
	nfce: {
		gratis: '10 por mês',
		gratis_marketplace: '10 por mês',
		bronze: '100 por mês',
		bronze_marketplace: '100 por mês',
		silver: '1000 por mês',
		gold: '5000 por mês',
	},
};

exports.plans = [
	{
		id: 2,
		valor: 'R$ 19,90',
		nome: 'Plano Standard',
		recursos: [
			{ nome: 'Sem Anúncios' },
			{ nome: 'NFC-e Ilimitada' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque ' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Controle de estoque' },
		],
		ativo: true,
	},
	{
		id: 3,
		valor: 'R$ 39,90',
		nome: 'Plano Confort',
		ativo: false,
		recursos: [
			{ nome: 'Sem Anúncios' },
			{ nome: 'NFC-e Ilimitada' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Histórico de movimentações' },
			{ nome: 'Relatórios Básicos', emBreve: true },
			{ nome: 'TEF', emBreve: true },
		],
	},
	{
		id: 4,
		valor: 'R$ 59,90',
		nome: 'Plano Master',
		recomendado: true,
		ativo: false,
		recursos: [
			{ nome: 'Sem Anúncios' },
			{ nome: 'NFC-e Ilimitada' },
			{ nome: 'Controle de estoque' },
			{ nome: 'Histórico de movimentações', emBreve: true },
			{ nome: 'Relatórios Básicos', emBreve: true },
			{ nome: 'TEF', emBreve: true },
			{ nome: 'Emissão de NFe', emBreve: true },
			{ nome: 'Relatórios Avançados', emBreve: true },
			{ nome: "Armazenamento de XML's", emBreve: true },
		],
	},
];