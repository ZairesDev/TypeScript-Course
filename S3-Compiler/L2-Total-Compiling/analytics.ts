// console.log('Sending....');

let logged;


function analyticsSender(data: string) {
  console.log(data)
  logged = true;

  console.log(logged);
}

analyticsSender('Hi');