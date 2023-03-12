jQuery(document).ready(($)=>{const $calc={}
$calc.globals={CURRENCY_FORMAT:'0,0.00',SELF_EMPLOYMENT_BASE:0.9235,SELF_EMPLOYMENT_TAX_RATE:0.153,ADJUSTMENTS:.5}
$calc.globals.data={otherSubtotal:0,netProfit:0,selfEmploymentIncome:0,selfEmploymentTax:0}
$calc.init=()=>{$calc.DOMManager.init()}
$calc.DOMManager={}
$calc.DOMManager.elems={form:'.section-taxCalculator__form',result:'.section-taxCalculator__result',calcBtn:'.section-taxCalculator__form-button',startOverBtn:'.section-taxCalculator__result-startOver',calcInputs:'.section-taxCalculator__form-input input',inputRevenue:'.section-taxCalculator__form-input input[name="revenue"]',inputExpenses:'.section-taxCalculator__form-input input[name="expenses"]',inputOthers:'.section-taxCalculator__form-input input[name="others"]',outputTotal:'[data-calc-number="total"]',outputAdjustments:'[data-calc-number="adjustments"]',outputOtherSubtotal:'[data-calc-number="otherSubtotal"]',outputNetProfit:'[data-calc-number="netProfit"]',outputSelfEmploymentBase:'[data-calc-number="selfEmploymentBase"]',outputSelfEmploymentIncome:'[data-calc-number="selfEmploymentIncome"]',outputSelfEmploymentTaxRate:'[data-calc-number="selfEmploymentTaxRate"]',}
$calc.DOMManager.init=()=>{if(!$($calc.DOMManager.elems.calcInputs).length)return;$calc.DOMManager.initMaskMoney();$calc.DOMManager.initInputChangeEvent();$calc.DOMManager.initAppendStaticResults();$calc.DOMManager.initCalcBtnClick();$calc.DOMManager.initStartOverBtnClick()}
$calc.DOMManager.initMaskMoney=()=>{$($calc.DOMManager.elems.calcInputs).maskMoney({thousands:',',decimal:'.',allowZero:!0,prefix:'$',affixesStay:!0,bringCaretAtEndOnFocus:!1})}
$calc.DOMManager.initInputChangeEvent=()=>{const $inputs=$($calc.DOMManager.elems.calcInputs);$inputs.on('keypress',(e)=>{if(e.charCode===13){$calc.DOMManager.initShowResultsSection()}})
$inputs.on('keyup',()=>{let revenueValue=$($calc.DOMManager.elems.inputRevenue).val();let expensesValue=$($calc.DOMManager.elems.inputExpenses).val();let othersValue=$($calc.DOMManager.elems.inputOthers).val();$calc.UtilsManager.calculateTaxes(revenueValue,expensesValue,othersValue);$calc.DOMManager.initAppendResults()})}
$calc.DOMManager.initAppendResults=()=>{console.log()
const total=$calc.UtilsManager.formatMoney($calc.globals.data.selfEmploymentTax);$($calc.DOMManager.elems.outputTotal).text(total);const otherSubtotal=$calc.UtilsManager.formatMoney($calc.globals.data.otherSubtotal);$($calc.DOMManager.elems.outputOtherSubtotal).text(otherSubtotal);const netProfit=$calc.UtilsManager.formatMoney($calc.globals.data.netProfit);$($calc.DOMManager.elems.outputNetProfit).text(netProfit);const selfEmploymentIncome=$calc.UtilsManager.formatMoney($calc.globals.data.selfEmploymentIncome);$($calc.DOMManager.elems.outputSelfEmploymentIncome).text(selfEmploymentIncome)}
$calc.DOMManager.initAppendStaticResults=()=>{const adjustments=$calc.UtilsManager.formatPercentage($calc.globals.ADJUSTMENTS);$($calc.DOMManager.elems.outputAdjustments).html(`<b>${adjustments}</b>`);const selfEmploymentBase=$calc.globals.SELF_EMPLOYMENT_BASE;$($calc.DOMManager.elems.outputSelfEmploymentBase).text(selfEmploymentBase);const selfEmploymentTaxRate=$calc.UtilsManager.formatPercentageFloat($calc.globals.SELF_EMPLOYMENT_TAX_RATE);$($calc.DOMManager.elems.outputSelfEmploymentTaxRate).text(selfEmploymentTaxRate)}
$calc.DOMManager.initShowResultsSection=()=>{$($calc.DOMManager.elems.form).fadeOut(200,()=>{$($calc.DOMManager.elems.result).fadeIn(200)})}
$calc.DOMManager.initShowCalcForm=(cb)=>{$($calc.DOMManager.elems.result).fadeOut(200,()=>{$($calc.DOMManager.elems.form).fadeIn(200,cb)})}
$calc.DOMManager.initCalcBtnClick=()=>{const $calcBtn=$($calc.DOMManager.elems.calcBtn);$calcBtn.on('click',(e)=>{e.preventDefault();$calc.DOMManager.initShowResultsSection()})}
$calc.DOMManager.initStartOverBtnClick=()=>{const $startOverBtn=$($calc.DOMManager.elems.startOverBtn);const $calcInputs=$($calc.DOMManager.elems.calcInputs);$startOverBtn.on('click',(e)=>{e.preventDefault();$calcInputs.val('$0.00');$calc.DOMManager.initShowCalcForm(()=>{$calc.UtilsManager.clearTaxesData();$calc.DOMManager.initAppendResults()})})}
$calc.UtilsManager={}
$calc.UtilsManager.formatNumber=(number,format='0.00')=>{return numeral(number).format(format)}
$calc.UtilsManager.formatMoney=(amount,currency='$')=>{return `${currency}${numeral(amount).format($calc.globals.CURRENCY_FORMAT)}`}
$calc.UtilsManager.formatPercentageFloat=(percentage)=>{return `${numeral(percentage * 100).format('0.00')}%`}
$calc.UtilsManager.formatPercentage=(percentage)=>{return `${numeral(percentage * 100).format('0')}%`}
$calc.UtilsManager.parseNumber=(text,replaceString='',limit)=>{const value=parseFloat((text||'0').replace(replaceString,''))||0
return limit&&value>limit?limit:value}
$calc.UtilsManager.removeCurrencyPrefix=(text,prefix)=>{return text.replace(prefix,'')}
$calc.UtilsManager.parseInput=(inputValue)=>{inputValue=$calc.UtilsManager.removeCurrencyPrefix(inputValue,'$');inputValue=$calc.UtilsManager.formatNumber(inputValue);inputValue=$calc.UtilsManager.parseNumber(inputValue);return inputValue}
$calc.UtilsManager.calculateTaxes=(revenue,expenses,others)=>{revenue=$calc.UtilsManager.parseInput(revenue)
expenses=$calc.UtilsManager.parseInput(expenses)
others=$calc.UtilsManager.parseInput(others)
$calc.globals.data.otherSubtotal=others*$calc.globals.ADJUSTMENTS
$calc.globals.data.netProfit=revenue-expenses-$calc.globals.data.otherSubtotal
$calc.globals.data.selfEmploymentIncome=$calc.globals.data.netProfit*$calc.globals.SELF_EMPLOYMENT_BASE
$calc.globals.data.selfEmploymentTax=$calc.globals.data.selfEmploymentIncome*$calc.globals.SELF_EMPLOYMENT_TAX_RATE}
$calc.UtilsManager.clearTaxesData=()=>{$calc.globals.data.otherSubtotal=0;$calc.globals.data.netProfit=0;$calc.globals.data.selfEmploymentIncome=0;$calc.globals.data.selfEmploymentTax=0}
$calc.init()})