let teams = [
  'Titans',
  ,'Colts'
  ,'Jags',
  ,'Texans',
  ,'Chiefs',
  ,'Broncos',
  'Raiders',
  ,'Chargers'];


const inputBox = () => {
  $('#div1').append("<label>Teams:</label>");
  $('#div1').append("<input id='userInput'></input>");
$("#userInput").focus();
}
inputBox();

$("#userInput").autocomplete({
  source: ['Titans','Colts','Jags','Texans','Chiefs','Broncos','Raiders','Chargers']});
