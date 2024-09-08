export function score(x: number, y: number): number {
  const outerCircle_radius = 10;
  const middleCircle_radius = 5;
  const innerCircle_radius = 1;
  const out_point = 0;
  const outerCircle_point = 1;
  const middleCircle_point = 5;
  const innerCircle_point = 10;
  
  let radiusThrow = Math.sqrt((x ** 2) + (y ** 2));
  if (radiusThrow > outerCircle_radius){
    return out_point;
  }
  else if (outerCircle_radius >= radiusThrow && radiusThrow > middleCircle_radius) {
    return outerCircle_point;
  }
  else if (middleCircle_radius >= radiusThrow && radiusThrow > innerCircle_radius) {
    return middleCircle_point;
  }
  else if (innerCircle_radius >= radiusThrow ) {
    return innerCircle_point;
  }
  return 0;
}
