class fakeData {
    fakeData(){

    }
  myData = [
    { email: "jharmston0@yolasite.com", password: "aoqggAFPt" },
    { email: "ddenzey1@ihg.com", password: "zX3oTIs6" },
    { email: "cbalderstone2@bravesites.com", password: "jjUYFtgHY" },
    { email: "dthomasson3@vinaora.com", password: "mykB7DLB62ht" },
    { email: "cmcpartling4@miitbeian.gov.cn", password: "K2EjnaBtaY" },
  ];

  login (email='', password='') {
      console.log(email, password)
    let myEmail, myPassword = ''
    myEmail = this.myData.find((entry)=> {
        return entry.email === email;
    })
    myPassword = this.myData.find((entry)=> {
        return entry.password === password;
    })
    console.log(myEmail,myPassword)
    return (myEmail && myPassword)
  }
}

export default new fakeData();
