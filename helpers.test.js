describe('bill_amt & tip_amt table data input tests', function () {

    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
    });

    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(40);

        billAmtInput.value = 300;
        tipAmtInput.value = 60;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(100);
    });

    it('should expect sum total bill amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(200);

        billAmtInput.value = 300;
        tipAmtInput.value = 60;

        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(500);
    });

    it('should calculate tip percent based on a bill, from calculateTipPercent()', function () {
        expect(calculateTipPercent(250, 50)).toEqual(20);
        expect(calculateTipPercent(75, 75)).toEqual(100);
    })

    it('should calculate the tip percent based on a bill, from sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;

        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    })

    it('should create a new tr element & append a new td element from appendTd(tr, value)', () => {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'td_value');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('td_value');
    });

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });




    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});