const { __ } = wp.i18n;

const templates = [
	{
		value: 'default',
		label: __( 'Default', 'vt' )
	},
	{
		value: 'source',
		label: __( 'External Source Template', 'vt' )
	},
	{
		value: 'tpl/tpl-home',
		label: __( 'Home', 'vt' )
	},
	{
		value: 'tpl/tpl-about-us',
		label: __( 'About Us', 'vt' )
	},
	{
		value: 'tpl/tpl-accessibility',
		label: __( 'Accessibility', 'vt' )
	},
	{
		value: 'tpl/tpl-ask-a-coach',
		label: __( 'Ask A Coach', 'vt' )
	},
	{
		value: 'tpl/tpl-banking-basics',
		label: __( 'Banking Basics', 'vt' )
	},
	{
		value: 'tpl/tpl-benefit-providers',
		label: __( 'Benefit Providers', 'vt' )
	},
	{
		value: 'tpl/tpl-budget-analysis',
		label: __( 'Budget Analysis', 'vt' )
	},
	{
		value: 'tpl/tpl-build-a-budget',
		label: __( 'Build a Budget', 'vt' )
	},
	{
		value: 'tpl/tpl-calculator',
		label: __( 'Calculator', 'vt' )
	},
	{
		value: 'tpl/tpl-contact',
		label: __( 'Contact', 'vt' )
	},
	{
		value: 'tpl/tpl-contact-us',
		label: __( 'Contact Us', 'vt' )
	},
	{
		value: 'tpl/tpl-count-your-beans',
		label: __( 'Count your beans', 'vt' )
	},
	{
		value: 'tpl/tpl-education',
		label: __( 'Education', 'vt' )
	},
	{
		value: 'tpl/tpl-debt-to-income-ratio',
		label: __( 'Debt to income ratio', 'vt' )
	},
	{
		value: 'tpl/tpl-employers-and-eaps',
		label: __( 'Employers and eaps', 'vt' )
	},
	{
		value: 'tpl/financial-calculators',
		label: __( 'Financial Calculators', 'vt' )
	},
	{
		"value": "tpl/tpl-financial-coaching",
		"label": __( "Financial Coaching", "vt" )
	},
	{
		"value": "tpl/tpl-financial-education",
		"label": __( "Financial Education", "vt" )
	},
	{
		"value": "tpl/tpl-financial-education-videos",
		"label": __( "Financial Education Videos", "vt" )
	},
	{
		"value": "tpl/tpl-financial-goals",
		"label": __( "Financial goals", "vt" )
	},
	{
		"value": "tpl/tpl-financial-institutions",
		"label": __( "Financial institutions", "vt" )
	},
	{
		"value": "tpl/tpl-financial-publications",
		"label": __( "Financial publications", "vt" )
	},
	{
		"value": "tpl/tpl-financial-booklets",
		"label": __( "Financial booklets", "vt" )
	},
	{
		"value": "tpl/tpl-financial-tools",
		"label": __( "Financial-tools", "vt" )
	},
	{
		"value": "tpl/tpl-getting-out-of-debt",
		"label": __( "getting-out-of-debt", "vt" )
	},
	{
		"value": "tpl/tpl-infographics",
		"label": __( "Infographics", "vt" )
	},
	{
		"value": "tpl/tpl-interactive-courses",
		"label": __( "Interactive courses", "vt" )
	},
	{
		"value": "tpl/tpl-vt-maker",
		"label": __( "vt maker", "vt" )
	},
	{
		"value": "tpl/tpl-interactive",
		"label": __( "Interactive", "vt" )
	},
	{
		"value": "tpl/tpl-vt-table",
		"label": __( "vt table", "vt" )
	},
	{
		"value": "tpl/tpl-resources",
		"label": __( "Resources", "vt" )
	},
	{
		"value": "tpl/tpl-vt-tools",
		"label": __( "vt tools", "vt" )
	},
	{
		"value": "tpl/tpl-partnering-with-vt",
		"label": __( "Partnering with vt", "vt" )
	},
	{
		"value": "tpl/tpl-podcasts",
		"label": __( "Podcasts", "vt" )
	},
	{
		"value": "tpl/tpl-privacy-policy",
		"label": __( "Privacy policy", "vt" )
	},
	{
		"value": "tpl/tpl-providing-vt",
		"label": __( "Providing vt", "vt" )
	},
	{
		"value": "tpl/tpl-publications",
		"label": __( "Publications", "vt" )
	},
	{
		"value": "tpl/tpl-reduce-your-expenses",
		"label": __( "Reduce your expenses", "vt" )
	},
	{
		"value": "tpl/tpl-sample-letters",
		"label": __( "Sample letters", "vt" )
	},
	{
		"value": "tpl/tpl-seminars-and-webinars",
		"label": __( "Seminars and webinars", "vt" )
	},
	{
		"value": "tpl/tpl-spending-guidelines",
		"label": __( "Spending guidelines", "vt" )
	},
	{
		"value": "tpl/tpl-template",
		"label": __( "Template", "vt" )
	},
	{
		"value": "tpl/tpl-understanding-credit",
		"label": __( "understanding-credit", "vt" )
	},
	{
		"value": "tpl/tpl-user-profile",
		"label": __( "User-profile", "vt" )
	},
	{
		"value": "tpl/tpl-videos",
		"label": __( "Videos", "vt" )
	},
	{
		"value": "tpl/tpl-webinars",
		"label": __( "Webinars", "vt" )
	},
	{
		"value": "tpl/tpl-webinars-on-demand",
		"label": __( "webinars-on-demand", "vt" )
	},
	{
		"value": "tpl/tpl-your-net-worth",
		"label": __( "your-net-worth", "vt" )
	}
];

export default templates;
