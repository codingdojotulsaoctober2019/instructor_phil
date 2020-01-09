
function MinMaxAvg(arr) {
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } else if(arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  console.log(`Min is: ${min}, Max is: ${max}, Average is: ${sum/arr.length}`);
  console.log('Min is: ' + min +', Max is: ' + max + ', Average is: ' + sum/arr.length);
}

var my_arr = [4,2,10,6];
MinMaxAvg(my_arr);