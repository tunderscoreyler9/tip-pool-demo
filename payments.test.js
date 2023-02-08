describe('payments.js tests, with set-up and tear-down', function () {
    beforeEach(function () {
        billAmtInput.value = 350;
        tipAmtInput.value = 70;
    });

    // submitPaymentInfo() test
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('350');
        expect(allPayments['payment1'].tipAmt).toEqual('70');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('should payment update #paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerText).toEqual('$350');
        expect(curTdList[1].innerText).toEqual('$70');
        expect(curTdList[2].innerText).toEqual('20%');
        expect(curTdList[3].innerText).toEqual('X');
    });

    it('should not add a new payment on submitPaymentInfo() with an empty input', function () {
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should not create payment with empty input on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });

    it('should create a new payment with the createCurPayment()', function () {
        let expectedPayment = {
            billAmt: '350',
            tipAmt: '70',
            tipPercent: 20,
        }

        expect(createCurPayment()).toEqual(expectedPayment);
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        // removes the createElement('tr') and replaces w/ ''
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });


})