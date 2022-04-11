App = {
  loading: false,
  contracts: {},
  load: async() =>{
    
    await App.loadWeb3()
    await App.loadAccount()
    await App.loadContract()
    await App.render()
    
  },
  loadWeb3:async() =>{
    if(typeof web3 !== 'undefined'){
      App.web3Provider = web3.currentProvider
      web3 = new Web3(web3.currentProvider)
    }
    else{
      window.alert("Please connect to Metamask")
    }


    if(window.ethereum){
      window.web3 = new Web3(ethereum)
      try{
        App.acc=await ethereum.enable()

        web3.eth.sendTransaction({/* ... */})
      }
      catch (error) {

      }
    }

    else if(window.web3){
      App.web3Provider = web3.currentProvider
      window.web3 = new Web3(web3.currentProvider)

      web3.eth.sendTransaction({/* ... */})

    }
    else{
      console.log('Non-Ethereum browser detected.You should consider trying metamask')
    }
  },

  loadAccount: async()=>{
    App.account = App.acc[0];
  },

  loadContract: async()=>{
    const User=await $.getJSON('User.json')
    App.contracts.User=TruffleContract(User)
    App.contracts.User.setProvider(App.web3Provider)

    App.user=await App.contracts.User.deployed()
    

  },
  render: async()=>{
    

      var a=await App.user.name();
      $('#display').html(a);

      
  },
  sign: async()=>{
    
    await App.load();
    var phone=$('#phone').val();
    window.alert(phone);
    var password=$('#password').val();
    

    await App.user.updateValues(phone,password,{from:App.account});
 },


 display: async()=>{
   window.alert('user page');
  var phone=await App.User.phone();
  var password=await App.User.password();
  

  $('#phone1').html(phone);
  $('#password1').html(password);
 


}

}  
