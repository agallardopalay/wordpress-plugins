const translations = {
    "en": {
        calculatorTitle: 'Mortgage Calculator',
        amountLabel: 'Amount',
        amountHelpText: 'This is the total amount you wish to take out on the loan itself. This amount is not necessarily the price of the home you wish to purchase, as you may need to deduct your down payment.',
        monthlyDepositLabel: 'Monthly Deposit',
        balance: 'Balance',
        interest: 'Interest',
        totalPaid: 'Total Payments',
        totalPrincipalPaid: 'Total Principal Paid',
        totalInterestPaid: 'Total Interest Paid',
        totalEarlyPayments: 'Total of early payments',
        principalPaid: 'Principal paid',
        interestPaid: 'Interest paid',
        monthYearText: 'Month/Year',
        interestHelpText: 'This is the yearly interest rate you will pay on your mortgage. This is usually defined on your loan agreement.',
        payments: 'Payments',
        paymentSingular: 'Payment',
        paymentLower: 'payments',
        monthlyPayments: 'Monthly Payments',
        biWeeklyPayments: 'Bi-Weekly Payments',
        interestLabel: 'Interest rate',
        monthly: 'monthly',
        yearText: 'year',
        yearPluralText: 'years',
        yearPluralTextCapital: 'Years',
        termsSummary: 'Fixed Term',
        termsSummaryLabel: 'Term',
        TimeToRepayText: 'Time to repay',
        totalBalanceText: 'Total balance',
        totalInterestText: 'Total interest',
        monthlyText: 'Monthly',
        annuallyText: 'Annually',
        biweeklyText: "Bi-weekly",
        biweeklyLowerText: "bi-weekly",
        loanAmount: 'Home price',
        termInYears: 'Loan term in years',
        termInMonths: 'or months',
        orText: 'Or',
        downPaymentText: 'Down Payment',
        downPaymentHelp: 'A percentage amount of the home price paid up front and in cash.',
        downPaymentRateText: 'Down Payment',
        downPaymentRateHelp: 'A percentage of the home price paid up front and in cash—usually at least 20%.',
        dateHelpText: 'The term of your mortgage is the length of time it takes to pay off your mortgage completely. You may choose to define the terms by years or by months.',
        termHelpText: 'The summary over fixed term',
        startDateText: 'Start Date',
        startDateHelpText: 'This is the date you will receive your funds. Payments usually begin the month after the start date.',
        moneyFieldError: 'Use positive numbers less than 1 million.',
        percentageFieldError: 'Use positive numbers less than 100.',
        yearsError: 'Use real number of years (Less than 100).',
        monthsError: 'Use real number of months (Less than 1200).',
        timeError: 'Use real number of years and months (1 < years < 100 | 12 < months < 1200).',
        estimatedPayoffDate: 'Estimated Payoff Date',
        amortizationSchedule: 'Amortization Schedule',
        startingDateEmptyText: 'There is no starting date selected.',
        selectDatePlaceholder: 'Click to select a date',
        fullMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        showAmortizationBtnText: 'Show Amortization Schedule',
        hideAmortizationBtnText: 'Hide Amortization Schedule',
        withExtraPayments: 'With extra payments',
        withoutExtraPayments: 'Without extra payments',
        showExtraPayments: 'Add Extra Payments',
        hideExtraPayments: 'Hide Extra Payments',
        extraPaymentsText1: 'Enter an amount on one of the options below and click “Add Extra Payments” to see how it will change the monthly payment, interest paid and total cost of your loan.',
        extraPaymentHelp1: 'Add a set amount of money that you will add to your monthly payment every month.',
        extraPaymentHelp2: 'Make one extra payment every year on a set month.',
        extraPaymentHelp3: 'Make a one-time extra payment on a designated month and year',
        extraPaymentLabel1: 'add to your monthly payment',
        extraPaymentLabel2: 'as an extra annual payment every:',
        extraPaymentLabel3: 'as a one-time extra payment in:',
        addExtraBtnTitle: 'Add Extra Payments',
        extraLumpError: 'Extra payment cannot be made before the current date.',
        dateHelpMessage: '*Please enter a date as: mm/dd/yyyy',
        amortizationTableHelp: 'This table summarizes the repayment schedule of a loan, including dividing the monthly payment between principal and interest charges, total interest paid and the balance of the loan after each payment.',
        totalAsOf: 'Total (as of ##yyyy##)',
        amortizationPeriodSummary: 'Amortization Period Summary',
        fixedTermSummary: 'Amortization Period Summary',
    },
    "es": {
        calculatorTitle: 'Calculadora de hipoteca',
        amountLabel: 'Monto',
        amountHelpText: 'Es la cantidad total que desea tomar prestada.',
        monthlyDepositLabel: 'Depósito Mensual',
        balance: 'Balance',
        interest: 'Interés',
        totalPaid: 'Pagos totales',
        totalPrincipalPaid: 'Total del monto principal pagado',
        totalInterestPaid: 'Total del interés pagado',
        totalEarlyPayments: 'Total de pagos anticipados',
        principalPaid: 'Principal',
        interestPaid: 'Interés pagado',
        monthYearText: 'Mes/Año',
        interestHelpText: 'Es la tasa de interés anual de su préstamo, que debe ser definida en el contrato del préstamo.',
        payments: 'Pagos',
        paymentSingular: 'Pago',
        paymentLower: 'pagos',
        monthlyPayments: 'Pagos mensuales',
        biWeeklyPayments: 'Pago quincenal',
        interestLabel: 'Tasa de interés',
        monthly: 'mensual',
        yearText: 'año',
        yearPluralText: 'años',
        yearPluralTextCapital: 'Años',
        termsSummary: 'Término',
        termsSummaryLabel: 'Término',
        TimeToRepayText: 'Tiempo para pagar',
        totalInterestText: 'Interés total',
        monthlyText: 'Mensual',
        annuallyText: 'Anual',
        biweeklyText: "Quincenal",
        loanAmount: 'Monto del préstamo',
        termInYears: 'Término en años',
        termInMonths: 'o meses',
        orText: 'O',
        downPaymentText: 'Pago inicial',
        downPaymentHelp: 'Un porcentaje del precio de la vivienda pagado por adelantado y en efectivo.',
        downPaymentRateText: 'Tasa de anticipo',
        downPaymentRateHelp: 'Un porcentaje del precio de la vivienda pagado por adelantado y en efectivo, generalmente al menos el 20%.',
        dateHelpText: 'El término de un préstamo es la cantidad de tiempo que usted tendrá para pagar el total del monto. Por favor escoja un término en años o meses.',
        termHelpText: 'El resumen sobre plazo fijo',
        startDateText: 'Fecha de Comienzo',
        startDateHelpText: 'Es la fecha en que usted recibirá el dinero prestado. Usualmente los pagos comienzan el mes siguiente luego de la fecha de comienzo.',
        moneyFieldError: 'Use números positivos menores que 1 millón.',
        percentageFieldError: 'Use números positivos menores que 100',
        yearsError: 'Use una cantidad real de años. No se permiten puntos.',
        monthsError: 'Use una cantidad real de meses (menos de 1200).',
        timeError: 'Use un número real de años o meses (años <100 | meses <1200).',
        estimatedPayoffDate: 'Fecha Estimada de su Pago Final',
        amortizationSchedule: 'Plan de amortización',
        startingDateEmptyText: 'No hay una fecha de inicio seleccionada.',
        selectDatePlaceholder: 'Seleccione una fecha',
        fullMonths: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        showAmortizationBtnText: 'Ver tabla de amortización',
        hideAmortizationBtnText: 'Ocultar tabla de amortización',
        withExtraPayments: 'Con pagos extras',
        withoutExtraPayments: 'Sin pagos extras',
        showExtraPayments: 'Añadir Pagos Adicionales',
        hideExtraPayments: 'Ocultar Pagos Extras',
        extraPaymentsText1: 'Ingrese la cantidad en una de las alternativas abajo, luego haga click en “Añadir Pagos Adicionales” para ver cómo cambia su pago mensual, el interés pagado y el costo total de su préstamo.',
        extraPaymentHelp1: 'Añadir una cantidad de dinero determinada a su pago mensual.',
        extraPaymentHelp2: 'Hacer un pago adicional cada año, en un mes determinado.',
        extraPaymentHelp3: 'Hacer un pago adicional por única vez en un mes y año determinados.',
        extraPaymentLabel1: 'añadir a su pago mensual',
        extraPaymentLabel2: 'como un pago anual extra cada:',
        extraPaymentLabel3: 'como un pago único extra en:',
        addExtraBtnTitle: 'Adicionar pagos extras',
        extraLumpError: 'El pago adicional no puede hacerse antes de la fecha actual.',
        dateHelpMessage: '*Por favor ingrese la fecha en formato mm/dd/año (el año debe tener cuatro dígitos)',
        amortizationTableHelp: 'Esta tabla resume el plan de pagos de un préstamo, incluyendo el desglose del pago mensual entre el balance principal y los cargos por interés, el interés total pagado y el balance del préstamo luego de cada pago.',
        totalAsOf: 'Total (a partir de ##yyyy##)',
        amortizationPeriodSummary: 'Resumen del período de amortización',
        fixedTermSummary: 'Resumen de plazo fijo',
    },
    "ca": {
        calculatorTitle: 'Mortgage Calculator',
        amountLabel: 'Amount',
        amountHelpText: 'This is the total amount you wish to take out on the loan itself. This amount is not necessarily the price of the home you wish to purchase, as you may need to deduct your down payment.',
        monthlyDepositLabel: 'Monthly Deposit',
        balance: 'Balance',
        interest: 'Interest',
        totalPaid: 'Total Payments',
        totalPrincipalPaid: 'Total Principal Paid',
        totalInterestPaid: 'Total Interest Paid',
        totalEarlyPayments: 'Total of early payments',
        principalPaid: 'Principal paid',
        interestPaid: 'Interest paid',
        monthYearText: 'Month/Year',
        interestHelpText: 'This is the yearly interest rate you will pay on your mortgage. This is usually defined on your loan agreement.',
        payments: 'Payments',
        paymentSingular: 'Payment',
        paymentLower: 'payments',
        monthlyPayments: 'Monthly Payments',
        biWeeklyPayments: 'Bi-Weekly Payments',
        interestLabel: 'Interest rate',
        monthly: 'monthly',
        yearText: 'year',
        yearPluralText: 'years',
        yearPluralTextCapital: 'Years',
        termsSummary: 'Term',
        termsSummaryLabel: 'Term',
        TimeToRepayText: 'Time to repay',
        totalBalanceText: 'Total balance',
        totalInterestText: 'Total interest',
        monthlyText: 'Monthly',
        annuallyText: 'Annually',
        biweeklyText: "Bi-weekly",
        loanAmount: 'Home price',
        termInYears: 'Loan term in years',
        termInMonths: 'or months',
        orText: 'Or',
        downPaymentText: 'Down Payment',
        downPaymentHelp: 'A percentage amount of the home price paid up front and in cash.',
        downPaymentRateText: 'Down Payment',
        downPaymentRateHelp: 'A percentage of the home price paid up front and in cash—usually at least 20%.',
        dateHelpText: 'The term of a loan is the amount of time you have to pay it off in full. Please choose a term in either years or months.',
        termHelpText: 'The summary over fixed term',
        startDateText: 'Start Date',
        startDateHelpText: 'This is the date you will receive your funds. Payments usually begin the month after the start date.',
        moneyFieldError: 'Use positive numbers less than 1 million.',
        percentageFieldError: 'Use positive numbers less than 100.',
        yearsError: 'Use real number of years (Less than 100).',
        monthsError: 'Use real number of months (Less than 1200).',
        timeError: 'Use real number of years and months (1 < years < 100 | 12 < months < 1200).',
        estimatedPayoffDate: 'Estimated Payoff Date',
        amortizationSchedule: 'Amortization Schedule',
        startingDateEmptyText: 'There is no starting date selected.',
        selectDatePlaceholder: 'Click to select a date',
        fullMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        showAmortizationBtnText: 'Show Amortization Schedule',
        hideAmortizationBtnText: 'Hide Amortization Schedule',
        withExtraPayments: 'With extra payments',
        withoutExtraPayments: 'Without extra payments',
        showExtraPayments: 'Add Extra Payments',
        hideExtraPayments: 'Hide Extra Payments',
        extraPaymentsText1: 'Enter an amount on one of the options below and click “Add Extra Payments” to see how it will change the monthly payment, interest paid and total cost of your loan.',
        extraPaymentHelp1: 'Add a set amount of money that you will add to your monthly payment every month.',
        extraPaymentHelp2: 'Make one extra payment every year on a set month.',
        extraPaymentHelp3: 'Make a one-time extra payment on a designated month and year',
        extraPaymentLabel1: 'add to your monthly payment',
        extraPaymentLabel2: 'as an extra annual payment every:',
        extraPaymentLabel3: 'as a one-time extra payment in:',
        addExtraBtnTitle: 'Add Extra Payments',
        extraLumpError: 'Extra payment cannot be made before the current date.',
        dateHelpMessage: '*Please enter a Date as: mm/dd/yyyy',
        amortizationTableHelp: 'This table summarizes the repayment schedule of a loan, including dividing the monthly payment between principal and interest charges, total interest paid and the balance of the loan after each payment.',
        totalAsOf: 'Total (as of ##yyyy##)',
        amortizationPeriodSummary: 'Amortization Period Summary',
        fixedTermSummary: 'Amortization Period Summary',
    },
    "fr": {
        calculatorTitle: 'Calculatrice hypothécaire',
        amountLabel: 'Montant du prêt hypothécaire',
        amountHelpText: 'Montant que vous prévoyez emprunter de votre institution financière. Ce montant est calculé en prenant le prix d\'achat de votre maison, moins la mise de fonds, plus la prime d\'assurance prêt hypothécaire que vous avez à payer.',
        monthlyDepositLabel: 'Dépôt mensuel',
        balance: 'Solde',
        interest: 'Intérêt',
        totalPrincipalPaid: 'Total du capital payé',
        totalInterestPaid: 'Total des intérêts payés',
        totalEarlyPayments: 'Total des paiements anticipés',
        principalPaid: 'Principal payé',
        interestPaid: 'Intérêts payés',
        totalPaid: 'Paiements totaux',
        monthYearText: 'Mois/Année',
        interestHelpText: 'Il s\'agit du taux d\'intérêt annuel que vous paierez sur votre hypothèque. Ceci est généralement défini sur votre accord de prêt.',
        payments: 'Paiements',
        paymentSingular: 'Paiement',
        paymentLower: 'paiements',
        monthlyPayments: 'Mensualités',
        biWeeklyPayments: 'Bi-Mensuelle',
        interestLabel: 'Taux d\'intérêt',
        monthly: 'mensuel',
        yearText: 'an',
        yearPluralText: 'ans',
        yearPluralTextCapital: 'ans',
        termsSummary: 'Terme',
        termsSummaryLabel: 'Terme',
        TimeToRepayText: 'Il est temps de rembourser',
        totalBalanceText: 'Solde total',
        totalInterestText: 'Intérêt total',
        monthlyText: 'Mensuel',
        annuallyText: 'Annuellement',
        biweeklyText: "Bi-Mensuelle",
        loanAmount: 'Montant hypothécaire',
        termInYears: 'Période amortissement',
        termInMonths: 'ou mois',
        orText: 'Ou',
        downPaymentText: 'Acompte',
        downPaymentHelp: 'Un pourcentage du prix du logement payé d\'avance et en espèces.',
        downPaymentRateText: 'Taux d\'acompte',
        downPaymentRateHelp: 'Un pourcentage du prix du logement payé d\'avance et en espèces, généralement.',
        dateHelpText: 'La durée d\'un prêt correspond au temps dont vous disposez pour le rembourser intégralement. Veuillez choisir un terme en années ou en mois.',
        termHelpText: 'Aperçu de durée déterminée',
        startDateText: 'Date de début',
        startDateHelpText: 'C\'est la date à laquelle vous recevrez vos fonds. Les paiements commencent généralement le mois suivant la date de début.',
        moneyFieldError: 'Utilisez des nombres positifs inférieurs à 1 million.',
        percentageFieldError: 'Utilisez des nombres positifs inférieurs à 100.',
        yearsError: 'Utilisez le nombre réel d\'années (moins de 100).',
        monthsError: 'Utilisez le nombre réel de mois (moins de 1200).',
        timeError: 'Utilisez le nombre réel d\'années et de mois (1 <années <100 | 12 <mois <1200).',
        estimatedPayoffDate: 'Date de retour estimée',
        amortizationSchedule: 'Calendrier d\'amortissement',
        startingDateEmptyText: 'Aucune date de début n\'est sélectionnée.',
        selectDatePlaceholder: 'Cliquez pour sélectionner une date',
        fullMonths: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        shortMonths: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
        showAmortizationBtnText: 'Afficher le calendrier d\'amortissement',
        hideAmortizationBtnText: 'Masquer le calendrier d\'amortissement',
        withExtraPayments: 'Avec des paiements supplémentaires',
        withoutExtraPayments: 'Sans paiements supplémentaires',
        showExtraPayments: 'Ajouter des paiements supplémentaires',
        hideExtraPayments: 'Masquer les paiements supplémentaires',
        extraPaymentsText1: 'Entrez un montant dans l\'une des options ci-dessous et cliquez sur «Ajouter des paiements supplémentaires» pour voir comment cela changera le paiement mensuel, les intérêts payés et le coût total de votre prêt.',
        extraPaymentHelp1: 'Ajoutez un montant fixe que vous ajouterez à votre paiement mensuel chaque mois.',
        extraPaymentHelp2: 'Faites un paiement supplémentaire chaque année sur un mois déterminé.',
        extraPaymentHelp3: 'Effectuer un paiement supplémentaire unique sur un mois et une année désignés',
        extraPaymentLabel1: 'ajouter à votre paiement mensuel',
        extraPaymentLabel2: 'comme un paiement annuel supplémentaire chaque:',
        extraPaymentLabel3: 'comme un paiement supplémentaire unique en:',
        addExtraBtnTitle: 'Ajouter des paiements supplémentaires',
        extraLumpError: 'Aucun paiement supplémentaire ne peut être effectué avant la date actuelle.',
        dateHelpMessage: '*Veuillez saisir un format de date valide (mm/dd/year)',
        amortizationTableHelp: 'Ce tableau résume le calendrier de remboursement d\'un prêt, y compris la répartition du paiement mensuel entre le principal et les intérêts débiteurs, le total des intérêts payés et le solde du prêt après chaque paiement.',
        totalAsOf: 'Total (au ##yyyy##)',
        amortizationPeriodSummary: 'Aperçu de la période d\'amortissement',
        fixedTermSummary: 'Aperçu de durée déterminée',
    },

};

export default function getTranslations(lan) {
    return translations[lan];
}
