let  resultText  =  document.querySelector  (   '#result-text'   );
  let  displayValue  =   '' ;
  let  firstNumber;
  let  latestOperator;

  function  add  (a,  b)  {
  let  x  =  Number  (a)  +  Number  (b);
  displayValue  =  x;
  resultText.textContent  =  displayValue;
  }  

  function  subtract  (a,  b)  {
  let  x  =  Number  (a)  -  Number  (b);
  displayValue  =  x;
  resultText.textContent  =  displayValue;
  }  

  function  numClick  (btn)  {
  displayValue  +=  btn.textContent;
  resultText.textContent  =  displayValue;
  }  

  let  isTwice  =  false;
  let  operatorText  =  document.querySelector  (   '#operatorr'   );
  function  operatorClick  (operator)  {
  operatorText.textContent  =  operator.textContent;
  if  (isTwice){
  resultClick  ();
  latestOperator  =  operator.textContent;
  firstNumber  =  Number  (displayValue);
  displayValue  =   ''   ;
  isTwice  =  true;
  return;
  }  

  latestOperator  =  operator.textContent;
  firstNumber  =  Number  (displayValue);
  displayValue  =   ''   ;
  isTwice  =  true;
  }  

  function  resultClick  ()  {
  isTwice  =  false;
  let  first  =  firstNumber;
  let  op  =  latestOperator;
  let  last  =  Number  (displayValue);
  if  (op  ==   '+'   )  add  (first,  last);
  if  (op  ==   '-'   )  subtract  (first,  last);
  if  (op  ==   '*'   )  multiply  (first,  last);
  if  (op  ==   '/'   )  divide  (first,  last);
  }  

  function  clearAll  ()  {
  resultText.textContent  =   ''   ;
  displayValue  =   ''   ;
  firstNumber  =  undefined;
  latestOperator  =  undefined;
  }  