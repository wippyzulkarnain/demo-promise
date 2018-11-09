function isImpactByteStudent(name) {
  if (name === "Albert") {
    return Promise.resolve(`${name} is impact byte student`);
  } else {
    return Promise.reject(`${name} is not impact byte student`);
  }
}

isImpactByteStudent("Albert")
  .then(ans => console.log(ans))
  .catch(err => console.log(err));

  isImpactByteStudent("susi")
  .then(ans => console.log(ans))
  .catch(err => console.log(err));