function areaOfTriangle(sideA, sideB, sideC){
var semiPerimeter = 0.5 *(sideA + sideB + sideC); //calculating semi-perimiter of the triangle
var area = Math.sqrt(semiPerimeter*(semiPerimeter-sideA)*(semiPerimeter - sideB)*(semiPerimeter - sideC)) //calculating area
if (area <= 0){ //area of a triangle cannot be zero or negative
    console.log("not a triangle");
}else {
    console.log("Area of the triangle = " + area);
}

}areaOfTriangle(4,2,6);