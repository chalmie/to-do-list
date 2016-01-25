describe('Task', function (){
  it("will create a new task with the given specifications", function(){
    var testTask = new Task ("Groceries", "Buy some groceries")
    expect(testTask.item).to.equal("Groceries");
    expect(testTask.note).to.equal("Buy some groceries");
  });

});
