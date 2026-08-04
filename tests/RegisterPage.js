class RegisterPage{
    constructor (page) {
        this.page = page;
    this.firstName =    page.locator('[name="customer.firstName"]'); 
    this.lastName=      page.locator('[name="customer.lastName"]') ;
    this.address=       page.locator('[name="customer.address.street"]') ;
    this.city   =       page.locator('[name="customer.address.city"]');
    this.state =        page.locator('[name="customer.address.state"]') ;
    this.zipCode =      page.locator('[name="customer.address.zipCode"]') ;
    this.phoneNumber=   page.locator('[name="customer.phoneNumber"]');
    this.ssn=           page.locator('[name="customer.ssn"]') ;
    this.username =     page.locator('[name="customer.username"]');
    this.password =     page.locator('[name="customer.password"]');
    this.repeatedPassword = page.locator('[name="repeatedPassword"]');
     }
    async goto(){
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }
   
    async register(firstName,lastName,address,city,state,zipCode,phoneNumber,ssn,username,password,repeatedPassword){
          await  this.firstName.fill(firstName);
           await this.lastName.fill(lastName);
           await this.address.fill(address);
           await this.city.fill(city);
           await  this.state.fill(state);
           await this.zipCode.fill(zipCode);
           await this.phoneNumber.fill(phoneNumber);
            await this.ssn.fill(ssn);
            await this.username.fill(username);
            await this.password.fill(password);
           await  this.repeatedPassword.fill(repeatedPassword);
        }
    }

module.exports = { RegisterPage} ;
