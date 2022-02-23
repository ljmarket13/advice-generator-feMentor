const advice = document.querySelector("#advice");
const button = document.querySelector("button");
const adviceId = document.querySelector('#adviceId');
const url = "https://api.adviceslip.com/advice";

const addNewAdvice = () => {
	getAdvice();
};

const getAdvice = async () => {
  try {
    const res = await fetch(url);		
		const data = await res.json();
    advice.innerHTML = '"' + data.slip.advice + '"';
		adviceId.innerHTML = data.slip.id;
  } catch (e) {
    return "There's an error!";
  }
};


button.addEventListener("click", addNewAdvice);



