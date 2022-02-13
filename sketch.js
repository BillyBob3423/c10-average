var sum=0;
var avg=0;
var weight=[25,32,34,45,57,61]

function setup() 

{
  sum=weight[0]+weight[1]+weight[2]+weight[3]+weight[4]+weight[5];
  avg=sum/weight.length;
  console.log("Average="+avg);
  createCanvas(400,400);
}

function draw() 
{
background(51);

}

