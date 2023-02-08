describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not accept a name-less server input into submitServerInfo()', function() {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);

  });

  it('should update the #servertable on updateServerTable() with an input', function () {
    // call the two functions to input the server-name value
    submitServerInfo();
    updateServerTable();

    // select the updated/inputted data set
    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[1].innerText).toEqual('$0.00');
    expect(curTdList[2].innerText).toEqual('X');
  });

  afterEach(function() {
    // teardown logic: remove 'Alice' from the DOM after each test
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});

