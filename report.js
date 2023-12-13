//Report
/* Abstract Class:1) To declare abstract class abstract keywords are used.
                   2) It supports multiple inheritance.
                   3)shared data
                   4) support multi-level inheritance

                   
    interface calss:1)shared behavior.
                    2)It does not support multiple inheritance.
                    3)The interface can be declared with the interface keyword.
                    4)Know nothing about behavior
                                        */

/* Inheritance in function constructor:means using the parameters of the function along with adding some new parameters to 
the newly defined constructorfunction.
 For this, we need to use the call() function which allows us to call a function defined somewhere else in the current context.  */

function Person(name, gender, age) {
  this.name = name;
  yjis.gender = gender;
  this.age = age;
}

function employee(name, age, gender, officeNum) {
  //call person function
  Person.call(this, name, age, gender);

  this.officeNum = officeNum;
}
